"use client";

import React from 'react';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';
export const AboutSection: React.FC = () => {
  return <ScrollAnimatedSection className="w-full flex flex-col items-center">
      <h2 className="text-white font-bold mt-10 sm:mt-16 md:mt-32 lg:mt-[279px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4">
        About Us
      </h2>
      <div className="bg-[rgba(13,13,13,1)] w-full max-w-[1300px] mt-6 sm:mt-8 md:mt-12 lg:mt-[65px] pt-8 sm:pt-12 md:pt-16 lg:pt-[67px] rounded-[20px] py-8 sm:py-12 md:py-16 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] mx-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-5 justify-between">
          <img src="/MBC 2.png" alt="MBC Laboratory Image 1" className="aspect-[4.74] object-contain w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] lg:w-[398px] shrink-0 my-auto" />
          <img src="/NCM 1.png" alt="MBC Laboratory Image 2" className="aspect-[2.88] object-contain w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] lg:w-[400px] shrink-0" />
        </div>
        <p className="text-[rgba(125,125,125,1)] leading-relaxed sm:leading-loose md:leading-[40px] mt-6 sm:mt-8 md:mt-10 lg:mt-[30px] text-justify my-0 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          MBC Laboratory (Multimedia, Big Data, and Cybersecurity Laboratory) is a dynamic 
          research and innovation hub committed to advancing technology and solving real-world 
          problems. Operating under the Ministry of Communication and Multimedia, MBC serves as 
          both a think tank and a collaborative platform for students and professionals alike.
        </p>
        <p className="text-[rgba(125,125,125,1)] leading-relaxed sm:leading-loose md:leading-[40px] mt-6 sm:mt-8 md:mt-10 lg:mt-[30px] text-justify my-0 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          With a focus on Cybersecurity, Big Data Analytics, Game Technology, and Geographic Information Systems (GIS), the lab drives cutting-edge research, nurtures tech talent, and develops impactful solutions that address the evolving digital landscape.
        </p>
      </div>
    </ScrollAnimatedSection>;
};