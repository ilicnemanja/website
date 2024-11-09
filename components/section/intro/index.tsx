import React from "react";

import { MaskContainer } from "@/components/MaskContainer";

const Intro = () => {
  return (
    <div className="mt-20 flex h-80 w-full items-center justify-center overflow-hidden md:mt-0">
      <MaskContainer
        revealSize={200}
        revealText={
          <p className="mx-auto max-w-4xl text-center font-sansation text-xl font-bold text-primary-100 dark:text-secondary-100 md:text-2xl lg:text-4xl">
            Hi there! I&apos;m Nemanja Ilić, a software engineer specializing in
            building efficient, scalable, and user-friendly applications.
            <br />
            <br />
            Welcome to my portfolio—let&apos;s explore how I can help bring your
            ideas to life.
          </p>
        }
        className="h-80 w-[80rem] font-sansation text-primary-100 dark:text-secondary-100"
      >
        Hi there! I&apos;m <span className="text-blue-400">Nemanja Ilić</span>,
        a <span className="text-red-400">software engineer</span> specializing
        in building <span className="text-red-400">efficient</span>,{" "}
        <span className="text-purple-400">scalable</span>, and{" "}
        <span className="text-orange-300">user-friendly applications</span>
        <br />
        <br />
        Welcome to my <span className="text-purple-400">portfolio</span>
        —let&apos;s <span className="text-red-400">explore</span> how I can help
        bring <span className="text-blue-400">your ideas</span> to{" "}
        <span className="text-green-400">life</span>.
      </MaskContainer>
    </div>
  );
};

export default Intro;
