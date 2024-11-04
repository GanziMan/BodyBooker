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
}

const MENU_DATA: MenuDataType[] = [
  {
    menu: "메인",
    url: "/home",
  },
  {
    menu: "소개",
    url: "/introduce",
  },
  {
    menu: "예약",
    url: "/reservation",
  },
  {
    menu: "화보",
    url: "/reservation",
  },
];

export default function MenuBar() {
  const router = useRouter();

  return (
    <Menubar className="w-full top-0 h-[50px] sticky flex justify-around">
      <Image src={"/images/img-logo.jpeg"} alt="" width={48} height={48} />

      {MENU_DATA.map((item) => {
        return (
          <MenubarMenu>
            <MenubarTrigger
              className="h-full break-keep"
              onClick={() => router.push(`${item.url}`)}
            >
              {item.menu}
            </MenubarTrigger>
          </MenubarMenu>
        );
      })}
      <MenubarMenu>
        <MenubarTrigger
          className="h-full"
          onClick={() =>
            window.open("https://open.kakao.com/o/scA4o2Xg", "_blank")
          }
        >
          연락 및 상담 링크
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
