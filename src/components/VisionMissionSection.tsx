"use client";

import React from 'react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
export const VisionMissionSection: React.FC = () => {
  return <ScrollAnimatedSection className="w-full flex flex-col items-center">
      <h2 className="text-white font-bold mt-10 sm:mt-16 md:mt-32 lg:mt-[279px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4">
        Vision and Mission
      </h2>
      <div className="flex w-full max-w-[1300px] flex-col items-stretch text-lg sm:text-xl md:text-2xl text-[rgba(125,125,125,1)] font-bold mt-6 sm:mt-8 md:mt-12 lg:mt-[79px] mx-4">
        <div className="bg-[rgba(13,13,13,1)] flex flex-col items-center text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed sm:leading-loose md:leading-[50px] p-4 sm:p-6 md:p-8 lg:p-[43px] rounded-[20px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
          <p className="text-[rgba(125,125,125,1)] leading-relaxed sm:leading-loose md:leading-[50px] mt-4 sm:mt-6 md:mt-8 lg:mt-[30px] text-justify my-0 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            To establish itself as a distinguished laboratory in the advancement 
            of Multimedia Applications, Big Data, and Cybersecurity by fostering 
            exploration and conducting impactful research that responds to contemporary 
            technological developments. Furthermore, to cultivate an academic environment 
            that systematically develops, refines, and prepares the competencies of MBC 
            Laboratory assistants to compete effectively in the professional and industrial sectors.
          </p>
          <p className="mt-4 sm:mt-6 text-center italic text-sm sm:text-base md:text-lg lg:text-xl">&ldquo;Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka&rdquo;</p>
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
            <p className="text-[rgba(125,125,125,1)] leading-relaxed sm:leading-loose md:leading-[50px] mt-4 sm:mt-6 md:mt-8 lg:mt-[30px] text-justify my-0 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              To foster an environment that supports long-term learning and research, promotes 
              both personal and professional growth, and facilitates career development. To 
              serve as a center of knowledge in Technology, Multimedia, and Soft Skills that 
              benefits students in their academic and professional journeys.
            </p>
            <blockquote className="mt-4 sm:mt-6 text-center italic text-sm sm:text-base md:text-lg lg:text-xl">
              &ldquo;Work Life Balance bukan berarti melakukan sesuatu secara singkat
              namun efektif&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>;
};