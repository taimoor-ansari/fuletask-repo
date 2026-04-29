import { Helmet } from "react-helmet";
import Header from "../component/Header";
import Main from "../component/Main";
import FuleSection from "../component/FuleSection";
import Testimonials from "../component/Testimonials";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Fuel Pump Pakistan</title>
        <meta
          name="description"
          content="Premium petrol, diesel and high octane services."
        />
      </Helmet>
      <Header />
      <Main />
      <FuleSection />
      <Testimonials />
    </div>
  );
}
