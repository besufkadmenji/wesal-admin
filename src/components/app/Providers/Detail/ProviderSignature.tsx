import Image from "next/image";

export const ProviderSignature = ({
  image,
  label,
}: {
  image: string;
  label: string;
}) => (
  <div className="grid grid-cols-1 gap-2">
    <p className="text-primary font-medium dark:text-white">{label}</p>
    {/* Signatures are dark ink: keep a white backing in dark mode. */}
    <div className="relative h-40 w-full rounded-xl bg-white">
      <Image src={image} alt={label} fill className="object-contain" />
    </div>
  </div>
);
