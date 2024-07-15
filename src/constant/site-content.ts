import { buildig } from "@/public/icons";

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
      route: "/dashboard/admin/event-management",
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
  cmsMenus: [
    {
      id: 1,
      name: "Blogs",
      icon: "",
      route: "/dashboard/admin/blogs",
    },
    {
      id: 2,
      name: "Artigos",
      icon: "",
      route: "/dashboard/admin/articles",
    },
  ],
  finaces: [
    {
      id: 1,
      name: "Statisticas",
      icon: "",
      route: "/dashboard/admin/statics",
    },
    {
      id: 2,
      name: "To Do List",
      icon: "",
      route: "/dashboard/admin/tasks",
    },
    {
      id: 2,
      name: "Recibos",
      icon: "",
      route: "/dashboard/admin/recipet",
    },
  ],
  status: [
    {
      id: 1,
      title: "Total de alunos",
      data: 1.45,
      percemtage: 100,
      icon: "",
    },
    {
      id: 2,
      title: "Novos alunos",
      data: 1.45,
      percemtage: 3400,
      icon: "",
    },
    {
      id: 3,
      title: "Cursos",
      data: 1.45,
      percemtage: 20,
      icon: "",
    },
    {
      id: 3,
      title: "Free colection",
      data: 1.45,
      percemtage: 90,
      icon: "",
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
