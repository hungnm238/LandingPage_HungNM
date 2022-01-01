import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Business from "./components/Business";
import Services from "./components/Services";
import Showcase from "./components/Showcase";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <FAQ />
      <Business />
      <Services />
      <Showcase />
    </Layout>
  );
}

export default App;
