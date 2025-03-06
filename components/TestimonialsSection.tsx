"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import customer1 from "@/assets/images/home/customer1.png";
import customer2 from "@/assets/images/home/customer2.png";
import customer3 from "@/assets/images/home/customer3.png";
import { StaticImageData } from "next/image";

interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  avatar: StaticImageData | string; 
  classname?: string;
}

interface TestimonialProps extends TestimonialData {}

const Testimonial: FC<TestimonialProps> = ({ quote, author, title, avatar, classname }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-100 p-8 rounded-lg relative overflow-hidden `}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-700 mb-6"
      >
        {quote}
      </motion.p>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center mt-4"
      >
        <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
          <img 
             src={typeof avatar === "string" ? avatar : avatar.src}
            alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute right-8 bottom-8 text-gray-400"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`absolute left-0 top-0 w-1 bg-indigo-600 ${classname}`}
      />
    </motion.div>
  );
};

interface PaginationDotProps {
  active: boolean;
  pageNumber: number;
  onClick: () => void;
  dark?: boolean
}

const PaginationDot: FC<PaginationDotProps> = ({ active, pageNumber, onClick, dark = false }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 2 }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <motion.div
        className={`w-3 -z-10 h-3 rounded-full ${dark? active ? "bg-gray-100" : "bg-gray-500" : active ? "bg-indigo-900" : "bg-gray-300"}`}
        transition={{ duration: 0.2 }}
      />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-normal"
          style={{ color: active ? "white" : "white", width: active? "24": "" }}
        >
          {pageNumber}
        </motion.div>
    </motion.div>
  );
};

interface TestimonialsSectionProps {
  classname_container?: string;
  classname_text?: string;
  classname_pagination?: boolean;
  classname_bar?:string;
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ classname_container, classname_text, classname_pagination, classname_bar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalPages = 3;

  // Testimonials data for each page
  const allTestimonials: Record<number, TestimonialData[]> = {
    1: [
      {
        quote:
          "The 2.5D virtual exhibition platform exceeded our expectations with its interactive, yet easy-to-use interface. Visitors loved exploring the customized booths and engaging with our content seamlessly.",
        author: "Sarah Jack",
        title: "TV Model",
        avatar: customer1,
      },
      {
        quote:
          "The platform offered the perfect blend of simplicity and interactivity. Our audience was fully immersed, and the ability to explore exhibits in a virtual space added a unique dimension to the experience. It's a game-changer for online events.",
        author: "Jhon Smit",
        title: "Developer",
        avatar: customer2,
      },
      {
        quote:
          "Setting up the exhibition was a breeze, and the response from attendees was fantastic. The platform made it easy to showcase our work while keeping visitors engaged. It's the perfect solution for hosting virtual events.",
        author: "Ramos Leo",
        title: "Designer",
        avatar: customer3,
      },
    ],
    2: [
      {
        quote:
          "The analytics dashboard provided valuable insights into visitor engagement. We could see which exhibits attracted the most attention and optimize our presentations accordingly.",
        author: "Emma Wilson",
        title: "Marketing Director",
        avatar: customer1,
      },
      {
        quote:
          "Our international attendees particularly appreciated the multilingual support and the ability to access the exhibition 24/7. It truly made our event globally accessible.",
        author: "Takashi Yamamoto",
        title: "Event Coordinator",
        avatar: customer2,
      },
      {
        quote:
          "The ROI exceeded our expectations. We attracted three times more visitors than our physical events, at a fraction of the cost. Definitely the future of exhibitions.",
        author: "Carlos Mendez",
        title: "CFO",
        avatar: customer3,
      },
    ],
    3: [
      {
        quote:
          "The networking features were brilliant. Despite being virtual, our attendees made meaningful connections through the integrated chat and meeting scheduler.",
        author: "Lisa Thompson",
        title: "Community Manager",
        avatar: customer1,
      },
      {
        quote:
          "Technical support was outstanding. Any minor issues were resolved immediately, ensuring a smooth experience for both exhibitors and visitors.",
        author: "David Chen",
        title: "Technical Lead",
        avatar: customer2,
      },
      {
        quote:
          "As a presenter, I loved the detailed attendance analytics. I could see exactly how many people attended my talk and their feedback in real-time.",
        author: "Maria Santos",
        title: "Keynote Speaker",
        avatar: customer3,
      },
    ],
  };

  const changePage = (pageNumber: number) => {
    if (!isAnimating && pageNumber !== currentPage) {
      setIsAnimating(true);
      setCurrentPage(pageNumber);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const currentTestimonials = allTestimonials[currentPage];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`py-16 px-6 md:px-12 bg-white  ${classname_container}`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-sm uppercase font-medium text-gray-700 mb-2 ${classname_text}`}
        >
          TESTIMONIAL
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-3xl md:text-5xl font-bold text-indigo-900 ${classname_text}`}
        >
          What People Say About Us
        </motion.h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {currentTestimonials.map((testimonial, index) => (
          <Testimonial classname={classname_bar} key={`${currentPage}-${index}`} {...testimonial} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex justify-center mt-12 gap-4"
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationDot
            key={index + 1}
            active={currentPage === index + 1}
            pageNumber={index + 1}
            onClick={() => changePage(index + 1)}
            dark= {classname_pagination}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
