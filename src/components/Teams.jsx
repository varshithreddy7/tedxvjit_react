import React, { useEffect, useState } from 'react';
// import './teams.css'

const coreTeam = [
  { name: "Dr.E Saibaba Reddy", designation: "Principal", img: "/teams/core/saibaba.jpg" },
  { name: "Dr. A Padmaja", designation: "Dean", img: "/teams/core/padmaja.jpg" },
  { name: "Mrs. G Srilatha", designation: "Academic Coordinator", img: "/teams/core/srilatha.jpg" },
  { name: "Mr. R V Chalam", designation: "Sr Adminstrative Officer", img: "/teams/core/chalam.jpg" },
  { name: "Dr. G Sreeram Reddy", designation: "HOD-ME", img: "/teams/core/sreeramreddy.jpg" },
  { name: "Dr. A Srujana", designation: "HOD-EEE", img: "/teams/core/srujana.jpg" },
  { name: "Mr. B Srinivasulu", designation: "HOD-IT", img: "/teams/core/srinivas.jpg" },
  { name: "Dr.M Rajendra Prasad", designation: "HOD-ECE", img: "/teams/core/rajendraprasad.jpg" },
  { name: "Dr. Pallavi Badry", designation: "HOD-CE", img: "/teams/core/pallavibadry.jpg" },
];

const organizingTeam = [
  { name: "Keerthana", designation: "Licensee | Organiser", img: "/teams/organizing/Keerthana.jpg" },
  { name: "Akash MallaReddy", designation: "Co-Organiser", img: "/teams/organizing/akash.png" },
  { name: "Dr. Ramesh Cheripelli", designation: "Faculty Coordinator", img: "/teams/organizing/ramesh.jpg" },
];

// New Web Development Team data
const webDevelopmentTeam = [
  { name: "S Vijayanand", designation: "Lead", img: "/teams/Web dev/vijayy.png" },
  { name: "Varshith Reddy", designation: "Member", img: "/teams/Web dev/varshith.jpg" },
  { name: "Shiva Sai kumar", designation: "Member", img: "/teams/Web dev/shiva.jpg" },
  { name: "Vijay Guttula", designation: "Member", img: "/teams/Web dev/vijay.jpg" },
  { name: "Nitesh Agarwal", designation: "Member", img: "/teams/Web dev/nitesh.jpg" },
  { name: "Hussain Basha", designation: "Member", img: "/teams/Web dev/basha.jpg" },
  { name: "Vikhyath Gupta", designation: "Member", img: "/teams/Web dev/Vikhyath.jpg" },
];

// New Marketing Team data
const marketingTeam = [
  { name: "Bharath Kumar Agnur", designation: "Lead", img: "/teams/Marketing/bharat.jpg" },
  { name: "Anirudh Singh", designation: "Member", img: "/teams/Marketing/Anirudh.jpg" },
  { name: "Shiva Sharan", designation: "Member", img: "/teams/Marketing/Shiva.png" },
  { name: "Akshith", designation: "Member", img: "/teams/Marketing/Akshith.jpg" },
  { name: "Amitouja Bose Tagore", designation: "Member", img: "/teams/Marketing/Amitouja.jpg" },
  { name: "Sindhu", designation: "Member", img: "/teams/Marketing/Sindhu.jpg" },
  { name: "Soumya", designation: "Member", img: "/teams/Marketing/Sowmya.jpg" },
];

const designTeam = [
  { name: "Sai Teja Naraboina", designation: "Lead", img: "/teams/Design/Teja.jpg" },
  { name: "Tanvi Deshmukh", designation: "Member", img: "/teams/Design/tanvi.jpg" },
  { name: "Bandi Bhagavathi", designation: "Member", img: "/teams/Design/Bandi.jpg" },
  { name: "Yashasvi", designation: "Member", img: "/teams/Design/Yashasvi.jpg" },
  { name: "Himabala", designation: "Member", img: "/teams/Design/HimaBala.jpg" },
  { name: "Sujay", designation: "Member", img: "/teams/Design/Sujay.png" },
  // { name: "Ananditha", designation: "Member", img: "/teams/Design/.jpg" },
  // { name: "Sana", designation: "Member", img: "/path/to/image33.jpg" },
  // { name: "Swetha", designation: "Member", img: "/path/to/image34.jpg" },
];

const partnershipsAndCollaborations = [
  { name: "Ansh Kamlekar", designation: "Lead", img: "/teams/Partnerships/ansh.jpg" },
  { name: "Stephanie", designation: "Member", img: "/teams/Partnerships/Stephanie.jpg" },
  { name: "Apeksha", designation: "Member", img: "/teams/Partnerships/Apeksha.jpg" },
  { name: "Siri", designation: "Member", img: "/teams/Partnerships/Siri.jpg" },
  { name: "Gowthami", designation: "Member", img: "/teams/Partnerships/Gowthami.jpg" },
  { name: "Hima Varshini", designation: "Member", img: "/teams/Partnerships/Himavarshini.jpg" },
  { name: "Parth Asawa", designation: "Member", img: "/teams/Partnerships/Parth.jpg" },
  { name: "Syed Asif", designation: "Member", img: "/teams/Partnerships/Asif.jpg" },
];

const communicationsAndContent = [
  { name: "Akshaya Reddy Konatham", designation: "Lead", img: "/teams/Communication/akshaya.jpg" },
  { name: "Amena Yasmeen", designation: "Member", img: "/teams/Communication/amena.jpeg" },
  { name: "Bhavagnya", designation: "Member", img: "/teams/Communication/Bhavagnya.jpg" },
  { name: "Tulsy", designation: "Member", img: "/teams/Communication/Tulsy.jpg" },
  { name: "Rishika Devi", designation: "Member", img: "/teams/Communication/Rishika.jpg" },
  { name: "Veda Sri", designation: "Member", img: "/teams/Communication/vedasri.jpg" },
  { name: "Neeraj", designation: "Member", img: "/teams/Communication/neeraj.jpg" },
  { name: "Sathvik", designation: "Member", img: "/teams/Communication/Sathwik.jpg" },
];

const ExperienceTeam = [
  { name: "Harshith Pilli", designation: "Lead", img: "/teams/Hospitality/harshith.jpg" },
  { name: "Venkat Vatsal", designation: "Member", img: "/teams/Hospitality/Venkat.jpg" },
    { name: "Rohan", designation: "Member", img: "/teams/Hospitality/Rohan.jpg" },
  { name: "Sri Ram", designation: "Member", img: "/teams/Hospitality/sriram.jpg" },
  { name: "Gokul Pilligundla", designation: "Member", img: "/teams/Hospitality/Gokul.jpg" },
  { name: "Varuni", designation: "Member", img: "/teams/Hospitality/Varuni.jpg" },
  { name: "Shreya", designation: "Member", img: "/teams/Hospitality/Shreya.jpg" },
  { name: "Sunaina", designation: "Member", img: "/teams/Hospitality/Sunayana.jpg" },
  { name: "Siri Shetty", designation: "Member", img: "/teams/Hospitality/SiriSetty.jpg" },
];

const productionsTeam = [
  { name: "Prasad Posimisetti", designation: "Lead", img: "/teams/Production/Prasad.jpg" },
  { name: "Dinesh", designation: "Member", img: "/teams/Production/Dinesh.jpg" },
  { name: "Varuni", designation: "Member", img: "/teams/Production/Varuni Kodam.jpg" },
  { name: "Hema Siri", designation: "Member", img: "/teams/Production/Hema Siri.jpg" },
  { name: "Anjali", designation: "Member", img: "/teams/Production/Anjali.png" },
  { name: "Guna", designation: "Member", img: "/teams/Production/Guna.jpg" },
  { name: "Shraayan", designation: "Member", img: "/teams/Production/sharyann.jpg" },
 { name: "Madhav", designation: "Member", img: "/teams/Production/madav.jpg" },
  { name: "Charan", designation: "Member", img: "/teams/Production/charan.jpg" },
  { name: "Ashwin", designation: "Member", img: "/teams/Production/Ashwin.jpg" },
  { name: "Safwan", designation: "Member", img: "/teams/Production/Safwan.jpg" },
  { name: "Hari Chandan", designation: "Member", img: "/teams/Production/Hari.jpg" },
];

const Card = ({ img, name, designation }) => (
  <div
    className="bg-white rounded-lg overflow-hidden w-64 h-80 relative transition-transform transform hover:scale-105"
    style={{
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease-in-out'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 0, 0, 1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }}
  >
    <img src={img} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-300">{designation}</p>
    </div>
  </div>
);

const Teams = () => {
  const [fadeInFirstSection, setFadeInFirstSection] = useState(false);
  const [fadeInSections, setFadeInSections] = useState({
    coreTeam: false,
    organizingTeam: false,
    webDevelopmentTeam: false,
    marketingTeam: false,
    designTeam: false,
    partnerships: false,
    communications: false,
    experience: false,
    productions: false,
  });

  useEffect(() => {
    setFadeInFirstSection(true);

    const handleScroll = () => {
      const coreTeamSection = document.getElementById('core-team-section');
      const organizingTeamSection = document.getElementById('organizing-team-section');
      const webDevTeamSection = document.getElementById('web-development-team-section');
      const marketingTeamSection = document.getElementById('marketing-team-section');
      const designTeamSection = document.getElementById('design-team-section');
      const partnershipsSection = document.getElementById('partnerships-section');
      const communicationsSection = document.getElementById('communications-section');
      const experienceSection = document.getElementById('experience-section');
      const productionsTeamSection = document.getElementById('productions-team-section');

      if (coreTeamSection && coreTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, coreTeam: true }));
      }
      if (organizingTeamSection && organizingTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, organizingTeam: true }));
      }
      if (webDevTeamSection && webDevTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, webDevelopmentTeam: true }));
      }
      if (marketingTeamSection && marketingTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, marketingTeam: true }));
      }
      if (designTeamSection && designTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, designTeam: true })); // Add this line for the Design Team section
      }
      if (partnershipsSection && partnershipsSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, partnerships: true })); // Add this line for partnerships section
      }
      if (communicationsSection && communicationsSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, communications: true }));
      }
      if (experienceSection && experienceSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, experience: true }));
      }
      if (productionsTeamSection && productionsTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, productions: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen text-white relative flex flex-col p-0 items-center mt-24">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    src="/teams/team-backgrount-3d.mp4"
  ></video>

  {/* Section with Team Information */}
  <section className={`flex flex-col items-center justify-center px-4 text-center w-screen bg-gradient-to-b from-transparent to-black/80 ${fadeInFirstSection ? 'opacity-100 animate-fadeIn' : 'hidden'} custom-height`}>
    <div className="team-title">
      <h1 className="text-4xl font-bold mb-4">The Team</h1>
    </div>
    <div className="team-paragraph">
      <p className="text-center max-w-2xl px-4 mt-2">
        The TEDxVJIT team is a dynamic collective of visionaries, thinkers, and doers committed to igniting curiosity and inspiring action. United by a shared passion for ideas worth spreading, we meticulously curate transformative experiences that challenge the status quo and empower our community. Our diverse team, composed of innovative students and dedicated faculty, collaborates tirelessly to bring together thought leaders from various fields, ensuring each event is a beacon of knowledge, creativity, and persistence. At TEDxVJIT, we believe in the power of persistence to shape a brighter future, one idea at a time.
      </p>
    </div>
  </section>


      <div className='bg-black/80 w-screen'>
        <div className="tedx-teams">
          <h2 className="text-4xl mt-[7rem] font-bold mb-8 text-center">Core Team</h2>
        </div>
        <section id="core-team-section" className={`min-h-screen px-10 py-16 ${fadeInSections.coreTeam ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {coreTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Organizing Team</h2>
        </div>
        <section id="organizing-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.organizingTeam ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {organizingTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        {/* New Web Development Team Section */}

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Web Development Team</h2>
        </div>
        <section id="web-development-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.webDevelopmentTeam ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg  justify-items-center items-center">
            {webDevelopmentTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        {/* New Marketing Team Section */}
        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Marketing Team</h2>
        </div>
        <section id="marketing-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.marketingTeam ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {/* First Row */}
            {marketingTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Design Team</h2>
        </div>
        <section id="design-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.designTeam ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {designTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Partnerships and Collaborations</h2>
        </div>
        <section id="partnerships-section" className={`min-h-screen px-4 py-16 ${fadeInSections.partnerships ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {partnershipsAndCollaborations.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Communications and Content</h2>
        </div>
        <section id="communications-section" className={`min-h-screen px-4 py-16 ${fadeInSections.communications ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {communicationsAndContent.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience and Hospitality</h2>
        </div>
        <section id="experience-section" className={`min-h-screen px-4 py-16 ${fadeInSections.experience ? 'fade-in' : 'scroll-fade'}`}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {ExperienceTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>

        <div className="tedx-teams">
          <h2 className="text-4xl font-bold mb-8 text-center">Productions</h2>
        </div>
        <section
          id="productions-team-section"
          className={`min-h-screen px-4 py-16 ${fadeInSections.productions ? 'fade-in' : 'scroll-fade'}`}
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg justify-items-center items-center">
            {productionsTeam.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teams;
