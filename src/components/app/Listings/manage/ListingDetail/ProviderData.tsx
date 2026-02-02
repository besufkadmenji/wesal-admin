import { Provider } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import Image from "next/image";
import { Ratings } from "./MainInfo";

export const ProviderData = ({ provider }: { provider: Provider }) => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-1 gap-6 rounded-[20px] bg-white p-5">
      <p>{dict.listingDetail.serviceProviderData}</p>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="relative size-14 rounded-full">
          <Image
            src={"/images/no.avatar.png"}
            alt="provider"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-2">
          <p className="text-lg leading-5.25 font-medium text-[#1A1A1A]">
            {provider.name}
          </p>
          <Ratings
            rating={4.5}
            classNames={{
              rating: "size-4",
              info: "text-sm text-gray",
            }}
          />
        </div>
      </div>
    </div>
  );
};
