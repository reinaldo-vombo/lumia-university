import { buildig, calendar, home, user, users } from "@/public/icons";
import React from "react";
import { HomeIcon } from "./svgIcons";

export const content = {
  menus: [
    {
      id: 1,
      name: "Dashboard",
      icon: "",
      route: "/dashboard/admin",
      subItems: [],
    },
    {
      id: 2,
      name: "Event Managemante",
      icon: "",
      route: "/event_managemante",
      subItems: [],
    },
    {
      id: 3,
      name: "Professores",
      icon: "",
      route: "#",
      subItems: ["All Teachers", "Add Teachers"],
    },
    {
      id: 4,
      name: "Estudates",
      icon: "",
      route: "#",
      subItems: ["All Teachers", "Add Teachers"],
    },
    {
      id: 5,
      name: "Cursos",
      icon: "",
      route: "#",
      subItems: ["All Teachers", "Add Teachers"],
    },
    {
      id: 6,
      name: "Equipa",
      icon: "",
      route: "#",
      subItems: ["All Teachers", "Add Teachers"],
    },
    {
      id: 7,
      name: "Departamento",
      icon: buildig,
      route: "#",
      subItems: ["All Teachers", "Add Teachers"],
    },
  ],
  notification: [
    {
      message: "has added a ",
      route: "",
      icon: "",
      createdAT: new Date(),
    },
    {
      message: "",
      route: "Purchased",
      icon: "",
      createdAT: new Date(),
    },
    {
      message: "new student",
      route: "",
      icon: "",
      createdAT: new Date(),
    },
  ],
  chatList: [
    {
      id: 1,
      name: "Reginalde bagggle",
      photo: "/avatar.jpg",
      isOnline: true,
    },
    {
      id: 2,
      name: "Anna Maria",
      photo: "/user3.jpg",
      isOnline: true,
    },
    {
      id: 3,
      name: "Leonela Costa",
      photo: "/pic1.jpg",
      isOnline: false,
    },
    {
      id: 4,
      name: "Leonela Costa",
      photo: "/user2.jpg",
      isOnline: false,
    },
    {
      id: 5,
      name: "Alice Maria",
      photo: "/user1.jpg",
      isOnline: true,
    },
  ],
};
