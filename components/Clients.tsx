"use client"

import React from "react"
import Image from "next/image"

import {companies, testimonials} from "@/data"
import {InfiniteMovingCards} from "./ui/InfiniteCards"

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Academics and Extracurricular
        <span className="text-purple"> Achivements </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div
                className={`flex gap-2 items-center ${
                  company.id === 4
                    ? "md:max-w-none max-w-none"
                    : "md:max-w-60 max-w-32"
                }`}
                style={company.id === 4 ? {overflow: "visible"} : undefined}
              >
                {company.id !== 3 &&
                company.id !== 1 &&
                company.id !== 5 &&
                company.id !== 2 ? (
                  <div className="md:w-10 w-6 relative">
                    <Image
                      src={company.img}
                      alt={company.name}
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ) : null}
                <div
                  className={
                    company.id === 5 || company.id === 2
                      ? "md:w-40 w-36 object-contain"
                      : "md:w-24 w-20 object-contain"
                  }
                >
                  <Image
                    src={company.nameImg}
                    alt={company.name}
                    width={160}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
