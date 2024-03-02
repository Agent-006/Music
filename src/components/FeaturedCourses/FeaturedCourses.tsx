"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

import courseData from "../../data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="p-12 bg-[#0F172A]">
      <div>
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-0 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col justify-between rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={course.image}
                  alt="jordans"
                  height={400}
                  width={400}
                  className="object-contain"
                />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                    >
                      <span>Learn more </span>
                    </Link>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                    >
                      <span>Buy now </span>
                      <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        ${course.price}
                      </span>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded-full bg-black text-white dark:bg-zinc-800 px-4 py-2 space-x-1"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
