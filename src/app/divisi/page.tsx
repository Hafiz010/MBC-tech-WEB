"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const divisions = [
  {
    title: "Cybersecurity",
    description: "Divisi Riset Cyber Security di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University merupakan kelompok yang berfokus pada penelitian dan pengembangan di bidang keamanan siber. Divisi ini bertujuan untuk memperkuat kemampuan teknis serta memperdalam pengetahuan mahasiswa dalam menghadapi ancaman siber yang semakin berkembang kompleks. Selain melakukan riset, divisi ini juga berperan sebagai grup belajar, dimana anggota dapat berbagi wawasan, memecahkan masalah, dan berkolaborasi dalam berbagai proyek yang mencakup topik-topik seperti analisis malware, keamanan jaringan, kriptografi, dan forensik digital.",
    icon: "🔒"
  },
  {
    title: "Big Data",
    description: "Divisi Big Data di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi serta aplikasi data skala besar untuk mendukung pengambilan keputusan berbasis data. Divisi ini tidak hanya bertujuan untuk mengeksplorasi teknik pengolahan data yang efisien, seperti data mining, machine learning, dan data analytics, tetapi juga berfungsi sebagai grup belajar yang mendorong kolaborasi antar mahasiswa.",
    icon: "📊"
  }, {
    title: "Geographic Information System",
    description: "Divisi Geographic Information System (GIS) di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi pemetaan serta analisis data geospasial. Divisi ini mendukung mahasiswa dalam mempelajari dan menerapkan konsep GIS untuk memecahkan berbagai masalah terkait lokasi, seperti perencanaan kota, manajemen sumber daya alam, dan analisis risiko bencana.",
    icon: "🗺️"
  }, {
    title: "Game Technology",
    description: "Divisi Game Tech di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi permainan yang mencakup aspek desain, pemrograman, serta optimasi game. Divisi ini memberikan wadah bagi mahasiswa untuk mendalami berbagai komponen teknologi game, mulai dari game engine seperti Unity dan Unreal Engine hingga teknik animasi, grafis 3D, dan virtual reality (VR).",
    icon: "🎮"
  }];

const Divisi = () => {
  return <div className="bg-[rgba(18,18,18,1)] flex flex-col overflow-hidden items-center">
      <Header />
      
      <main className="w-full flex flex-col items-center min-h-screen pt-[180px]">
        <ScrollAnimatedSection className="w-full flex flex-col items-center py-20">
          <h1 className="text-white font-bold mb-16 text-center px-4 text-6xl">
            Division
          </h1>
          
          <div className="w-full max-w-[1200px] px-4">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                {divisions.map((division, index) => <CarouselItem key={index}>
                    <div className="bg-[rgba(13,13,13,1)] rounded-[20px] p-6 md:p-8 border border-gray-800 min-h-[400px] md:min-h-[500px] flex flex-col items-center text-center">
                      <div className="text-4xl md:text-6xl mb-6">{division.icon}</div>
                      <h2 className="text-white text-2xl md:text-4xl font-bold mb-6 text-red-500">
                        {division.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed text-base md:text-xl text-justify max-w-[1000px] mx-auto">
                        {division.description}
                      </p>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
          </div>
        </ScrollAnimatedSection>
      </main>
      
      <Footer />
    </div>;
};
export default Divisi;