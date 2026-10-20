import { ChevronDown } from "lucide-react";
import { SelectLanguage } from "@/components/app/shared/SelectLanguage";
import { MobileSidebar } from "@/components/app/shared/MobileSidebar";
import { useDict } from "@/hooks/useDict";
import { useMe } from "@/hooks/useMe";
import { AdminNotificationBell } from "@/components/app/shared/notifications/AdminNotificationBell";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const ThemeSwitcher = dynamic(
  () => import("./ThemeSwitcher").then((mod) => mod.ThemeSwitcher),
  { ssr: false },
);

export const Header = () => {
  // const {} = useMe();
  return (
    <header
      className={twMerge(
        "flex h-16 items-center justify-between gap-1 border-b border-[#22283a]/[0.06] bg-white px-3 lg:h-20 lg:justify-end lg:gap-5 lg:px-8 dark:border-white/5 dark:bg-black",
      )}
    >
      <MobileSidebar />
      <div className="flex items-center gap-0 lg:gap-5">
        <ThemeSwitcher />
        <SelectLanguage />
        <AdminNotificationBell />
        <LoggedUser />
      </div>
    </header>
  );
};

const LoggedUser = () => {
  const { me, logout } = useMe();
  const dict = useDict();
  return (
    me && (
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="light"
            startContent={
              <span className="bg-primary grid size-8 shrink-0 place-content-center rounded-full text-sm font-semibold text-white dark:bg-[#6474a6]">
                {(me?.fullName ?? "").trim().charAt(0).toUpperCase()}
              </span>
            }
            endContent={
              <ChevronDown
                aria-hidden
                strokeWidth={1.75}
                className="text-subTitle size-4 shrink-0"
              />
            }
            className="text-primary h-11 items-center gap-2.5 rounded-xl px-2 text-sm font-medium lg:px-3 dark:text-white"
          >
            <span className="hidden max-w-40 truncate sm:inline">
              {me?.fullName}
            </span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Options"
          onAction={(k) => {
            if (k === "logout") {
              logout();
            }
          }}
        >
          <DropdownItem key="logout">{dict.header.logout}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  );
};
