import React from "react";
import CAREERS from "pages/CAREERS";
import BlogsOne from "pages/BlogsOne";
import CAREERSOne from "pages/CareersOne";
import Blogs from "pages/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careersone" element={<CAREERSOne />} />
        <Route path="/blogsone" element={<BlogsOne />} />
        <Route path="/careers" element={<CAREERS />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
