import { getDictionary } from "@/config/i18n/dictionaries";
import Cookies from "js-cookie";

export interface UploadResponse {
  filename: string;
  url: string;
  size: number;
}

/**
 * Upload a file through the API proxy. The API's /upload needs a Bearer
 * token, and the proxy only forwards cookies, so the admin token is sent as
 * a header like the Apollo client does (ClickUp 869fmnwpm: every admin
 * upload got a 401). Failures throw a localized message for the toast.
 */
export const uploadFile = async (file: File): Promise<UploadResponse> => {
  const form = new FormData();
  form.append("file", file);
  const lang = Cookies.get("lang") || "ar";

  const res = await fetch("/api/proxy/upload", {
    method: "POST",
    body: form,
    headers: {
      authorization: `Bearer ${Cookies.get("token") ?? ""}`,
      "accept-language": lang,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("Upload failed", res.status, text);
    const copy = getDictionary(lang).common.upload;
    throw new Error(
      res.status === 401
        ? copy.session_expired
        : res.status === 413
          ? copy.too_large
          : copy.failed,
    );
  }

  const data = (await res.json()) as UploadResponse;
  return data;
};
