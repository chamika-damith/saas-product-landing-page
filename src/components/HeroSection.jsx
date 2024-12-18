import { HERO_CONTENT, BRAND_LOGOS } from "../constants";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};


const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative pt-28 lg:pt-36 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="bg-blue-600 mb-8 px-3 py-2 rounded-full text-xs tracking-wide"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b
          from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={fadeInUp} className="mt-6 text-neutral-400 max-w-2xl">
          {HERO_CONTENT.subHeading}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div variants={fadeInUp} className="mt-6 space-x-4">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-80 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="#"
            className="inline-block border border-gray-500 hover:border-gray-400 hover:text-gray-300 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div>

        {/* Trusted By Logos */}
        <motion.div variants={fadeIn} className="py-10">
          <p className="text-gray-400 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            {BRAND_LOGOS.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div variants={fadeIn} className="mt-12">
          <img
            src={heroImage}
            alt="Streamer SaaS interface"
            className="w-full h-auto rounded-3xl border border-neutral-800 mb-20 shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
