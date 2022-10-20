import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
};

export default App;

const Layout = () => {
  return (
    <>
      <h1>Welcome to the app</h1>
      <Outlet />
    </>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Contact = () => {
  return <h2>Contact</h2>;
};