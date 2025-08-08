import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
