"use client";
import React from "react";
import { greatVibes } from "../styles/fonts";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";

const stories = [
  {
    id: 1,
    image: "/images/story-1.jpg",
    title: "The First Meet",
    date: "2009-03-17",
    description:
      "Jonathan and Fabiola, both raised as Christians, have attended church since their early childhood. Although Fabiola had noticed Jonathan, she was aware of the age difference between them, so her affection for him remained a mere fantasy. She would confide in her friends and even Jonathan's mother, expressing her belief that she would marry him someday. As years went by, fate brought them together through an online conversation. Jonathan, as musician, caught Fabiola's attention when she began leaving comments on one of his YouTube videos. This interaction led to further conversations and the blossoming of their friendship. Eventually, they planned to meet, which served as the starting point for their romantic relationship.",
  },
  {
    id: 2,
    image: "/images/story-2.jpg",
    title: "The First Love",
    date: "2009-06-16",
    description:
      "Following their initial meeting and subsequent dates, both were residing in Holland. However, Fabiola started experiencing a longing for her homeland and made the decision to return to Curaçao. Thus, she followed through with her plan, and unknowingly, they went their separate ways while unaware of the forthcoming arrival of their child. Despite the circumstances, their love for each other remained unwavering. Unfortunately, due to the drastic changes happening in their lives and their young age, they lacked the means to maintain regular contact or remain together.",
  },
  {
    id: 3,
    image: "/images/story-3.jpg",
    title: "Back together",
    date: "2020-01-01",
    description:
      "Fast forward twelve long years of no contact, Jonathan finally reached out to Fabiola through Facebook. Their initial conversation reignited their connection and eventually led to a long-awaited reunion. They shared heartfelt discussions about their love for each other and the child they had unknowingly brought into the world. Reconciliation took place, and they decided to give their relationship another chance. This time, they approached it with utmost seriousness, and within a few months, they made the significant decision to move in together in Holland, were they got engaged and eventually married at civil.",
  },
  {
    id: 4,
    image: "/images/story-4.jpg",
    title: "The Future",
    date: "2023-12-29",
    description:
      "Today, surrounded by our cherished family and friends, they are joining in matrimony before God. With the love of God guiding their path, they have chosen a lifetime commitment to each other. Their love extends not only to one another but also to all of their children. Together, they embrace a future that is bound by eternal love...",
  },
];

type Props = {};

function Story({}: Props) {
  return (
    <div className="flex flex-col max-w-6xl px-10 pt-10 mx-auto items-center">
      <div className="mb-4 pt-20 flex flex-col justify-center items-center">
        <h6 className="uppercase text-[#B76E78] text-md mb-3 font-semibold tracking-widest">
          Story
        </h6>
        <h1 className={`${greatVibes.className} text-4xl`}>Our Love Story</h1>
        <div className="flex items-center justify-center space-x-5">
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
          <FaHeart className="animate-bounce" />
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
        </div>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute w-0.5 top-0 bottom-0 left-1/2 bg-[#B76E78]"></div>
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative flex flex-col md:flex-row mb-8
                        "
          >
            <div className="flex flex-col w-full md:w-1/2 mr-14 p-8 bg-[#EDF5F7] justify-center">
              <h4 className="mb-2 text-xl">{story.title}</h4>
              <p className="italic font-light text-gray-300">{story.date}</p>
              <p className="text-gray-500">{story.description}</p>
            </div>
            <div className="hidden md:block absolute w-[30px] h-[30px] top-[calc(50%-15px)] left-[calc(50%-14px)] bg-white border-2 border-[#b76e78] rounded-full rotate-45 z-10"></div>
            <FaHeart className="hidden md:block absolute top-[calc(50%-8px)] left-[calc(50%-7px)] text-[#b76e78] z-20" />
            <div className="relative aspect-[4/3] md:w-1/2">
              <Image
                alt={story.title}
                src={story.image}
                sizes="100vh"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
