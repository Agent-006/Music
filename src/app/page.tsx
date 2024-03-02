import {
  FeaturedCourses,
  Footer,
  Hero,
  Instructors,
  TestimonialCards,
  UpcomingWebinars,
  WhyChooseUs,
} from "@/components";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}

export default page;
