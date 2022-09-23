import { AiFillAppstore } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TbFileInvoice, TbLayoutBoard } from "react-icons/tb";
import {HiOutlineInboxIn} from 'react-icons/hi'
import { BsChatLeftDots,BsCalendarWeek } from "react-icons/bs";
import {VscFileSubmodule} from 'react-icons/vsc'
import {RiPriceTagLine} from 'react-icons/ri'
import { TiDocument } from "react-icons/ti";


export const sidebarMain = {
  title: "MAIN",
  items: [
    {
      icon: AiFillAppstore,
      name: "Dashboard",
      url: "/",
    },
    {
      icon: FiUsers,
      name: "Users",
      url: "/users",
    },
    {
        icon: TbLayoutBoard,
        name: "Board",
        url: "/board",
      },
  ],
};


export const sidebarCom = {
    title: "COMMUNICATIONS",
    items: [
      {
        icon: HiOutlineInboxIn ,
        name: "Inbox",
        url: "/inbox",
      },
      {
        icon: BsChatLeftDots,
        name: "Chat",
        url: "/chat",
      },
    ],
  };
  

  export const sidebarPages = {
    title: "Pages",
    items: [
      {
        icon: VscFileSubmodule,
        name: "File Manager",
        url: "/file-manager",
      },
      {
        icon: BsCalendarWeek,
        name: "Calendar",
        url: "/calendar",
      },
      {
        icon: RiPriceTagLine,
        name: "Pricing",
        url: "/pricing",
      },
      {
        icon: TbFileInvoice,
        name: "Invoice",
        url: "/invoice",
      },
      {
        icon: TiDocument,
        name: "Documentation",
        url: "/documentation",
      },
   
    ],
  };