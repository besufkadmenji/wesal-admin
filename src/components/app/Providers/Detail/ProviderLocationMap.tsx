"use client";

import { useDict } from "@/hooks/useDict";
import { Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LocationMap } from "./LocationMap";

/**
 * A provider's registered location on a read-only map: the provider page
 * and the join request page (ClickUp 869c9e0m0) show the same one. The
 * full-screen button opens a map admins can drag and zoom.
 */
export const ProviderLocationMap = ({
  latitude,
  longitude,
}: {
  latitude?: number | null;
  longitude?: number | null;
}) => {
  const dict = useDict();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (!isFullScreen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFullScreen(false);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isFullScreen]);

  return (
    <div className="relative size-full">
      <LocationMap
        latitude={latitude}
        longitude={longitude}
        interactive={false}
      />
      <button
        type="button"
        onClick={() => setIsFullScreen(true)}
        aria-label={dict.common.fullScreenMap}
        title={dict.common.fullScreenMap}
        className="absolute end-2.5 bottom-8 z-10 grid size-8 cursor-pointer place-content-center rounded-lg bg-white text-[#666666] shadow-sm hover:text-black"
      >
        <Maximize2 className="size-4" />
      </button>

      {isFullScreen &&
        createPortal(
          <div
            role="dialog"
            aria-modal
            aria-label={dict.common.fullScreenMap}
            className="fixed inset-0 z-[1000] bg-white"
          >
            <LocationMap
              latitude={latitude}
              longitude={longitude}
              interactive
            />
            <button
              type="button"
              onClick={() => setIsFullScreen(false)}
              aria-label={dict.common.exitFullScreenMap}
              title={dict.common.exitFullScreenMap}
              autoFocus
              className="absolute end-4 top-4 z-10 grid size-10 cursor-pointer place-content-center rounded-lg bg-white text-[#1a1a1a] shadow-md"
            >
              <Minimize2 className="size-5" />
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
};
