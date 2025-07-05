
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';

const Developer = () => {
  return (
    <div className="bg-[rgba(18,18,18,1)] flex flex-col overflow-hidden items-center py-0 my-0 mx-0 px-0">
      <Header />
      
      <main className="w-full flex flex-col items-center min-h-screen pt-[120px] md:pt-[140px] lg:pt-[180px]">
        <ScrollAnimatedSection className="w-full flex flex-col items-center py-10 md:py-20">
          <h1 className="text-white font-bold mb-8 md:mb-16 text-center px-4 text-4xl md:text-5xl lg:text-6xl">
            Developer
          </h1>
          
          <div className="w-full max-w-[1000px] px-4 md:px-8">
            <div className="bg-[rgba(13,13,13,1)] rounded-[20px] p-4 md:p-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
                {/* Photo Section */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                  <div className="bg-[rgba(18,18,18,1)] rounded-lg p-4 md:p-6 border border-gray-700 w-full max-w-[250px] h-[300px] md:h-[350px] flex items-center justify-center">
                    <img 
                      src="/foto.png" 
                      alt="Developer Photo" 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  </div>
                </div>
                
                {/* Description Section */}
                <div className="flex-1 w-full">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
                      Muhammad Hafiz Fahrial sebagai seorang Mahasiswa S1 Informatika dan 
                      sebagai developer website ini sangat memerlukan kemauan dan konsistensi 
                      belajar yang kuat, untuk menyelesaikan pekerjaan. skill seperti desain 
                      website, front end, back end, dan lainnya bisa dipelajari jika memang terdapat 
                      kemauan dan didukung oleh usaha diri sendiri.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
                      Kemampuan teknikal yang dimiliki HTML5, CSS3, Java, Python, MySql, VSCode, Burp Suite, Wireshark, NMAP, 
                      Jupyter Notebook, Figma, UI/UX, Cyber Security, Data Visualization.
                    </p>
                    <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
                      <div className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a 
                          href="https://github.com/Hafiz010" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white font-bold hover:text-blue-500 transition-colors text-sm md:text-base"
                        >
                          Hafiz010
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Developer;
