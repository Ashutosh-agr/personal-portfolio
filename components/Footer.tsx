import Image from "next/image"
import {FaLocationArrow} from "react-icons/fa6"

import {socialMedia} from "@/data"
import MagicButton from "./MagicButton"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a passionate{" "}
          <span className="text-purple">Software Engineer</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center pl-5">
          Let&apos;s connect and explore how I can add value to your company.
        </p>
        <a href="mailto:ashutosh1503k@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year} Ashutosh Agarwal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => window.open(info.link, "_blank")}
            >
              <div className="relative w-5 h-5">
                <Image src={info.img} alt="icons" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
