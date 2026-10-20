import { dataUrl } from "@/config/url";
import { MediaType } from "@/gql/graphql";
import type { ListingDetails } from "@/graphql/listing/types";
import { useDict } from "@/hooks/useDict";
import ReactPlayer from "react-player";
import { CirclePlay as PlayVideoIcon } from "lucide-react";
import { useState } from "react";
export const StoryVideo = ({ listing }: { listing: ListingDetails }) => {
  const dict = useDict();
  const [playing, setPlaying] = useState(false);
  const story = listing.story?.type === MediaType.Video ? listing.story : null;

  if (!story) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 rounded-[20px] p-0">
      <p>{dict.listingDetail.storyVideo}</p>
      <div className="relative aspect-2/1 w-full overflow-hidden rounded-xl">
        <ReactPlayer
          src={`${dataUrl}/files/${story.filename}`}
          className="object-cover"
          width={"100%"}
          height={"100%"}
          playing={playing}
          loop
          controls={playing}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute top-0 left-0 grid h-full w-full items-center justify-items-center bg-[#00000099]">
            <div
              className="playVideoIconWrapper grid size-18 cursor-pointer items-center justify-items-center rounded-full"
              onClick={() => setPlaying(true)}
            >
              <div className="playVideoIcon grid size-14 items-center justify-items-center">
                <PlayVideoIcon aria-hidden className="size-6 text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
