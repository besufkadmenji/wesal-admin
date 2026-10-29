import ar from "@/config/i18n/locales/ar.json";
import Cookies from "js-cookie";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { uploadFile } from "./file.upload";

const file = new File(["x"], "category.png", { type: "image/png" });
const respond = (status: number, body: unknown) =>
  vi.fn().mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json" },
    }),
  );

/** ClickUp 869fmnwpm: admin uploads were sent without the token (401). */
describe("uploadFile", () => {
  beforeEach(() => {
    Cookies.set("token", "admin-token");
    Cookies.set("lang", "ar");
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    Cookies.remove("token");
    Cookies.remove("lang");
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("sends the admin token and returns the uploaded file", async () => {
    const fetchMock = respond(200, { filename: "f.png", url: "/u/f.png" });
    vi.stubGlobal("fetch", fetchMock);

    await expect(uploadFile(file)).resolves.toMatchObject({
      filename: "f.png",
    });
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/proxy/upload");
    expect(init.headers).toMatchObject({
      authorization: "Bearer admin-token",
      "accept-language": "ar",
    });
  });

  it.each([
    [401, ar.common.upload.session_expired],
    [413, ar.common.upload.too_large],
    [500, ar.common.upload.failed],
  ])("turns a %i into a readable Arabic message", async (status, message) => {
    vi.stubGlobal(
      "fetch",
      respond(status, { message: "Unauthorized", statusCode: status }),
    );
    await expect(uploadFile(file)).rejects.toThrow(message);
  });
});
