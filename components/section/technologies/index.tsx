import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div className="mb-24 mt-36 bg-[#f5f5f5] py-8 dark:bg-[#232323]">
      <h1 className="mb-2 text-center font-sansation text-xl text-primary-100 dark:text-secondary-100">
        Using the latest technologies
      </h1>
      <div className="md:h-38 my-7 grid h-auto grid-cols-2 gap-4 px-14 md:grid-cols-6 md:gap-2">
        <div className="b flex items-center justify-center">
          <Image
            src="/images/javascript.svg"
            alt="Next"
            width={80}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/typescript.svg"
            alt="Next"
            width={80}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/python.svg" alt="Next" width={80} height={40} />
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
      </div>

      <h1 className="text-center font-sansation text-base text-primary-100 dark:text-secondary-100">
        and many more...
      </h1>
    </div>
  );
};

export default Technologies;
