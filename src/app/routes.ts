import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { HowItWorks } from "./pages/HowItWorks";
import { CaseStudies } from "./pages/CaseStudies";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "how-it-works", Component: HowItWorks },
      { path: "case-studies", Component: CaseStudies },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
