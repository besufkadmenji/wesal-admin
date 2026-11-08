"use client";

import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import GoogleMapReact from "google-map-react";

const Marker = ({}: { lat: number; lng: number }) => (
  <DefaultMarkerIcon className="size-16 origin-center -translate-y-[80%] ltr:-translate-x-1/2 rtl:translate-x-1/2" />
);

const DEFAULT_CENTER = { lat: 21.636981, lng: 39.181078 };
const DEFAULT_ZOOM = 11;

/** One Google map of a provider's pin; `interactive` lets admins drag and zoom. */
export const LocationMap = ({
  latitude,
  longitude,
  interactive,
}: {
  latitude?: number | null;
  longitude?: number | null;
  interactive: boolean;
}) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
    }}
    center={{
      lat: latitude ?? DEFAULT_CENTER.lat,
      lng: longitude ?? DEFAULT_CENTER.lng,
    }}
    zoom={interactive ? DEFAULT_ZOOM + 3 : DEFAULT_ZOOM}
    options={{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: interactive,
      disableDefaultUI: !interactive,
      draggable: interactive,
      gestureHandling: interactive ? "greedy" : "none",
    }}
    yesIWantToUseGoogleMapApiInternals
  >
    {latitude && longitude && <Marker lat={latitude} lng={longitude} />}
  </GoogleMapReact>
);
