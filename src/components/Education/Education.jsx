import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    id: 0,
    // img: "https://www.bing.com/th/id/OIP.buXEZ594ffsA6PmteOkRgwAAAA?w=200&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.5&pid=3.1&rm=3",
    school: "Dr. D. Y. Patil Institute of Technology, Pune",
    date: "2022 – 2026",
    grade: "CGPA: 8.74 / 10",
    desc: "Pursuing a Bachelor of Engineering in Computer Engineering. Gained strong knowledge of Data Structures, Algorithms, Web Development, and Database Management. Actively involved in building real-world full-stack projects, contributing to coding communities, and strengthening problem-solving skills.",
    degree: "B.E. - Computer Engineering",
  },
  {
    id: 1,
    // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/MSBSHSE_logo.png/800px-MSBSHSE_logo.png",
    school: "Residential Junior College of Science and Arts, Pune",
    date: "2020 – 2022",
    grade: "Percentage: 81.82%",
    desc: "Completed Higher Secondary (12th) under the Maharashtra State Board (MSBSHSE), with a focus on Physics, Chemistry, and Mathematics. Built a strong foundation in analytical and logical reasoning skills.",
    degree: "Higher Secondary (XII) – Science",
  },
  {
    id: 2,
    // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/MSBSHSE_logo.png/800px-MSBSHSE_logo.png",
    school: "Shri Gajanana Madhyamik Vidyalaya, Avhane BK, Pune",
    date: "2010 – 2020",
    grade: "Percentage: 89.40%",
    desc: "Completed Secondary School (10th) under Maharashtra State Board (MSBSHSE), excelling in core subjects including Mathematics and Science.",
    degree: "Secondary School (X)",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My education has been a journey of{" "}
          <span className="text-purple-400 font-semibold">learning</span> and{" "}
          <span className="text-purple-400 font-semibold">development</span>. 
          Here are the details of my academic background.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Timeline Circle with Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              
            </div>

            {/* Content Section */}
            <motion.div
              className={`bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 w-full sm:w-5/12 mt-10 sm:mt-0 hover:scale-105 transition-transform duration-300 ${
                index % 2 === 0 ? "sm:mr-auto sm:ml-0" : "sm:ml-auto sm:mr-0"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-purple-400">{edu.degree}</h3>
              <h4 className="text-md text-white mt-1">{edu.school}</h4>
              <p className="text-sm text-gray-400 mt-1">{edu.date}</p>

              <p className="mt-3 text-gray-300 font-semibold">Grade: {edu.grade}</p>
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
