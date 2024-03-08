"use client";
import React from "react";

import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're her to help with any questions about out courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-1 bg-transparent/5"
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          placeholder="Your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-1 bg-transparent/5"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-black text-white dark:bg-zinc-800 px-4 py-2 space-x-1"
        >
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
