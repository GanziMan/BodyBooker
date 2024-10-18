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
import Image from "next/image";

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

export default function LayoutClient() {
  const router = useRouter();

  return (
    <>
      <Menubar className="w-full top-0 h-[50px] sticky">
        <Image src={"/images/img-logo.jpeg"} alt="" width={48} height={48} />

        {MENU_DATA.map((item) => {
          return (
            <MenubarMenu>
              <MenubarTrigger
                className="h-full"
                onClick={() => router.push(`${item.url}`)}
              >
                {item.menu}
              </MenubarTrigger>
              {item.content}
            </MenubarMenu>
          );
        })}
      </Menubar>
    </>
  );
}
