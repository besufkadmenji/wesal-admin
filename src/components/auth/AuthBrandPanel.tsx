import LogoIcon from "@/assets/icons/main.logo.svg";
import { AuthBrandArt } from "@/components/auth/AuthBrandArt";
import { useDict } from "@/hooks/useDict";

/** UI-3: the navy Wesal panel beside the auth forms (large screens). */
export const AuthBrandPanel = () => {
  const dict = useDict();
  return (
    <aside className="bg-primary relative isolate hidden overflow-hidden p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
      {/* Ambient light: two soft orbs drifting slowly out of phase. */}
      <span
        aria-hidden
        className="animate-auth-drift absolute -start-32 -top-32 -z-10 size-[460px] rounded-full bg-[#4a5b94]/45 blur-3xl"
      />
      <span
        aria-hidden
        className="animate-auth-drift absolute -end-40 bottom-[-10rem] -z-10 size-[420px] rounded-full bg-[#389441]/25 blur-3xl"
        style={{ animationDelay: "-11s" }}
      />
      {/* Slow-turning dashed ring and a faint dot grid. */}
      <span
        aria-hidden
        className="animate-auth-spin absolute -end-44 -top-44 -z-10 size-[560px] rounded-full border border-dashed border-white/12"
      />
      <span
        aria-hidden
        className="absolute -end-24 -top-24 -z-10 size-[380px] rounded-full border border-white/8"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] [background-size:22px_22px]"
      />

      <LogoIcon className="animate-auth-rise h-16 w-auto self-start text-white" />

      <div className="flex flex-1 items-center justify-center py-10">
        <AuthBrandArt />
      </div>

      <div className="grid max-w-md gap-4">
        <h2
          className="animate-auth-rise text-4xl leading-tight font-semibold"
          style={{ animationDelay: "450ms" }}
        >
          {dict.auth.brand_title}
        </h2>
        <p
          className="animate-auth-rise text-lg leading-relaxed text-white/70"
          style={{ animationDelay: "520ms" }}
        >
          {dict.auth.brand_tagline}
        </p>
      </div>
    </aside>
  );
};
