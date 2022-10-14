import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
)

const Header = () => {
 return(<h1>Navbar</h1>)
}

const Footer = () => <h1>footer</h1>
