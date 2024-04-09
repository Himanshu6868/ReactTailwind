import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="lg:px-28 px-6">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-24">
        <div className=" basis-2/6 flex flex-col gap-8 justify-start">
          <h1 className="sm:text-4xl text-3xl font-semibold">
            Easy <br />
            <span className="text-blue-500">ahead</span>
          </h1>
          <h2 className="mb-3">
            We take the work out of connecting with others <br /> so you can
            accompliseh more
          </h2>
          <select
            className="border py-3 px-1 rounded-lg"
            id="language-dropdown">
            <option value="en" selected>
              English
            </option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
            <option value="zh">中文 (简体)</option>
            <option value="ar">العربية</option>
          </select>
          <div className="flex flex-row justify-start items-start">
            <img src="/google-play.png" className="w-[120px] h-[60px]" />
            <img src="/apple-store.png" className="w-[120px] h-[60px]" />
          </div>
          <div className="flex gap-5 py-5">
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-6 hover:text-blue-600 cursor-pointer transition ease-in-out duration-250"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-6 hover:text-blue-600 cursor-pointer transition ease-in-out duration-250"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-6 hover:text-blue-600 cursor-pointer transition ease-in-out duration-250"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="h-6 hover:text-blue-600 cursor-pointer transition ease-in-out duration-250"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              className="h-6 hover:text-blue-600 cursor-pointer transition ease-in-out duration-250"
            />
          </div>
          {/* <div className=" sm:hidden border-b-4 border-dotted sm:mb-10 mb-5"></div> */}
        </div>

        {/* <div className="border-b mb-5 sm:block hidden"></div> */}

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-start w-full">
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Company</h1>
            <li class="mb-2 font-light">Calendly.com</li>
            <li class="mb-2 font-light">Customers</li>
            <li class="mb-2 font-light">About Us</li>
            <li class="mb-2 font-light">Leadership</li>
            <li class="mb-2 font-light">Careers</li>
            <li class="mb-2 font-light">Newsroom</li>
          </ul>
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Teams</h1>
            <li class="mb-2 font-light">Sales</li>
            <li class="mb-2 font-light">Marketing</li>
            <li class="mb-2 font-light">Customer Success</li>
            <li class="mb-2 font-light">Information Technology</li>
            <li class="mb-2 font-light">Revenue Operations</li>
          </ul>
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Resources</h1>
            <li class="mb-2 font-light">Pricing</li>
            <li class="mb-2 font-light">Blog</li>
            <li class="mb-2 font-light">Calendly Community</li>
            <li class="mb-2 font-light">Developer Tools</li>
            <li class="mb-2 font-light">Video Tutorials</li>
            <li class="mb-2 font-light">Prelude</li>
          </ul>
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Downloads</h1>
            <li class="mb-2 font-light">Calendly for iOS</li>
            <li class="mb-2 font-light">Calendly for Android</li>
            <li class="mb-2 font-light">Chrome Extension</li>
            <li class="mb-2 font-light">Firefox Extension</li>
          </ul>
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Connect</h1>
            <li class="mb-2 font-light">Sign up for free</li>
            <li class="mb-2 font-light">Talk to sales</li>
            <li class="mb-2 font-light">Help Center</li>
            <li class="mb-2 font-light">Contact Us</li>
          </ul>
          <ul class="">
            <h1 class="mb-4 font-semibold text-xl">Developers</h1>
            <li class="mb-2 font-light">Developer tools</li>
          </ul>
        </div>
        {/* <div className="border-b mb-5"></div>
      <div className="flex lg:flex-row flex-col sm:justify-between my-10 mx-5">
        <div className="">
          <h4 className="font-light text-sm my-5">Copyright Calendly 2024</h4>
        </div>
        <div className="flex sm:gap-6 sm:flex-row flex-col text-sm font-light ">
          <span>Privacy</span>
          <span>Terms and Conditions</span>
          <span>Status</span>
          <span>Security</span>
        </div>
      </div> */}
      </div>
      <div className="flex flex-row justify-between pt-10 pb-12 text-gray-500 text-xs md:text-sm font-light ">
        <p>Copyright Calendly 2024</p>
        <p>Calendly Status</p>
        <p>Privacy / Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
