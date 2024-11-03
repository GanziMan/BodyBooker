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
import VideoPlayer from "@/components/VideoPlayer";
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
    url: "/home",
    content: <></>,
  },
  {
    menu: "프로필",
    url: "/prfoile",
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
    content: <></>,
    // content: (
    //   <MenubarContent>
    //     <MenubarSeparator />
    //     <MenubarItem>예약 현황</MenubarItem>
    //   </MenubarContent>
    // ),
  },
  {
    menu: "화보 판매",
    url: "/reservation",
    content: (
      <MenubarContent>
        <MenubarSeparator />
        <MenubarItem>예약 현황</MenubarItem>
      </MenubarContent>
    ),
  },
  // {
  //   menu: "상담 및 연락 링크",
  //   url: "/reservation",
  //   content: (
  //     <MenubarContent>
  //       <MenubarSeparator />
  //       <MenubarItem>예약 현황</MenubarItem>
  //     </MenubarContent>
  //   ),
  // },
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
    </>
  );
}
