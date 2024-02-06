import React from "react";
import HeroSection from "./HeroSection";
import "./Home.css";
import FeaturedProduct from "./FeaturedProduct";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif"
const Home = () => {
  return (
    <div>
        {/* {hero section} */}
      <HeroSection
        title="Buy IPhone 14 Pro"
        subtitle="Experience the power of the latest iPHone 14 with all the latest features."
        link="/"
        image={iphone}
      />
      {/* Featured Section  */}

      <FeaturedProduct />
      {/* Hero section  */}

      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio display and colour -matched magic accessories to your mobilephone."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default Home;
