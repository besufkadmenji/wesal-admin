import { Globe as GlobIcon } from "lucide-react";
import EnFlag from "@/assets/svgs/gb.svg";
import ArFlag from "@/assets/svgs/sa.svg";
import { changeLang } from "@/config/i18n/changeLang";
import { useDict } from "@/hooks/useDict";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
const langMap: {
  [key: string]: { label: string; flag: ReactNode };
} = {
  ar: {
    label: "العربية",
    flag: <ArFlag className={"h-4 w-6 shrink-0"} />,
  },
  en: {
    label: "English",
    flag: <EnFlag className={"h-4 w-6 shrink-0"} />,
  },
};
export const SelectLanguage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const a11y = useDict().common.a11y;
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          className="bg-white text-xs text-neutral-800 dark:bg-black dark:text-white"
          isIconOnly
          aria-label={a11y.language}
        >
          <GlobIcon aria-hidden className="size-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={a11y.language}
        onAction={(k) => {
          if (!k) return;
          changeLang(
            k.toString(),
            pathname.replace("/ar", "").replace("/en", ""),
            searchParams.toString(),
            false,
          );
        }}
      >
        <DropdownItem key="ar" startContent={langMap["ar"].flag}>
          {langMap["ar"].label}
        </DropdownItem>
        <DropdownItem key="en" startContent={langMap["en"].flag}>
          {langMap["en"].label}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
