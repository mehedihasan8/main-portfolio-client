import "./ProjectDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  const Projcets = [
    {
      id: 1,
      title: "Flex Code",
      team: "Team Project",
      name: "Problem solving Website",
      description: [
        "Flex-Code is a problem-solving website. Where users can practice coding problems.",
        "Providing a playground, where users can create projects by using HTML, CSS, and JavaScript.",
        "A solver can challenge another solver against a problem. Whoever solves it first win.",
        "user can see user profile. who can top and solve how it's problem.",
      ],
      image: "https://i.ibb.co/jwqJPJq/flex-code-6541d-web-app.png",
      links: {
        live: "https://flex-code-6541d.web.app/",
        client: "https://github.com/ihshadin/flex-code",
        server: "https://github.com/ihshadin/flex-code-server",
      },
      technology: [
        "JavaScript",
        "React",
        "Tailwind",
        "ExpresJs",
        "Mongoose",
        "Firebase",
        "sslcommerz",
        "jwt",
        "vercel",
      ],
      screenshots: [
        "https://i.ibb.co/3hYWVp5/Screenshot-2023-10-14-192822.png",
        "https://i.ibb.co/LdRDPXh/Screenshot-2023-10-14-193022.png",
        "https://i.ibb.co/n3Q8ncf/Screenshot-2023-10-14-193109.png",
        "https://i.ibb.co/vQH1Qxr/Screenshot-2023-10-14-200733.png",
      ],
    },
    {
      id: 2,
      title: "CAR WORLD",
      name: "Car Company Web App",
      description: [
        "Browse and search for different toy car models.",
        "View detailed information and specifications of each car.",
        "Filter cars based on criteria such as brand, price etc.",
        "Save favorite cars for future reference.",
        "User authentication and account management",
      ],
      image: "https://i.ibb.co/hBc1n3j/toy-car-ce3f5-web-app-1.png",
      links: {
        live: "https://toy-car-ce3f5.web.app/",
        client: "https://github.com/mehedihasan8/Toy-car-world",
        server: "https://github.com/mehedihasan8/Toy-car-world-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "Firebase",
        "MongoDB",
      ],
      screenshots: [
        "https://i.ibb.co/jW01v8n/Screenshot-2023-06-28-052158.png",
        "https://i.ibb.co/fpkHgHZ/Screenshot-2023-06-28-052308.png",
        "https://i.ibb.co/pdSdvrb/Screenshot-2023-06-28-052342.png",
        "https://i.ibb.co/M5FtfYd/Screenshot-2023-06-28-052445.png",
      ],
    },
    {
      id: 3,
      title: "YOGA",
      name: "Yoga Classes And Yoga Instrucors site",
      description: [
        "Browse and search for different Classes.",
        "View detailed information and specifications of each yoga class.",
        "payment based on his class price base etc.",
        "post instracturs class and see enrol details",
        "User authentication and account management and save user data",
      ],
      image:
        "https://i.ibb.co/w63L1QS/simple-firebase-project-a5441-web-app.png",
      links: {
        live: "https://simple-firebase-project-a5441.web.app/",
        client: "https://github.com/mehedihasan8/Yoga-client-site",
        server: "https://github.com/mehedihasan8/Yoga-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Json Webtoken",
        "Stripe",
      ],
      screenshots: [
        "https://i.ibb.co/MM25cd2/Screenshot-2023-06-30-213539.png",
        "https://i.ibb.co/bQtqbqz/Screenshot-2023-06-30-213932.png",
        "https://i.ibb.co/m9SL4kL/Screenshot-2023-06-30-214100.png",
        "https://i.ibb.co/hZCbYFV/Screenshot-2023-06-30-214344.png",
      ],
    },
  ];

  useEffect(() => {
    const project = Projcets.find((x) => x.id === +id);
    setProject(project);
  }, []);

  const {
    image,
    title,
    name,
    description,
    technology,
    links,
    screenshots,
    team,
  } = project;

  return (
    <div
      id="projectditails"
      className="detail-card w-full flex flex-col bg-gradient-to-b from-gray-700 via-black to-gray-800 pt-36"
    >
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        className="inside-detail  max-w-screen-lg mx-auto flex flex-col text-white lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-20"
      >
        <div className="image-detail w-full h-[35rem] lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col  justify-center">
          <div>
            <div className="flex justify-evenly items-center">
              <h2 className="font-semibold text-base  text-secondary">
                {title}
              </h2>
              <h1 className="font-bold text-2xl  text-[#0097e6] ">
                [ {team} ]
              </h1>
            </div>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {name}
            </h2>
            <div className="my-4">
              <h3 className=" text-secondary">Project Overview</h3>
              {description?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-2">
                {technology?.map((point, index) => (
                  <button
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="bg-slate-500 hover:text-[#0097e6] text-white px-2 py-1 rounded shadow-2xl"
                  >
                    {point}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="button-content flex justify-between mt-5"
          >
            <a
              href={links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={links?.server}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              {" "}
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Server Code
            </a>
          </div>
        </div>
      </div>

      <div className=" max-w-screen-lg px-8 md:px-0 mb-20">
        <p className="text-white text-center font-bold text-xl lg:text-5xl mb-16 ">
          Project Screenshots
        </p>
        <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {screenshots?.map((screenshot) => (
            <img
              key={screenshot.id}
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="w-full rounded-2xl"
              src={screenshot}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
