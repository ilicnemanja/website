"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
    >
      <motion.div
        className="bg-grid-white/[0.2] absolute flex size-full items-center justify-center bg-black text-6xl text-primary-100 [mask-image:url(/images/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-secondary-100 dark:text-secondary-100"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}
      >
        <div className="absolute inset-0 z-0 size-full bg-black opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-4xl  text-center text-xl font-bold text-white md:text-2xl lg:text-4xl"
        >
          {children}
        </div>
      </motion.div>

      <div className="flex size-full items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
