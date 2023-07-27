import Dashboard from "views/Dashboard.js";
import Enquiry from "views/Enquiry";
import Inbox from "views/Inbox";
import Charts from "views/Charts";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inbox",
    name: "Inbox",
    icon: "nc-icon nc-chat-round",
    component: Inbox,
    layout: "/admin",
  },

  {
    path: "/enquiry",
    name: "Enquiry",
    icon: "nc-icon nc-zoom-split",
    component: Enquiry,
    layout: "/admin",
  },

  {
    path: "/charts",
    name: "Charts",
    icon: "nc-icon nc-chart-pie-36",
    component: Charts,
    layout: "/admin",
  },
];

export default dashboardRoutes;
