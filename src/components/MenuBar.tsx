"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface MenuDataType {
  menu: string;
  url: string;
}

const MENU_DATA: MenuDataType[] = [
  {
    menu: "Home",
    url: "/home",
  },
  {
    menu: "About",
    url: "/introduce",
  },
  {
    menu: "Reservation",
    url: "/reservation",
  },
  {
    menu: "PhotoBook",
    url: "/profile",
  },
];

export default function MenuBar() {
  const router = useRouter();

  return (
    <Menubar className="w-full top-0 h-[50px] sticky flex justify-around border-0  border-b">
      <Image src={"/images/img-logo.jpeg"} alt="" width={48} height={48} />

      {MENU_DATA.map((item) => {
        return (
          <MenubarMenu key={item.url}>
            <MenubarTrigger
              className="h-full break-keep"
              onClick={() =>
                item.url === "/profile"
                  ? window.open("https://sexysera.gumroad.com", "_blank")
                  : router.push(`${item.url}`)
              }
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
            window.open("https://open.kakao.com/o/sKZAVw0g", "_blank")
          }
        >
          연락 및 상담 링크
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
