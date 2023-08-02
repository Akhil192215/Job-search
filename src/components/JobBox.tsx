import { BiTimeFive } from "react-icons/bi";

const JobBox = () => {
  interface Job {
    id: number;
    title: string;
    time: string;
    location: string;
    desc: string;
    company: string;
  }
  const data: Job[] = [
    {
      id: 1,
      title: "Web Developer",
      time: "now",
      location: "Canada",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptate soluta adipisci.",
      company: "Novac Linus Co.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      time: "soon",
      location: "United States",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quisquam tempore nesciunt.",
      company: "TechGiant Inc.",
    },
    {
      id: 3,
      title: "Backend Developer",
      time: "soon",
      location: "Germany",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, ipsam doloribus nostrum velit.",
      company: "SoftWorks GmbH",
    },
    // Add more dummy objects below with unique data
    {
      id: 4,
      title: "UI/UX Designer",
      time: "now",
      location: "Australia",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti non natus reprehenderit.",
      company: "DesignWave Studios",
    },
    {
      id: 5,
      title: "Data Analyst",
      time: "soon",
      location: "India",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error animi magni beatae quam.",
      company: "DataInsights Ltd.",
    },
    {
      id: 6,
      title: "Software Engineer",
      time: "soon",
      location: "France",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio earum suscipit consectetur facilis.",
      company: "SoftTech Solutions",
    },
    {
      id: 7,
      title: "Mobile App Developer",
      time: "soon",
      location: "Brazil",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam saepe tempore odit expedita.",
      company: "AppMaster Co.",
    },
    {
      id: 8,
      title: "Network Administrator",
      time: "now",
      location: "United Kingdom",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quod ipsa aperiam quas.",
      company: "NetworkPro Ltd.",
    },
    {
      id: 9,
      title: "DevOps Engineer",
      time: "now",
      location: "Singapore",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatum consequatur similique odio.",
      company: "DevOpsNow Inc.",
    },
    {
      id: 10,
      title: "Machine Learning Engineer",
      time: "soon",
      location: "Japan",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, impedit dolorum eligendi libero.",
      company: "AI Solutions Japan",
    },
   
    // Add more dummy objects as needed
  ];
  return (
    <div >
    <div className="flex gap-10 justify-center flex-wrap items-center py-10 ">
      {data.map((job) => (
        <div
          key={job.id}
          className="group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor
                    shadow-lg shadow-grayIsh hover:shadow-lg duration-300"
        >
          <span className="flex justify-between items-center gap-4">
            <h1
              className="text-[16px] font-semibold text-textColor group-hover:text-white"
            >
              {job.title}
            </h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive /> {job.time}
            </span>
          </span>
          <h6 className="text-[#ccc]">{job.location}</h6>
          <p
            className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white"
          >
            {job.desc}
          </p>
          <div className="flext items-center gap-2">
            {/* <img src="" alt="" /> */}
            <span className="text-[14px] py-[1rem] block group-hover:text-white">
              {job.company}
            </span>
          </div>
          <button
            className="border-[2px] rounded-[10px] w-full p-[10px] text-[14px] font-semibold
                        hover:bg-white group-hover/item:text-textColor group-hover:text-white"
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default JobBox;
