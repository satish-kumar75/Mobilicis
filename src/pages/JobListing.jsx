import { assets } from "../assets/assets";

const jobData = [
  {
    title: "Backend Developer",
    company: "Tech Solutions Co.",
    location: "Tokyo, Japan",
    salary: "$90,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Design and develop server-side logic and databases for high-performance applications. Implement security and data protection measures to safeguard sensitive information.",
  },
  {
    title: "Mobile App Developer",
    company: "App Development Agency",
    location: "Osaka, Japan",
    salary: "$85,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Create native and cross-platform mobile applications for iOS and Android platforms. Collaborate with designers and backend developers to deliver seamless app experiences.",
  },
  {
    title: "Content Marketing Manager",
    company: "Content Creation Co.",
    location: "Kyoto, Japan",
    salary: "$75,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop and execute content marketing strategies to drive brand awareness and engagement. Create compelling content for blogs, social media, and email campaigns.",
  },
  {
    title: "QA Engineer",
    company: "Quality Assurance Inc.",
    location: "Yokohama, Japan",
    salary: "$80,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop and execute test plans, scenarios, and scripts to ensure the quality and reliability of software applications. Identify and report bugs and collaborate with development teams to resolve issues.",
  },
  {
    title: "English Language Instructor",
    company: "Language Institute",
    location: "Nagoya, Japan",
    salary: "$55,000/year",
    image: assets.company,
    jobtype: "Part-time",
    description:
      "Teach English language skills to non-native speakers in a classroom setting. Plan and deliver engaging lessons, assess student progress, and provide feedback to support language learning.",
  },
  {
    title: "Data Scientist",
    company: "Data Analytics Co.",
    location: "Sapporo, Japan",
    salary: "$95,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Apply advanced statistical and machine learning techniques to analyze complex datasets and extract actionable insights. Develop predictive models and algorithms to drive business decision-making.",
  },
  {
    title: "Social Media Manager",
    company: "Social Media Agency",
    location: "Fukuoka, Japan",
    salary: "$65,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Manage and optimize social media profiles and campaigns to increase brand visibility and engagement. Create content calendars, monitor analytics, and respond to audience interactions.",
  },
  {
    title: "HR Coordinator",
    company: "HR Services Ltd.",
    location: "Hiroshima, Japan",
    salary: "$60,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Support HR functions including recruitment, onboarding, and employee relations. Maintain HR records, assist with payroll processing, and ensure compliance with labor laws and regulations.",
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions Co.",
    location: "Tokyo, Japan",
    salary: "$85,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Design and develop user-friendly interfaces for web applications using HTML, CSS, and JavaScript. Collaborate with backend developers to integrate frontend components with backend systems.",
  },
  {
    title: "UX/UI Designer",
    company: "Design Innovations Inc.",
    location: "Osaka, Japan",
    salary: "$70,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Create intuitive user experiences and visually appealing interfaces for web and mobile applications. Conduct user research, wireframing, and prototyping to enhance product usability.",
  },
  {
    title: "Digital Marketing Manager",
    company: "Digital Marketing Agency",
    location: "Kyoto, Japan",
    salary: "$80,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Develop and execute digital marketing strategies to drive online traffic and generate leads. Manage PPC campaigns, SEO, email marketing, and social media advertising to maximize ROI.",
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Technologies Ltd.",
    location: "Yokohama, Japan",
    salary: "$95,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Implement and maintain cloud infrastructure using AWS, Azure, or GCP. Automate deployment, scaling, and monitoring processes to ensure high availability and reliability of applications.",
  },
  {
    title: "English Language Instructor",
    company: "Language Institute",
    location: "Nagoya, Japan",
    salary: "$50,000/year",
    image: assets.company,
    jobtype: "Part-time",
    description:
      "Teach English language skills to non-native speakers in a classroom setting. Develop lesson plans, conduct assessments, and provide constructive feedback to enhance student learning outcomes.",
  },
  {
    title: "Financial Analyst",
    company: "Investment Firm",
    location: "Sapporo, Japan",
    salary: "$85,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Analyze financial data, market trends, and investment opportunities to support decision-making processes. Prepare financial reports, forecasts, and models to evaluate business performance.",
  },
  {
    title: "Sales Representative",
    company: "Retail Company",
    location: "Fukuoka, Japan",
    salary: "$55,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Promote and sell products or services to customers through various channels including phone, email, and in-person interactions. Build and maintain relationships with clients to achieve sales targets.",
  },
  {
    title: "Recruitment Specialist",
    company: "HR Consulting Firm",
    location: "Hiroshima, Japan",
    salary: "$70,000/year",
    image: assets.company,
    jobtype: "Full-time",
    description:
      "Source, screen, and recruit qualified candidates for open positions within client organizations. Coordinate interviews, negotiate job offers, and onboard new hires to ensure a smooth hiring process.",
  },
];

export const JobCard = ({
  title,
  company,
  location,
  salary,
  image,
  jobtype,
  description,
}) => {
  return (
    <div className="job-card sm:p-5 p-2 rounded-3xl bg-gradient-to-br from-purple-heart-600 via-purple-heart-950 to-transparent hover:scale-105 transition duration-300">
      <div className="flex items-center sm:gap-4 gap-2">
        <img src={image} alt={title} />
        <div className="company-details">
          <p>{company}</p>
          <p className="text-purple-heart-200 mt-2">{location}</p>
        </div>
      </div>
      <div className="job-description">
        <h3 className="text-2xl sm:mt-5 mt-2">{title}</h3>
        <p className="sm:mb-3 sm:mt-1 mb-2">{jobtype}</p>
        <p className="text-purple-heart-200 text-sm">{description}</p>
      </div>
      <div className="apply-btn flex justify-between mt-5 items-center">
        <p>{salary}</p>
        <button className="bg-purple-heart-600 text-purple-heart-100  hover:bg-purple-heart-700 px-5 py-2 rounded-full transition duration-300">
          Apply
        </button>
      </div>
    </div>
  );
};

const JobListing = () => {
  return (
    <div className="job-container py-7 px-3">
      <div className="J-container transition-all sm:gap-8 gap-4 sm:px-5 px-3 py-6 grid-cols-2">
        {jobData.map((jobData, index) => (
          <JobCard key={index} {...jobData} />
        ))}
      </div>
    </div>
  );
};

export default JobListing;
