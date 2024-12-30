//import { Route } from "wouter";
import Landing from "./Landing";
import About from "./About";
import Projects from "./LatestLaunches";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Designs from "./Designs";
import { Route } from "wouter";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/designs" component={Designs} />
    </div>
  );
}

 // for vercel