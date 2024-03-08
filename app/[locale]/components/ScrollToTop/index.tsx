"use client";
import { useEffect, useState } from "react";
import { boolean } from "yup";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-[5px] z-[10000]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className={"flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[green] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp " + (isVisible ? 'mr-8' : 'mr-0')}
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </div>
      )}
    </div>
  );
}
