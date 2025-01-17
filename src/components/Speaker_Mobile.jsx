import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import clsx from "clsx";

const speakers = [
  {
    id: 1,
    name: "JD Laxmi Narayana",
    image: "/speakers/jd_laxmi_narayana.png",
    linkedin: 0,
    instagram:"https://www.instagram.com/jdlakshminarayana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    twitter: "https://x.com/VVL_Official?t=3S_xt5j8dePVlVmVsf_2wA&s=08 ",
    description: "VV (popularly known as) JD Lakshminarayana, a former Joint Director of the Central Bureau of Investigation (CBI) and the current president of the Jai Bharat National Party (JBNP), is a prominent figure in Indian law enforcement and politics. Currently pursuing a Ph.D. in Rural Development. A retired Indian Police Service (IPS) officer from Andhra Pradesh, he has served in key positions, including as the Additional Director General of Police in Mumbai.",
    position: "Ex-Joint Director, CBI",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 2,
    name: "Vanitha Datla",
    image: "/speakers/vanitha_datla.png",
    linkedin: "https://www.linkedin.com/in/vanithadatla/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BantXG80GSYyhoQ%2BRvXbfPg%3D%3D ",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Vanitha Datla is a highly accomplished professional with nearly three decades of experience in diverse sectors, including financial services, insurance, cement, power, security printing, instrumentation, BPO services, and healthcare in the USA and India. She serves as the Vice Chairperson of Elico and the Managing Director of Elico Healthcare Services Ltd, a Hyderabad-based company. She is a Chartered Financial Analyst and is pursuing a doctoral program at ISB on the Role of Women in Family Businesses. A strong advocate for diversity and women's empowerment, Vanitha has worked to improve women's corporate representation through policy development and mentoring. She also serves as treasurer of Women in Network, mentoring children from urban slums to enhance their education and quality of life.",
    position: "Vice Chairperson & Managing Director of ELICO Ltd. and Managing Director of Elico Healthcare Services Ltd.",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 3,
    name: "Debabrata Sarkar",
    image: "/speakers/debabrata_sarkar.png",
    linkedin: "https://www.linkedin.com/in/debabrata-sarkar-r-20772415/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByqHQFwhBQ9iDk16AszGFSA%3D%3D ",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Mr. Debabrata Sarkar, a TEDx speaker and accomplished C-level executive, boasts over 26 years of experience in the International Agriculture sector. An IIM Kolkata alumnus, he has held leadership roles at Monsanto, Chemtura, and Syngenta. Currently, he serves as CMD of MicroAlgae Solutions India Pvt Ltd, Director of AGMA Energy, and Vice President - APAC for AE Biologicals. Featured in top publications like Forbes and Fortune, Mr. Sarkar won back-to-back Best Bio Ag CEO Awards in 2022 and 2023, presented by Central Agriculture Minister Mr. Narendra Singh Tomar, recognizing his contributions to sustainable agriculture.",
    position: "CMD at MicroAlgae Solutions",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 4,
    name: "Kiran Karojia",
    image: "/speakers/kiran_karojia.png",
    linkedin: "https://www.linkedin.com/in/kirankanojia/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9xO6%2FzMZQ460J3uicwz2dg%3D%3D ",
    twitter: "https://twitter.com/vanitha_datla",
    description: "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India, transformed her life after losing a leg in a train accident. From a community where girls' education was discouraged, she broke barriers and refused to let her amputation define her future. Finding strength in the running, Kiran overcame pain and embraced life with resilience and determination. Her story inspires others to focus on their potential rather than limitations, proving that nothing is impossible with self-belief. Join us to hear her inspiring journey of courage and perseverance.",
    position: "India’s first woman blade runner",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 5,
    name: "Naveen Samala",
    image: "/speakers/naveen_samala.png",
    linkedin: "https://www.linkedin.com/in/naveensamala/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BT4wuo2idQOKI7rUPra%2FnIw%3D%3D ",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Naveen Samala is a remarkable individual whose journey is a powerful testament to perseverance and the relentless pursuit of dreams. Rising from a modest background, he has become a first-generation post-graduate, showcasing his ambition and dedication. Now a Global Portfolio Manager for Business Transformation, Naveen is also an Udemy instructor, author, career coach, CXO resume writer, guest faculty at BITS Pilani, and podcast visionary. His podcast, The Guiding Voice, ranked in the Global Top 2.5%, is the world’s only Quadrilingual podcast, inspiring millions. With expertise in leadership, productivity, and public speaking, his podcast recently won the Asia Podcast Award for Education, further amplifying his impact globally.",
    position: "Global Portfolio Management Leader-Diebold, Founder-The Guiding Voice",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 6,
    name: "S Krithivasan",
    image: "/speakers/krithivasam_s.png",
    linkedin: "https://www.linkedin.com/in/krithivasans/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVfIq0H%2FZRu2ooWW76Z2lAg%3D%3D",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Krithivasan's impressive background highlights his extensive 17+ years of HR experience and leadership in team building and growth initiatives. His roles at Virtusa and Pickyourtrail demonstrate his global reach and strategic acumen in campus strategy and partnerships. As Vice President of HR at YourTribe, he effectively combines his expertise in talent acquisition and HR services with a passion for advising startups. His educational background with an Executive MBA from XLRI Jamshedpur further complements his professional experience. Additionally, his love for travel and commitment to advising academic institutions reflect a well-rounded individual dedicated to fostering innovation and a people-centric HR approach.",
    position: "Career Catalyst & HR Innovator",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 7,
    name: "Dasarj Centhimul Tarun",
    image: "/speakers/dasaraj_centhamli_tarun.png",
    linkedin:0,
    instagram: "https://www.instagram.com/dctarun/?utm_source=ig_web_button_share_sheet",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Dasaraj Centhamil Tarun is the creator of DCT Eats, a rapidly growing food channel with over 1 million subscribers. He holds a B.Com (H) from SRCC and an MBA from IIM Calcutta. DCT initially worked at leading companies like Zomato, Oyo, and Bain. After a brief return to Zomato, he decided to leave corporate life to pursue his passion for food content creation.His channel experienced explosive growth during IPL 2023, gaining 110,000 subscribers in just one month. Today, DCT Eats is celebrated for its engaging and flavorful culinarycontent, attracting food lovers from around the globe.",
    position: "MBA graduate from IIM Calcutta DCT Eats food blogger",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 8,
    name: "Dr. S. Bakhtiar",
    image: "/speakers/BAKHTIAR.png",
    linkedin: "https://www.linkedin.com/in/bakhtiar-choudhary-4203b015/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfJHkPaAPTQOYS%2Beh759S0A%3D%3D",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Prof. Major Dr. S. Bakhtiar Choudhary (Retd.) is a renowned war veteran and sports medicine specialist with over 40 years of experience, having served both the Indian Army and Apollo Hospitals for a decade each. He has been a visiting faculty member at top institutions, training IPS, IAS, and IRS officers, and advising MNCs and universities. A pioneer in occupational health, he identified and described conditions such as Straight Spine Syndrome and Urban Neck Syndrome. His groundbreaking research has saved thousands from undergoing spinal surgeries. Dr. Choudhary has made significant contributions to sports medicine, advising international athletes, and has been an active promoter of environmental conservation. Additionally, he is a martial artist, an award-winning researcher, an author, and a passionate advocate for ecological education",
    position: "Sports Medicine specialist",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
  animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 9,
    name: "Nikhil Desai",
    image: "/speakers/nikhil_desai.png",
    linkedin: "https://www.linkedin.com/in/nikhilpdesai/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCdiy%2BXh0RFKeBgjnHYhcuA%3D%3D ",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Nikhil Desai is dedicated to empowering individuals and organizations to unlock their true potential. Known for his energetic speaking style, he inspires and motivates participants to create lasting change in their lives and work environments. With over 33 years of experience, Nikhil has positively impacted more than a quarter-million participants across 42 countries, including India, the USA, Canada, Sweden, the UAE, and Singapore. His programs are designed to foster personal growth and organizational development. Nikhil has been featured in the media across multiple countries and has appeared on television and radio in India, the USA, the Philippines, South Africa, and Oman, making a global impact with his work..",
    position: "International motivator speaker",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
   animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  { id: 10,
    name: "Hasvi Muriki",
    image: "/speakers/hasvi.png",
    linkedin: "https://www.linkedin.com/in/hasvi-muriki-9088b5225/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BlYcQwuotREWZEQzHJrY%2Bxg%3D%3D",
    twitter: "https://twitter.com/vanitha_datla",
    description: "I am Muriki Pulakita Hasvi, a 16-year-old DexSchool graduate, sports enthusiast, avid cyclist, runner, blogger, MUNer, and TEDx speaker. I have already climbed 3 of the 7 summits and dream of conquering all seven before I turn 19. I hold records as the youngest girl to climb Mt. UT Kangri, Mt. Kang Yatse, and Mt. Dzo Jongo within 70 hours. Additionally, I am the youngest girl to have climbed Mt. Elbrus (the highest mountain in Europe) West and East within 24 hours, as well as Island Peak in Nepal (6,189m). To date, I have completed a total of 12 expeditions. I plan to become a lawyer in the future, as I love reading books and conducting research.",
    position: "Passionate Photographer l Cyclist and Runner l Badminton player l National Skater",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
  animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 11,
    name: "Kraveenthar Kamal",
    image: "/speakers/kamal.png",
    linkedin: "https://www.linkedin.com/in/kraveentharkamal/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVu4Ve0irR2SJXUdTcw5GyQ%3D%3D",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Kraveenthar Kamal is the Founder and Director of MAKER GLOBAL, an 8-year-old bootstrapped startup that has become one of India's rapidly growing companies in 3D printing technology. He holds a degree in Mechanical Engineering from the renowned Loyola College, Chennai, and completed an exchange program at ICAM University in Toulouse, France, where he first encountered 3D printing technology. Inspired by a vision to make this technology accessible to the masses in India, he began his entrepreneurial journey at just 21 years old. Through determination and perseverance, he has grown MAKER GLOBAL into Hyderabad’s leading 3D printing company. The company’s notable clients include Tata Aerospace, Boeing, the Indian Army, and Procter & Gamble. Additionally, MAKER GLOBAL is a key provider of high-tech, intricately detailed props for the art and costumes departments of Telugu cinema through 3D printing",
    position: "Director & Founder Maker Global",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 12,
    name: "Likitha Yalamanchili",
    image: "/speakers/likitha.png",
    linkedin: 0,
    instagram:"https://www.instagram.com/likhita_yalamanchili?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    twitter: "https://twitter.com/vanitha_datla",
    description: "Likhita Yalamanchili is Miss India Andhra Pradesh 2022 and has also earned the prestigious titles of Times Miss Beauty with a Purpose and Moj Miss Rising Star. She is an MBBS graduate and a successful model, who is now set to make her debut as an actor in the Telugu film industry with her upcoming movie Euphoria, slated for release in early 2025.",
    position: "Doctor and Miss India AP 2022 Finalist",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },

  
];

const Speaker_Mobile = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSpeaker = Math.floor(scrollPosition / windowHeight);
      if (newActiveSpeaker !== activeSpeaker && newActiveSpeaker < speakers.length) {
        setActiveSpeaker(newActiveSpeaker);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSpeaker]);

  return (
    <div className="relative bg-black mt-20">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={clsx(
            "h-screen w-full flex items-center justify-center sticky top-0 transition-transform duration-500",
            speaker.pattern
          )}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            <AnimatePresence>
              {index === activeSpeaker && (
               <motion.div
               initial={speaker.animation.text.hidden}
               animate={speaker.animation.text.visible}
               exit={speaker.animation.text.exit}
               transition={{ duration: 0.5 }}
               className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
             >
<h2 className="
  text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-white md:text-transparent"> {speaker.name}
               </h2>
               <p className=" text-left text-lg md:text-2xl lg:text-3xl text-white mb-4">
                 {speaker.posistion}
               </p>
               <p className="text-left text-sm md:text-lg lg:text-xl text-white mb-6">
                 {speaker.description}
               </p>
               <div className="flex justify-start md:justify-start space-x-4">
               {speaker.linkedin && speaker.linkedin !== 0 ? (
                <a
                   href={speaker.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white hover:text-blue-600 transition-colors duration-300"
                 >
                    <FaLinkedin size={24} /> 
          
                 </a> 
               ) : null}
               {speaker.instagram && speaker.instagram !== 0 ? (
                <a
                  href={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-red-600 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              ) : null}

               </div>
             </motion.div>
             
              )}
            </AnimatePresence>
            <AnimatePresence>
              {index === activeSpeaker && (
                <motion.div
                  initial={speaker.animation.image.hidden}
                  animate={speaker.animation.image.visible}
                  exit={speaker.animation.image.exit}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
<div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 aspect-square overflow-hidden rounded-full border-4 border-red-600 transition-transform duration-500 hover:scale-105">
<img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black opacity-40"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speaker_Mobile;

