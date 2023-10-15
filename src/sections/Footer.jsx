import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-betwen items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <img src={footerLogo} alt="Nike Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-start gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footerSection) => (
            <div key={footerSection.title}>
              <h4 className="text-2xl text-white font-montserrat leading-normal font-medium mb-6">
                {footerSection.title}
              </h4>
              <ul>
                {footerSection.links.map((footerLink) => (
                  <motion.li
                    whileHover={{ x: 5 }}
                    key={footerLink.name}
                    className="mt-3 text-slate-200 text-base leading-normal font-montserrat cursor-pointer hover:text-white-400"
                  >
                    <a href={footerLink.link}>{footerLink.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-24 justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyRightSign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
