"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Tambahkan ini agar ikon muncul

const Kontak = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_o12y0v8', 'template_ymt81wd', form.current, 'VEDsaRRj16_7KILZV')
        .then(() => {
          alert('Message sent successfully!');
          form.current?.reset();
        }, (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <div className="bg-[rgba(18,18,18,1)] flex flex-col overflow-hidden items-center">
      <Header />

      <main className="w-full flex flex-col items-center min-h-screen pt-[120px] md:pt-[140px] lg:pt-[180px]">
        <ScrollAnimatedSection className="w-full flex flex-col items-center py-6 sm:py-8 md:py-12 lg:py-20">
          <h1 className="text-white font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Kontak
          </h1>

          <div className="w-full max-w-[1300px] px-4 sm:px-6 md:px-8">
            <div className="bg-[rgba(13,13,13,1)] rounded-[20px] p-4 sm:p-6 md:p-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
                {/* Google Maps Section */}
                <div className="flex-1 w-full">
                  <div className="bg-[rgba(18,18,18,1)] rounded-lg p-3 sm:p-4 md:p-6 border border-gray-700 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3389366293322!2d107.62558207577237!3d-6.969281993031353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1751519589909!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Contact Info Section */}
                <div className="flex-1 lg:max-w-[400px] w-full">
                  <div className="space-y-4 md:space-y-6">
                    {/* Social Media */}
                    <div className="space-y-4 mt-4 sm:mt-6">
                      {/* Instagram */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white flex-shrink-0">
                          <i className="fab fa-instagram text-lg sm:text-xl md:text-2xl"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href="https://www.instagram.com/mbclab/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold hover:text-pink-500 transition-colors text-sm sm:text-base"
                          >
                            Instagram
                          </a>
                        </div>
                      </div>

                      {/* LinkedIn */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white flex-shrink-0">
                          <i className="fab fa-linkedin text-lg sm:text-xl md:text-2xl"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href="https://www.linkedin.com/company/mbclaboratory/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold hover:text-blue-500 transition-colors text-sm sm:text-base"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>

                      {/* Line */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white flex-shrink-0">
                          <i className="fab fa-line text-lg sm:text-xl md:text-2xl"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold hover:text-green-400 transition-colors text-sm sm:text-base"
                          >
                            @sok8073r
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Telkom University, TULT 13.04, TULT 11-12, Jl. Telekomunikasi-1, Terusan Buahbatu - Bojongsoang, 
                  Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                {/* Contact Form */}
                <div>
                  <h2 className="mt-8 sm:mt-12 text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h2>
                  <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input type="text" id="name" name="user_name" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base" placeholder="Your full name" />
                    </div>
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input type="email" id="email" name="user_email" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base" placeholder="your.email@example.com" />
                    </div>
                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                      <input type="text" id="subject" name="subject" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base" placeholder="Brief description of your inquiry" />
                    </div>
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <textarea id="message" name="message" rows={4} required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-sm sm:text-base" placeholder="Tell us about your project, goals, and how we can help..."></textarea>
                    </div>
                    {/* Submit Button */}
                    <div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base">Send Message</button>
                    </div> 
                  </form>
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

export default Kontak;