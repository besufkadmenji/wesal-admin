import { ChevronDownIcon } from "@/assets/icons/app/header/index";
import { SelectLanguage } from "@/components/app/shared/SelectLanguage";
import { MobileSidebar } from "@/components/app/shared/Sidebar";
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
        "flex h-16 items-center justify-between gap-1 bg-white px-2 lg:justify-end lg:gap-5 lg:px-10 dark:bg-black",
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
            variant="flat"
            endContent={<ChevronDownIcon className="size-2.5 shrink-0" />}
            className="items-center rounded-lg bg-[#FEF5EA] px-2 text-xs text-black md:text-sm lg:px-4 lg:text-base"
          >
            {me?.fullName}
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
