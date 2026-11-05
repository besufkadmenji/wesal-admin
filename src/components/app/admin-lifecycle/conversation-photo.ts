/**
 * A photo sent in a chat rides on the text message's metadata
 * (ClickUp 869fnwhm3, API createMessage attachment).
 */
export type ConversationPhoto = {
  filename: string;
  originalFilename: string;
};

export const conversationPhoto = (
  metadata: unknown,
): ConversationPhoto | null => {
  const value = (metadata as { attachment?: unknown } | null)?.attachment as
    | Partial<ConversationPhoto>
    | undefined;
  return value && typeof value.filename === "string"
    ? {
        filename: value.filename,
        originalFilename: value.originalFilename ?? value.filename,
      }
    : null;
};

export const conversationPhotoUrl = (filename: string) =>
  `${process.env.NEXT_PUBLIC_DATA}/files/${filename}`;
