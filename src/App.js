import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [content, setContent] = useState("about");

  let mainContent;
  if (content === "projects") mainContent = <Projects />;
  else if (content === "about") mainContent = <About />;
  else mainContent = <Contact />;

  return (
    <div className="container">
      <Header setContent={setContent} />
      {mainContent}

      {<Footer />}
    </div>
  );
}

export default App;
