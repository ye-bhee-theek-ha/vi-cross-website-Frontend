import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D1B4D] mb-6">About Us</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a cutting-edge 2.5D virtual exhibition platform that combines the immersive qualities of 3D
            environments with the simplicity and accessibility of 2D.
          </p>
        </motion.div>

        <div className="relative mt-8 md:mt-16">
          {/* Decorative dots with animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -left-4 -top-4 w-12 md:w-24 h-12 md:h-24 grid grid-cols-6 gap-1 z-10"
          >
            {[...Array(36)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.01 }}
                className="w-1 h-1 bg-blue-100 rounded-full"
              ></motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative justify-center mx-auto px-2 md:px-8 lg:px-12">
            {/* Left image container */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex items-end justify-center md:justify-end"
            >
              <div className="relative h-80 md:h-96 lg:h-[500px] w-full md:w-80 lg:w-96 overflow-hidden rounded-tr-full rounded-tl-full rounded-br-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group-92yfmlUYxSb3ai5oX4TMvTauUM6TKk.png')"
                  }}
                ></div>
                {/* Inner glow effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 bg-indigo-500/10 shadow-[inset_0_0_30px_rgba(79,70,229,0.4)]"
                ></motion.div>
              </div>
            </motion.div>

            {/* Right image container */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center md:justify-start"
            >
              {/* Small top image */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-12 left-0 md:left-10 w-36 md:w-48 h-24 md:h-32 overflow-hidden rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] z-10"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09121fc1e7193c37757d4a021e5ca3d1-mob5QkvNPHjReivRybIUKV9ojocXJS.png')"
                  }}
                ></div>
              </motion.div>

              {/* Large bottom image */}
              <div className="relative h-80 md:h-96 lg:h-[500px] w-full mt-16 md:mt-24 overflow-hidden rounded-tl-[60px] md:rounded-tl-[100px] rounded-tr-[60px] md:rounded-tr-[100px] rounded-br-[60px] md:rounded-br-[100px]">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f272ba80d7acd3206cdc9cd355bed2e6-C3psjQwhH4DxfISw5Up7STHn3HwVn5.png')"
                  }}
                ></div>
              </div>

              {/* Blue accent shapes with animation and glow */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 md:-left-8 -top-10 w-10 md:w-16 h-10 md:h-16 rounded-full"
              >
                <div className="absolute inset-0 h-36 w-12 rounded-full rounded-bl-none bg-blue-600"></div>
                <motion.div 
                    animate={{ 
                        boxShadow: ['0 0 10px 2px rgba(37,99,235,0.6)', '0 0 15px 4px rgba(37,99,235,0.8)', '0 0 10px 2px rgba(37,99,235,0.6)'] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 h-36 w-12 rounded-full rounded-bl-none"
                />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-2 md:-right-4 bottom-16 md:bottom-24 w-6 md:w-8 h-6 md:h-8 rounded-full"
              >
                <div className="absolute inset-0 rounded-full bg-blue-600"></div>
                <motion.div 
                  animate={{ 
                    boxShadow: ['0 0 8px 2px rgba(37,99,235,0.6)', '0 0 12px 4px rgba(37,99,235,0.8)', '0 0 8px 2px rgba(37,99,235,0.6)'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 rounded-full"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;