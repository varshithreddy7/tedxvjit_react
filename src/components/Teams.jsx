import React, { useEffect, useState } from 'react';
// import './teams.css'

const Secretary=[
{name:"Dr. P. Rajeshwar Reddy",designation:"Secretary and Correspondent",img:"https://vjit.edu.in/wp-content/uploads/2020/01/drprr.jpg"}
];

const coreTeam = [
  { name: "Dr. A Srujana", designation: "Principal", img: "https://ik.imagekit.io/tedxvjit/public/teams/core/srujana.jpg?updatedAt=1729522759124" },
  { name: "Dr. A Padmaja", designation: "Dean", img: "https://ik.imagekit.io/tedxvjit/public/teams/core/WhatsApp%20Image%202024-10-21%20at%2017.24.34_ff68359b.jpg?updatedAt=1729534845207" },
  { name: "Mrs. G Srilatha", designation: "Academic Coordinator", img: "https://ik.imagekit.io/tedxvjit/public/teams/core/srilatha.jpg?updatedAt=1729522759229" },
  { name: "Mr. R V Chalam", designation: "Sr. Adminstrative Officer", img: "https://ik.imagekit.io/tedxvjit/public/teams/core/chalam.jpg?updatedAt=1729522756976" },
  { name: "Dr. G Sreeram Reddy", designation: "HOD-ME", img: "https://ik.imagekit.io/tedxvjit/public/teams/core/sreeramreddy.jpg?updatedAt=1729522759243" },
  { name: "Dr. C. N. Ravi", designation: "HOD-EEE", img: "https://vjit.edu.in/wp-content/uploads/2025/04/c.n.raju_.jpg" },
  { name: "Dr. A. Obulesu", designation: "HOD-IT", img: "https://vjit.edu.in/wp-content/uploads/2023/06/VJIT-AI-HoD.jpg" },
  { name: "Dr. P. Nageswara Rao", designation: "HOD-ECE", img: "https://vjit.edu.in/wp-content/uploads/2025/06/dr.-p.-nageswara-rao.jpg" },
  { name: "Dr. N. Sudharsan", designation: "HOD-CE", img: "https://vjit.edu.in/wp-content/uploads/2025/08/civil-dept.-hod.jpg" },
];

const organizingTeam = [
  { name: "Keerthana", designation: "Licensee | Organiser", img: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/Keerthana.jpg?updatedAt=1729522747620" },
  { name: "Akash MallaReddy", designation: "Co-Organiser", img: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/akash.png?updatedAt=1729522747039" },
  { name: "Dr. Ramesh Cheripelli", designation: "Faculty Coordinator", img: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/ramesh.jpg?updatedAt=1729522748720" },
];

// New Web Development Team data
const webDevelopmentTeam = [
  { name: "S Vijayanand", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/IMG_5691.png?updatedAt=1729535555604" },
  { name: "Varshith Reddy", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/varshith.jpg?updatedAt=1729522733480" },
  { name: "Shiva Sai kumar", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/shiva.jpg?updatedAt=1729522733280" },
  { name: "Vijay Guttula", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/vijay.jpg?updatedAt=1729522733412" },
  { name: "Nitesh Agarwal", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/nitesh.jpg?updatedAt=1729522733420" },
  { name: "Hussain Basha", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/basha.jpg?updatedAt=1729522733263" },
  { name: "Vikhyath Gupta", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/Vikhyath.jpg?updatedAt=1729522740594" },
];

// New Marketing Team data
const marketingTeam = [
  { name: "Bharath Kumar Agnur", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/bharat.jpg?updatedAt=1729522750955" },
  { name: "Anirudh Singh", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Anirudh.jpg?updatedAt=1729522749679" },
  { name: "Shiva Sharan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Shiva.png?updatedAt=1729522750744" },
  { name: "Akshith", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/DSC01037.JPG?updatedAt=1729787143875" },
  { name: "Amitouja Bose Tagore", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Amitouja.jpg?updatedAt=1729522749800" },
  { name: "Sindhu", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Sindhu.jpg?updatedAt=1729522751368" },
  { name: "Soumya", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Sowmya.jpg?updatedAt=1729522751765" },
];

const designTeam = [
  { name: "Sai Teja Naraboina", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Teja.jpg?updatedAt=1729522756289" },
  { name: "Tanvi Deshmukh", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/tanvi.jpg?updatedAt=1729522756293" },
  { name: "Bandi Bhagavathi", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Bandi.jpg?updatedAt=1729522756203" },
  { name: "Yashasvi", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Yashasvi.jpg?updatedAt=1729522756554" },
  { name: "Sai Krishna", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Krishna.JPG?updatedAt=1729563492892" },
  { name: "Himabala", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/HimaBala.jpg?updatedAt=1729522756069" },
  { name: "Sujay", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Sujay.png?updatedAt=1729522756255" },
  { name: "Ananditha", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Ananditha.jpg?updatedAt=1729563428254" },
  { name: "Sana", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/sana.jpg?updatedAt=1729563651366" },
  { name: "Swetha", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Design/sweta.jpg?updatedAt=1729563490954" },
];

const partnershipsAndCollaborations = [
  { name: "Ansh Kamlekar", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/ansh.jpg?updatedAt=1729522743665" },
  { name: "Stephanie", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/pili.jpg?updatedAt=1729680099868" },
  { name: "Parth Asawa", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Parth.jpg?updatedAt=1729522746670" },
  { name: "Apeksha", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Apeksha.jpg?updatedAt=1729522744129" },
  { name: "Siri", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Siri.jpg?updatedAt=1729522746714" },
  { name: "Gowthami", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Gowthami.jpg?updatedAt=1729522744582" },
  { name: "Hima Varshini", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/WhatsApp%20Image%202024-10-23%20at%2018.17.37_d5bb4efa.jpg?updatedAt=1729787608606"},
  { name: "Syed Asif", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Asif.jpg?updatedAt=1729522744324" },
];

const communicationsAndContent = [
  { name: "Akshaya Reddy Konatham", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/akshaya.jpg?updatedAt=1729522759338" },
  { name: "Amena Yasmeen", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/amena.jpeg?updatedAt=1729522759692" },
  { name: "Bhavagnya", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Bhavagnya.jpg?updatedAt=1729522760405" },
  { name: "Ashwin", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/_DSC6795-2.jpg?updatedAt=1729680640416" },
  { name: "Tulsy", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Tulsy.jpg?updatedAt=1729522761984" },
  { name: "Rishika Devi", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Rishika.jpg?updatedAt=1729522761582" },
  { name: "Veda Sri", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/vedasri.jpg?updatedAt=1729522761859" },
  { name: "Neeraj", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/neeraj.jpg?updatedAt=1729522761679" },
  { name: "Sathwik", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Sathwik.jpg?updatedAt=1729522761782" },
];

const ExperienceTeam = [
  { name: "Harshith Pilli", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/harshith.jpg?updatedAt=1729522753013" },
  { name: "Venkat Vatshal", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Venkat.jpg?updatedAt=1729522755136" },
    { name: "Rohan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Rohan.jpg?updatedAt=1729522752992" },
  { name: "Sri Ram", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/sriram.jpg?updatedAt=1729522753985" },
  { name: "Gokul Pilligundla", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Gokul.jpg?updatedAt=1729522753110" },
  { name: "Varuni", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/WhatsApp%20Image%202024-10-23%20at%2015.44.58_9e5b093c.jpg?updatedAt=1729678646852" },
  { name: "Shreya", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Shreya.jpg?updatedAt=1729522753372" },
  { name: "Sunayana", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/DSC04775.JPG?updatedAt=1729680471135" },
  { name: "Siri Setty", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/siri.jpg?updatedAt=1729787530738" },
];

const productionsTeam = [
  { name: "Prasad Posimisetti", designation: "Lead", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Prasad.jpg?updatedAt=1729522740490" },
  { name: "Dinesh", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Dinesh.jpg?updatedAt=1729522737846" },
  { name: "Madhav", designation: "Member", img: "/madav.jpg" },
  { name: "Charan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/charan.jpg?updatedAt=1729522740386" },
  { name: "Varuni", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6801-2.jpg?updatedAt=1729677134711" },
  { name: "Shraayan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/sharyann.jpg?updatedAt=1729522746822" },
  { name: "Hema Siri", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Hema%20Siri.jpg?updatedAt=1729522738527" },
  { name: "Sujith", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Sujith.jpg?updatedAt=1729522741753" },
  { name: "Anjali", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/1729237711359.jpg?updatedAt=1729676834046" },
  { name: "Geeth", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6811.jpg?updatedAt=1729677426105" },
  { name: "Guna", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Guna.jpg?updatedAt=1729522737857" },
  { name: "Safwan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Safwan.jpg?updatedAt=1729522740992" },
  { name: "Hari Chandan", designation: "Member", img: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6829_1_.JPG?updatedAt=1729677690192" },
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
    src="https://ik.imagekit.io/tedxvjit/public/teams/team-backgrount-3d.mp4?updatedAt=1729522753696"
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

          <div className="  justify-items-center items-center mb-20">
            {Secretary.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </div>

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
          <h2 className="text-4xl font-bold mb-8 text-center">Content and Curation</h2>
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
