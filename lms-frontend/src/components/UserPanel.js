import React from "react";
import CourseList from "./CourseList";
import Header from "./User/Header";
import Features from "./User/Features";
import WhyUs from "./User/WhyUs";
import ComingSoon from "./User/ComingSoon";
import CourseCard from "./User/CourseCard";
import CourseCarousel from "./User/CourseCarousel";
import VideoSection from "./User/VideoSection";
import ContactSection from "./User/ContactSection";
import Footer from "./User/Footer";
import MainBanner from "./User/MainBanner";
const UserPanel = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <WhyUs />
      <CourseList />
      <Features />

      <ComingSoon />
      <CourseCard />
      <CourseCarousel />
      {/* <VideoSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default UserPanel;
