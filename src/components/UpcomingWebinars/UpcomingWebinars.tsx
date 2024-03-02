"use client";

import Link from "next/link";
import React from "react";

import { HoverEffect } from "../ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering the Art of Guitar Solos",
    description:
      "Unlock the secrets of creating breathtaking guitar solos with renowned musicians.",
    slug: "guitar-solos-masterclass",
    isFeatured: true,
  },
  {
    title: "Songwriting Workshop: From Lyrics to Melody",
    description:
      "Learn the craft of transforming your ideas into memorable songs with expert songwriters.",
    slug: "songwriting-workshop",
    isFeatured: true,
  },
  {
    title: "Exploring Jazz Rhythms: A Drummer's Perspective",
    description:
      "Dive into the world of jazz rhythms and enhance your drumming skills with seasoned percussionists.",
    slug: "jazz-rhythms-drum-workshop",
    isFeatured: true,
  },
  {
    title: "Music Production 101: From Concept to Final Mix",
    description:
      "Discover the essentials of music production and take your tracks to the next level.",
    slug: "music-production-101",
    isFeatured: true,
  },
  {
    title: "Vocal Mastery: Techniques for Singers",
    description:
      "Improve your singing technique and explore vocal nuances with experienced vocal coaches.",
    slug: "vocal-mastery-workshop",
    isFeatured: true,
  },
  {
    title: "Bass Grooves Unleashed: A Bassist's Guide",
    description:
      "Delve into the world of bass guitar and learn how to create captivating bass grooves.",
    slug: "bass-grooves-workshop",
    isFeatured: true,
  },
  // Add more featured webinars as needed
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-0 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="rounded-full bg-black text-white dark:bg-zinc-800 px-4 py-2 space-x-1"
          >
            View all webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
