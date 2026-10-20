import { useDict } from "@/hooks/useDict";
import { FileCheck2, UserPlus, Wallet } from "lucide-react";
import type { CSSProperties } from "react";

const BARS = [38, 52, 44, 66, 58, 74, 88];

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

/**
 * UI-3: decorative glimpse of what the admin manages — three glass cards
 * floating out of phase. Purely visual (aria-hidden); the motion is CSS-only,
 * transform/opacity, and stops under prefers-reduced-motion.
 */
export const AuthBrandArt = () => {
  const dict = useDict();
  const glass =
    "rounded-2xl bg-white/[0.07] p-4 text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/12 backdrop-blur-md";
  return (
    <div aria-hidden className="relative h-[340px] w-full max-w-[460px]">
      {/* Stat card */}
      <div
        className="animate-auth-rise absolute start-0 top-6 w-[260px]"
        style={delay(150)}
      >
        <div className={`animate-auth-float ${glass}`} style={delay(0)}>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-content-center rounded-xl bg-[#389441]/25 text-[#8fd99a]">
              <FileCheck2 className="size-[18px]" strokeWidth={1.75} />
            </span>
            <span className="text-sm text-white/70">
              {dict.auth.art_contracts}
            </span>
          </div>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <p className="text-3xl font-semibold tabular-nums">1,248</p>
              <p className="mt-1 text-xs text-[#8fd99a]">
                +12% {dict.auth.art_this_month}
              </p>
            </div>
            <div className="flex h-12 items-end gap-1">
              {BARS.map((height, index) => (
                <span
                  key={index}
                  className="w-1.5 rounded-full bg-white/25 last:bg-[#8fd99a]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment card */}
      <div
        className="animate-auth-rise absolute end-0 top-36 w-[240px]"
        style={delay(260)}
      >
        <div className={`animate-auth-float ${glass}`} style={delay(-2600)}>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-content-center rounded-xl bg-white/12">
              <Wallet className="size-[18px]" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium">{dict.auth.art_payment}</p>
              <p className="text-xs text-white/60 tabular-nums">SAR 1,150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Provider request card */}
      <div
        className="animate-auth-rise absolute start-6 bottom-0 w-[320px]"
        style={delay(370)}
      >
        <div className={`animate-auth-float ${glass}`} style={delay(-4800)}>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-content-center rounded-full bg-[#f0c36d]/20 text-[#f6d48f]">
              <UserPlus className="size-[18px]" strokeWidth={1.75} />
            </span>
            <p className="min-w-0 flex-1 text-sm leading-snug font-medium">
              {dict.auth.art_provider}
            </p>
            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#22283a]">
              {dict.auth.art_review}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
