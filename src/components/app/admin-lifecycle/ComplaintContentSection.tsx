import {
  ComplaintDetail,
  attachmentSource,
  complaintDetailCopy,
  normalizeComplaintAttachments,
} from "./complaint-detail-helpers";

export const ComplaintContentSection = ({
  complaint,
  lang,
}: {
  complaint: ComplaintDetail;
  lang: string;
}) => {
  const copy = complaintDetailCopy(lang);
  const attachments = normalizeComplaintAttachments(complaint.attachments);
  return (
    <section className="grid gap-4 rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="text-lg font-bold">{copy.content}</h2>
      <div>
        <span className="text-gray text-sm">{copy.title}</span>
        <p className="mt-1 text-lg font-semibold">{complaint.title}</p>
      </div>
      <div>
        <span className="text-gray text-sm">{copy.description}</span>
        <p className="mt-1 whitespace-pre-wrap">{complaint.description}</p>
      </div>
      <div>
        <span className="text-gray text-sm">{copy.attachments}</span>
        {attachments.length > 0 ? (
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {attachments.map((attachment, index) => {
              const source = attachmentSource(attachment);
              return (
                <a
                  key={`${source}-${index}`}
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                  className="border-gray-background overflow-hidden rounded-xl border"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={source}
                    alt={`${copy.attachments} ${index + 1}`}
                    className="h-40 w-full object-cover"
                  />
                </a>
              );
            })}
          </div>
        ) : (
          <p className="text-gray mt-1">{copy.noAttachments}</p>
        )}
      </div>
    </section>
  );
};
