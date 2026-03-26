import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Hero from "./Components/Hero/Hero";
import AboutPreview from "./Components/AboutPreview/AboutPreview";
import Skills from "./Components/Skills/Skills";

const Projects = lazy(() => import("./Components/Projects/Projects"));
const ProjectDetails = lazy(
  () => import("./Components/ProjectDetails/ProjectDetails"),
);
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage/ProjectsPage"));

const PageLoader = () => <div className="page-loader" aria-busy="true" />;

const HomePage = () => (
  <Suspense fallback={<PageLoader />}>
    <Hero />
    <Projects />
    <AboutPreview />
    <Skills />
    <Contact />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "projects",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        ),
      },

      {
        path: "projects/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetails />
          </Suspense>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
