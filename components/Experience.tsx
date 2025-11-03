import React from "react"
import Image from "next/image"

import {workExperience} from "@/data"
import {Button} from "./ui/MovingBorders"

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Professional Presence</span>
      </h1>

      <div className="w-full mt-11 flex flex-wrap justify-center items-center gap-6 px-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            containerClassName="sm:w-96 w-[80vw] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            className="relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased"
            onClick={() => window.open(card.link, "_blank")}
          >
            <div className="flex flex-row items-center p-3 py-6 md:p-5 lg:p-10 gap-3">
              <div className="lg:w-28 md:w-20 w-16 relative">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={64}
                  height={64}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="lg:ms-10">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
