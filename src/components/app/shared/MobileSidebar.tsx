import { Sidebar } from "@/components/app/shared/Sidebar";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from "@heroui/react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** The sidebar in a drawer below `lg`; closes on navigation. */
export const MobileSidebar = () => {
  const dict = useDict();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const lang = useLang();
  useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  return (
    <>
      <Button
        onPress={onOpen}
        aria-label={dict.navigation.menu}
        className="text-primary size-10 min-w-0 shrink-0 rounded-xl bg-transparent p-0 lg:hidden dark:text-white"
        isIconOnly
      >
        <Menu className="size-5" strokeWidth={1.75} />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={lang === "ar" ? "right" : "left"}
        size="xs"
      >
        <DrawerContent className="p-0!">
          <DrawerBody className="p-0">
            <Sidebar className="grid h-dvh border-0" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
