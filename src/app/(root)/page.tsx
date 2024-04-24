import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import LandingModules from '@/app/_components/LandingModules';

export default async function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <LandingModules />
      </div>
      <footer className="w-full font-montserrat border-t border-t-foreground/10 p-8  justify-center text-center bg-[#041039]">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center lg:gap-[100px] font-medium text-[18px]">
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className="social-icons flex gap-[50px] items-start justify-start lg:items-center lg:justify-center lg:gap-[150px] py-8">
          <a
            className="font-bold text-[30px]"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="font-bold text-[30px]"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="font-bold text-[30px]"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-[16px]">
          <p>Product of Adventlabs Limited</p>
          <p>Copyright {currentYear} Buzthrive. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
