import React from "react";
import EDCard from "./EDCard";
import Link from "next/link";

type Props = {};

type Dev = {
  imgUrl: string;
  name: string;
  professionalTitle: string;
  profileLink: string;
};

const devs: Dev[] = [
  
  {
    imgUrl: "/assets/developers/osama.png",
    name: "Muhammad Osama Anwar",
    professionalTitle: "Software Engineer",
    profileLink: "#",
  },
  {
    imgUrl: "/assets/developers/umar.png",
    name: "Umar Khitab",
    professionalTitle: "Software Engineer",
    profileLink: "#",
  },
];

export default function ExceptionalDevelopers({}: Props) {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-6 my-20">
      <h2 className="w-[80%] md:w-[60%] lg:w-[40%] text-4xl font-extrabold text-h2clr">
        Meet The Exceptional Developers In Our Network
      </h2>
      <p className="w-[90%] md:w-[70%] lg:w-[45%] text-xl ">
        Our diverse remote hiring network includes the top talented developers
        from all over the world, carefully vetted to work on all types of
        software development projects without letting you go through the hiring
        hassle.
      </p>
      <div className="flex justify-center gap-4 py-8">
        {devs.map((dev: any, index: number) => {
          return <EDCard key={index} data={dev} />;
        })}
      </div>
      <Link href="/talent" className="primaryButton w-fit">
        Explore Talent
      </Link>
    </div>
  );
}
