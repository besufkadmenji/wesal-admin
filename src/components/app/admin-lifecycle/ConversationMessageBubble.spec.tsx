import { ConversationMessageBubble } from "@/components/app/admin-lifecycle/ConversationMessageBubble";
import { ConversationSenderType, MessageKind } from "@/gql/graphql";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

const message = (metadata: unknown, content = "") => ({
  id: "m1",
  senderType: ConversationSenderType.User,
  kind: MessageKind.Text,
  content,
  metadata,
  createdAt: new Date().toISOString(),
});

/** ClickUp 869fnwhm3: admins see the photos people send in a chat. */
describe("ConversationMessageBubble photos", () => {
  afterEach(cleanup);

  it("shows a chat photo with a link to the full size", () => {
    render(
      <ConversationMessageBubble
        lang="en"
        message={message({
          attachment: { filename: "abc.jpg", originalFilename: "kitchen.jpg" },
        })}
      />,
    );
    expect(screen.getByAltText("kitchen.jpg").getAttribute("src")).toContain(
      "/files/abc.jpg",
    );
    expect(screen.getByRole("link", { name: "Open photo" })).toBeTruthy();
  });

  it("keeps text-only messages as they were", () => {
    render(<ConversationMessageBubble lang="ar" message={message(null, "hola")} />);
    expect(screen.getByText("hola")).toBeTruthy();
    expect(screen.queryByRole("img")).toBeNull();
  });
});
