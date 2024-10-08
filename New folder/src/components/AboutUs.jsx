import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutUsStyle from "../css/AboutUsStyle.css";
import { ImportantLinks } from "./ImportantLinks";

const AboutUs = () => {
  const contentArray = [
    {
      topheading: "About us",
      title: "The Strategic plan for the academic year",
      subtitle: "2022-2026",
      buttonText: "Download PDF",
      buttonLink: "#",
    },
    {
      topheading: "About us",
      title: "The Salesian provides multiple source of information",
      subtitle: "Difference",
      buttonText: "LEARN MORE",
      buttonLink: "#",
    },
    {
      topheading: "About us",
      title: "Explore Our Extensive Study Curriculum",
      subtitle: "History",
      buttonText: "LEARN MORE",
      buttonLink: "#",
    },
    {
      topheading: "About us",
      title: "Download our prospectus for more info",
      subtitle: "Our Prospectus",
      buttonText: "Download PDF",
      buttonLink: "#",
    },
    {
      topheading: "About us",
      title: "Learn About Our module specific enrichment programs",
      subtitle: "Enrichment Programs",
      buttonText: "LEARN MORE",
      buttonLink: "#",
    },
  ];

  const imageArray = [
    "https://images.pexels.com/photos/8617899/pexels-photo-8617899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8617965/pexels-photo-8617965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8199610/pexels-photo-8199610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10638070/pexels-photo-10638070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4936021/pexels-photo-4936021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [contentArray.length]);

  return (
    <>
      <div className="d-flex">
        <div className="container-fluid p-0 d-flex align-items-center">
          {/* Row Container */}
          <div className="row w-100 mx-0">
            {/* Left Side - Text Content */}
            <div className="col-12 col-md-5 d-flex flex-column border justify-content-center align-items-center align-items-md-start order-2 order-md-1 text-center text-md-start px-5">
              <div className="mx-auto d-flex flex-column w-75 custom-section gap-5 justify-content-between">
                <motion.div
                  className="text-uppercase text-muted my-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {contentArray[currentIndex].topheading}
                </motion.div>

                {/* Title */}
                <motion.div
                  className="display-6 fw-bold"
                  style={{ color: "#1A2D59" }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  key={currentIndex}
                >
                  {contentArray[currentIndex].title}
                </motion.div>

                {/* Button */}
                <motion.a
                  href={contentArray[currentIndex].buttonLink}
                  className="btn btn-danger rounded-0 px-4 py-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {contentArray[currentIndex].buttonText}
                </motion.a>

                {/* Dots Indicator */}
                <div className="d-flex justify-content-start w-100">
                  {contentArray.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`mx-1 cursor-pointer ${
                        currentIndex === index ? "bg-danger" : "bg-secondary"
                      }`}
                      style={{
                        height: "4px",
                        width: "38px",
                        borderRadius: "10%",
                        transition: "all 0.3s",
                      }}
                      title={`Show content ${index + 1}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Full Cover Image */}
            <motion.div
              className="col-12 col-md-5 order-1 order-md-2 p-0 d-flex justify-content-center align-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              key={currentIndex + "-image"}
            >
              <img
                src={imageArray[currentIndex]}
                alt="College and Students"
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="col-12 col-md-2">
          <ImportantLinks />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
