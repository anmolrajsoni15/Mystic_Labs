"use client";

import React from "react";
import Image from "next/image";
import Subcomp from "./Subcomp";
import icon1 from "../../public/icons/icon1.png";
import icon2 from "../../public/icons/icon2.png";
import icon3 from "../../public/icons/icon3.png";
import icon4 from "../../public/icons/icon4.png";
import icon5 from "../../public/icons/icon5.png";
import icon6 from "../../public/icons/icon6.png";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";
import Globe from "./Globe";

function Features() {
  return (
    <div className="flex flex-col h-full gap-[75px] items-center mb-28">
      <div className="flex flex-col w-4/5 items-center justify-center gap-7 px-8">
        <p className="text-[32px] leading-[44px] font-poppins font-semibold">Don&apos;t look across 10s of Documents, just ask.</p>
        <p className="font-spacegrotesk font-medium text-xl leading-7">
          Revolutionize Your Team&apos;s Productivity with Q/A. No more Repeat Explanations!
        </p>
      </div>
      <div className="flex flex-row w-5/6 gap-6 h-[415px]">
        <div className="border-color2 flex w-1/2 rounded-3xl items-center h-full">
          <div className="bg-black rounded-3xl p-6 gap-8 flex flex-col w-full h-full items-center">
            <div className="h-3/5 flex items-center justify-center">
              <Image src={image1} alt="icon1" />
            </div>
            <div className="h-2/5 flex flex-col gap-4 items-start justify-center">
              <h3 className="text-lg font-semibold">
                Top Integrations available
              </h3>
              <p className="text-base leading-7 text-zinc-500">
                Bloc can be integrated with a lot of apps, so you never miss
                anything. Notion, Google Drive, Figma and slack we have it all.
              </p>
            </div>
          </div>
        </div>
        <div className="border-color2 flex w-1/2 rounded-3xl items-center h-full">
          <div className="bg-black rounded-3xl p-6 gap-8 flex flex-col w-full h-full items-center">
            <div className="h-3/5 flex items-center justify-center">
              <Image src={image2} alt="icon1" />
            </div>
            <div className="h-2/5 flex flex-col gap-4 items-start justify-center">
              <h3 className="text-lg font-semibold">
                Centralise your knowledge base
              </h3>
              <p className="text-base leading-7 text-zinc-500">
                Elevate your knowledge management game by having a centralised
                platform for all your valuable data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 border-[1px] border-solid border-[#ffffff3a] rounded-2xl flex flex-col items-center justify-center h-[230px] font-spacegrotesk gap-6">
        <div className="text-center w-2/3 text-xl leading-6 font-medium">
          <p>
            I have to say, I was a bit skeptical about Bloc at first, but after
            using it for a few days, I&apos;m a believer. The ability to ask simple
            questions and get immediate answers from our company&apos;s knowledge
            base has been a game-changer.
          </p>
        </div>
        <div className="text-center text-lg leading-5">
          <p>Gluman desk</p>
          <p>Founder of Vernit</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-36 border-y-[1px] border-solid border-y-[#ffffff3a]">
        <div className="w-4/6 flex flex-row items-center justify-between">
          <div className="text-2xl font-poppins font-semibold">
            Join the Communication Revolution Between Teams with Bloc
          </div>
          <button className="w-44 h-14 bg-[#1C1C1C] rounded-md border-2 border-[#ffffff1a] font-spacegrotesk text-lg leading-6">
            Join the Waitlist
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[748px] w-full">
        <div className="w-5/6 flex flex-row items-center justify-center mb-16">
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] rounded-s-2xl">
            <Subcomp
              icon={icon1}
              title="Natural language processing (NLP)"
              desc="questions in plain language and quickly find the information they need from uploaded knowledge base."
            />
          </div>
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] border-l-0 border-r-0">
            <Subcomp
              icon={icon2}
              title="Flexible document and file uploads"
              desc="Bloc allows users to upload a wide variety of file types, including slack, google documents, spreadsheets."
            />
          </div>
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] rounded-e-2xl">
            <Subcomp
              icon={icon3}
              title="Collaboration"
              desc="Deliver dynamic, personalized content, while ensuring users only see the best version of your site."
            />
          </div>
        </div>

        <div className="w-5/6 flex flex-row items-center justify-center mb-16">
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] rounded-s-2xl">
            <Subcomp
              icon={icon4}
              title="AI-powered search"
              desc="questions in plain language and quickly find the information they need from uploaded knowledge base."
            />
          </div>
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] border-l-0 border-r-0">
            <Subcomp
              icon={icon5}
              title="Customizable workflows"
              desc="Bloc allows users to upload a wide variety of file types, including slack, google documents, spreadsheets."
            />
          </div>
          <div className="w-1/3 border-[1px] border-solid border-[#ffffff34] rounded-e-2xl">
            <Subcomp
              icon={icon6}
              title="Robust security and privacy features"
              desc="Deliver dynamic, personalized content, while ensuring users only see the best version of your site."
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[761px] py-24 flex flex-row items-center justify-center">
        <div className="w-[55%]">
          <div className="w-full border-color1 border-x-0 h-72 p-6 pl-[124px] flex flex-col items-start justify-center gap-5">
            <h1 className="font-poppins text-2xl font-semibold">Empower Everyone.</h1>
            <p className="text-[#666666] font-roboto text-base">
              Join us today and work together with confidence, transparency, and
              accelerated success. Experience the power of Bloc and empower your
              team to effortlessly tackle data with AI-driven insights. And
              don&apos;t forget to check out the waitlist map showcasing the last 20
              people who joined our community. Let&apos;s move towards success
              together!
            </p>
            <button className="w-44 h-14 bg-[#1C1C1C] rounded-md border-2 border-[#ffffff1a] font-spacegrotesk text-lg leading-6">
              Join the Waitlist
            </button>
          </div>
        </div>
        <div className="w-[45%]">
          <Globe />
        </div>
      </div>
    </div>
  );
}

export default Features;
