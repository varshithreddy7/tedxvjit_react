import React, { useEffect, useRef } from "react";
import "../style.css";
import "../responsive.css";

const Home = () => {
  // carosuell

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Video */}
      <video
        className="fixed top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/homeBG3d.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white ">
        <img className="h-36 " src="https://ik.imagekit.io/tedxvjit/public/home/Tedxvjit.png?updatedAt=1729522783194" alt="TEDxVJIT" />
        <a
          href="https://forms.gle/XR1aYp11q7LLoHKu5" target='_blank'
          className="block rounded-md bg-red-500 px-3 py-2 text-base font-normal text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
        >
          Get Tickets
        </a>{" "}
        {/*========================participate button ================================= */}
      </div>
      <div className="relative flex flex-col md:flex-row h-screen">
        {/* Left Div - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/tedxvjit/public/home/Power_of_Persistence.png?updatedAt=1729522781622" // Replace with your image URL
            alt="Placeholder"
            className="max-h-full max-w-full object-cover"
          />
        </div>

        {/* Right Div - Text */}
        <div className="flex items-center justify-center w-full md:w-1/2 bg-transparent">
          <div className="hero-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0 order-2 md:order-1">
            <h1 className="heading-pop text-3xl md:text-5xl font-bold mb-4  pt-5 text-white">
              POWER OF{" "}
              <em className="text-red-600 font-style: normal">PERSISTENCE</em>
            </h1>
            <p className="paragraph-pop text-lg md:text-xl pl-3 text-left font-light mb-6 text-white ">
              The theme "
              <em className="text-red-500 font-style: 'normal'">
                Power of Persistence
              </em>
              " represents the strength and dedication needed to overcome
              obstacles and achieve greatness.
            </p>
            <a
              href="https://www.ted.com/tedx/events/58027" target="_blank"
              className="learn-more-btn inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-full md:w-2/3">
            <div className="about-section-content">
              <div className="about-heading flex  md:flex-row items-center justify-start md:justify-start">
                <p className="text-3xl md:text-4xl mt-4 md:mt-0">What is</p>
                <img
                  className="ml-0 md:ml-4 mt-4 md:mt-0 w-[50px] sm:w-[10px] md:w-[150px] h-auto "
                  src="https://ik.imagekit.io/tedxvjit/public/home/TEDxVJIT_Navbar_About.png?updatedAt=1729522783035"
                  alt="TEDx VJIT"
                />
              </div>

              <div className="text-box text-center md:text-left mt-6">
                <p className="py-2 text-base md:text-lg font-light text-justify">
                TEDxVJIT is a locally organised TED-like event at Vidya Jyothi Institute of Technology (VJIT) in Hyderabad, aimed at fostering innovative ideas and discussions among students and the wider community. As an independently organised event TEDxVJIT provides a platform for people from diversified backgrounds to share their unique ideas and perspectives on various topics, ranging from technology and engineering to social issues and personal development. It's a space where ideas are celebrated, connections are made, and the spirit and the essence of TED is brought to life.
                </p>
                
                <h3 className="wevjit text-red-600 text-3xl mt-6 text-left">
                  We The VJIT . . .
                </h3>
                <p className="py-2 text-lg md:text-lg font-light text-justify">
                  Vidya Jyothi Institute of Technology is an Autonomous
                  Institution, Approved by AICTE and Affiliated to JNTUH. VJIT
                  is offering B. Tech, M. Tech and MBA programs. The institution
                  is accredited by NAAC A+ grade. All the eligible B. tech
                  programs are accredited by NBA under Tier I. In NIRF 2023,
                  VJIT is in the band of 151-300 under Innovation Ranking. In
                  2022 VJIT is ranked 200 under Engineering Category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative speakers reveal">
        <div className="container">
          <div
            className="speakers-heading mt-10"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1 className="mt-5">SPONSORS</h1>
          </div>
          <div className="containers">
            <div className="slider-container">
              {[
                "https://ik.imagekit.io/tedxvjit/public/sponsors/1.jpg?updatedAt=1729522761836",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/2.jpg?updatedAt=1729522761979",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/3.jpg?updatedAt=1729522762625",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/4.jpg?updatedAt=1729522763044",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/download.png?updatedAt=1729533922227",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/Untitled%20design%20(2).jpg?updatedAt=1729679774416",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/1.jpg?updatedAt=1729522761836",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/2.jpg?updatedAt=1729522761979",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/3.jpg?updatedAt=1729522762625",
                "https://ik.imagekit.io/tedxvjit/public/sponsors/4.jpg?updatedAt=1729522763044",
                
                
              ].map((imageSrc, index) => (
                <div
                  className="single-team"
                  key={index}
                  style={{ backgroundColor: "transparent", width: "350px" }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={imageSrc}
                    alt={`media-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative speakers reveal">
        <div className="container">
          <div
            className="speakers-heading mt-10"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1 className="mt-5">MEDIA</h1>
          </div>
          <div className="containers">
            <div className="slider-container">
              {[
                "https://ik.imagekit.io/tedxvjit/public/home/1.jpg?updatedAt=1729522777166",
                "https://ik.imagekit.io/tedxvjit/public/home/2.jpg?updatedAt=1729522778173",
                "https://ik.imagekit.io/tedxvjit/public/home/3.jpg?updatedAt=1729522778128",
                "https://ik.imagekit.io/tedxvjit/public/home/4.jpg?updatedAt=1729522780281",
                "https://ik.imagekit.io/tedxvjit/public/home/5.jpg?updatedAt=1729522795032",
                "https://ik.imagekit.io/tedxvjit/public/home/11.jpg?updatedAt=1729522777465",
                "https://ik.imagekit.io/tedxvjit/public/home/6.jpg?updatedAt=1729522779997",
                "https://ik.imagekit.io/tedxvjit/public/home/8.jpg?updatedAt=1729522792513",
                "https://ik.imagekit.io/tedxvjit/public/home/9.jpg?updatedAt=1729522793085",
                "https://ik.imagekit.io/tedxvjit/public/home/10.jpg?updatedAt=1729522777519",
              ].map((imageSrc, index) => (
                <div
                  className="single-team"
                  key={index}
                  style={{ backgroundColor: "transparent", width: "350px" }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={imageSrc}
                    alt={`media-${index}`}
                  />
                </div>
              ))}
            </div> bn
          </div>
        </div>
      </section>
      

      {/* Map and Registration Section */}
      <section className="relative map-registration reveal" id="maps">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center">
            {/* Buttons Section */}
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <p className="head-1 text-xl font-semibold">Participate Now</p>
              <div className="pt-4">
                <a
                  href="javascript:void( window.open( 'https://forms.gle/XR1aYp11q7LLoHKu5', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
                  className="hover-btn-change-color"
                >
                  <button
                    type="button"
                    className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    As Attendee
                  </button>
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="javascript:void( window.open( 'https://forms.gle/gQ96sCnS3idoYLiL9', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
                  className="hover-btn-change-color"
                >
                  <button
                    type="button"
                    className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    As Sponsor
                  </button>
                </a>
              </div>
              {/* <div className="pt-4">
                <a
                  href="javascript:void( window.open( 'https://forms.gle/j9xivk5LCN6Qz7Wn6', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
                  className="hover-btn-change-color"
                >
                  <button
                    type="button"
                    className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    As Speaker
                  </button>
                </a>
              </div> */}
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="map_box_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121832.2780266916!2d78.28233073667944!3d17.399368808179574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95a278ecef95%3A0x6cd763949617029a!2sVidya%20Jyothi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715679876574!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  className="border border-gray-300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Venue Section */}
            <div className="w-full lg:w-1/3">
              <p className="venue-text text-center text-xl font-semibold">
                Venue
              </p>
              <div className="border-2 border-red-600 bg-transparent shadow-lg rounded-lg mt-4 p-4 mr-3">
                <p className="text-lg text-center pr-4">
                  Vidya Jyothi Institute of Technology, Aziz Nagar, C.B. post,
                  Chilkur Road, Hyderabad – 500075, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col items-center justify-center p-2  text-white">
        <h2 className="pb-5 text-lg sm:text-xl lg:text-2xl">
          This page was viewed
        </h2>
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=16929111&style=0009&nbdigits=6&type=page&initCount=1753"
          title="Counter Widget"
          Alt="Visit counter For Websites"
          border="0"
        />
        <h2 className="pt-5 text-lg sm:text-xl lg:text-2xl">Times</h2>
            
      </div>
    </div>
  );
};

export default Home;
