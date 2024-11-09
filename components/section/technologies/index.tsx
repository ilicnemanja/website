import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div className="mb-24 mt-36 bg-[#f5f5f5] py-8 dark:bg-[#8a898975]">
      <h1 className="mb-2 text-center font-sansation text-xl text-primary-100 dark:text-secondary-100">
        Using the latest technologies
      </h1>
      <div className="mt-7 grid h-auto grid-cols-1 gap-8 px-14 md:h-40 md:grid-cols-5 md:gap-2">
        <div className="flex items-center justify-center">
          <Image
            src="/images/typescript.svg"
            alt="Next"
            width={80}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/next.svg" alt="Next" width={180} height={40} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/nest.svg" alt="Next" width={180} height={40} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/react.svg" alt="Next" width={100} height={40} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/mongodb.svg" alt="Next" width={180} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
