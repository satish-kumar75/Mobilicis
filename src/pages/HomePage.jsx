import React from "react";
import { FiSearch } from "react-icons/fi";
import { assets } from "../assets/assets";
import { JobCard } from "./JobListing";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Marketing & Communication",
    image: assets.marketing,
    jobCount: 237,
  },
  {
    title: "Design & Development",
    image: assets.design,
    jobCount: 237,
  },
  {
    title: "Human Research & Development",
    image: assets.user,
    jobCount: 237,
  },
  {
    title: "Finance Management",
    image: assets.finance,
    jobCount: 237,
  },
  {
    title: "Government Jobs",
    image: assets.government,
    jobCount: 237,
  },
  {
    title: "Business & Consulting",
    image: assets.business,
    jobCount: 237,
  },
  {
    title: "Customer Support Care",
    image: assets.customer,
    jobCount: 237,
  },
  {
    title: "Project Management",
    image: assets.project,
    jobCount: 237,
  },
];

const jobData = [
  {
    title: "Software Engineer",
    company: "Tech Co.",
    location: "Tokyo, Japan",
    salary: "$80,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Graphic Designer",
    company: "Design Studio",
    location: "Osaka, Japan",
    salary: "$60,000/year",
    image: assets.company,
    jobtype: "Part-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Marketing Specialist",
    company: "Digital Agency",
    location: "Kyoto, Japan",
    salary: "$70,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Product Manager",
    company: "Tech Startup",
    location: "Yokohama, Japan",
    salary: "$90,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "English Teacher",
    company: "Language School",
    location: "Nagoya, Japan",
    salary: "$40,000/year",
    image: assets.company,
    jobtype: "Part-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Finance Analyst",
    company: "Financial Firm",
    location: "Sapporo, Japan",
    salary: "$75,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Customer Service Representative",
    company: "E-commerce Company",
    location: "Fukuoka, Japan",
    salary: "$45,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop innovative software solutions using cutting-edge technologies to solve complex problems. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "HR Manager",
    company: "Global Corporation",
    location: "Hiroshima, Japan",
    salary: "$5,000/month",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum. ",
  },
];

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <JobCategory />
      <Jobs />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="H-container flex justify-center flex-col items-center pt-7 pb-9">
      <h1 className="leading-snug text-center mb-5 font-semibold">
        Get the <span className="text-purple-heart-700">Right Job</span> <br />
        You Deserve
      </h1>
      <p className="">786 jobs & 110 candidates are registeresd</p>
      <div className="flex items-center justify-between bg-purple-heart-100 rounded-full mt-8 w-2/6">
        <label className="flex items-center gap-3 px-3 py-2 flex-grow">
          <FiSearch className="text-purple-800 text-2xl" />
          <input
            className="bg-transparent outline-none text-purple-700 w-full"
            type="text"
            placeholder="Job title"
          />
        </label>
        <button className="bg-purple-heart-800 text-purple-heart-100 hover:bg-purple-heart-950 py-2 px-4 rounded-full border-2 transition duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, image, jobCount }) => {
  return (
    <div className="px-3 py-4 sm:rounded-lg sm:bg-gradient-to-br sm:from-purple-heart-600 sm:via-purple-heart-950 sm:to-transparent">
      <div className="sm:hidden">
        <div className="flex gap-3 items-center justify-center h-[79px] px-3 rounded-3xl text-xs bg-gradient-to-br from-purple-heart-600 via-purple-heart-950 to-transparent">
          <img className="w-1/6" src={image} alt={title} />
          <p>{title}</p>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-6 items-center">
          <img src={image} alt={title} />
          <p className="text-xl">{title}</p>
        </div>
        <span className="block mt-4 ml-16 text-base text-purple-heart-100">
          {jobCount} jobs available
        </span>
      </div>
    </div>
  );
};

const JobCategory = () => {
  return (
    <div className="job-container bg-haiti-950 py-7 px-3">
      <h2 className="text-center">
        One Platform <br /> Many{" "}
        <span className="text-purple-heart-700 font-medium">Solutions</span>
      </h2>
      <div className="container transition-all sm:gap-8 sm:px-5 py-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="job-container py-7 px-3">
      <h2 className="text-center">Jobs of the day</h2>
      <div className="J-container transition-all sm:gap-8 gap-4 sm:px-5 px-3 py-6 grid-cols-2">
        {jobData.map((jobData, index) => (
          <JobCard key={index} {...jobData} />
        ))}
      </div>
      <Link
        to={"/jobs"}
        className="bg-purple-heart-600 text-purple-heart-100 hover:bg-purple-heart-700 px-5 py-2 rounded-lg transition duration-300 relative left-1/2 transform -translate-x-1/2 "
      >
        Find More Jobs
      </Link>
    </div>
  );
};

export default HomePage;
