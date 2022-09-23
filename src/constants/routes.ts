import HomePage from "../pages/Home";
import InvoicePage from "../pages/Invoice";
import SettingsPage from "../pages/Settings";
import UsersPage from "../pages/Users";

export const routes = [
  {
    title: "Home",
    url: "/",
    icon: "",
    component: HomePage,
  },
  {
    title: "Users",
    url: "/users",
    icon: "",
    component: UsersPage,
  },
  {
    title: "Board",
    url: "/board",
    icon: "",
    component: "",
  },
  {
    title: "page4",
    url: "/page4",
    icon: "",
    component: "",
  },
  {
    title: "Invoice",
    url: "/invoice",
    icon: "",
    component: InvoicePage,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: "",
    component: SettingsPage,
  },
];
