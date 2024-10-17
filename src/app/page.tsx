"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/navigation";

interface MenuDataType {
  menu: string;
  url: string;
  content: React.ReactNode;
}

const MENU_DATA: MenuDataType[] = [
  {
    menu: "메인",
    url: "/",
    content: <></>,
  },
  {
    menu: "소개",
    url: "/introuduce",
    content: (
      <MenubarContent>
        <MenubarItem>
          바디프로필 <MenubarShortcut>영상</MenubarShortcut>
        </MenubarItem>

        <MenubarSeparator />
        <MenubarItem>
          소개 <MenubarShortcut>글</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    ),
  },
  {
    menu: "예약",
    url: "/reservation",
    content: (
      <MenubarContent>
        <MenubarItem>
          실시간 예약 <MenubarShortcut>예약</MenubarShortcut>
        </MenubarItem>

        <MenubarSeparator />
        <MenubarItem>예약 현황</MenubarItem>
      </MenubarContent>
    ),
  },
];
export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Menubar>
        {MENU_DATA.map((item) => {
          return (
            <MenubarMenu>
              <MenubarTrigger onClick={() => router.push(`${item.url}`)}>
                {item.menu}
              </MenubarTrigger>
              {item.content}
            </MenubarMenu>
          );
        })}
      </Menubar>
    </div>
  );
}
