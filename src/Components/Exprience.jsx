import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import nextjs from "../assets/nextjs.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import figma from "../assets/figma.png";

const Exprience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      scroll: "zoom-in-down",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      scroll: "zoom-in-down",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      scroll: "zoom-in-down",
    },
    {
      id: 4,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
      scroll: "zoom-in-down",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
      scroll: "zoom-in-up",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-800",
      scroll: "zoom-in-up",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      scroll: "zoom-in-up",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
      scroll: "zoom-in-up",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
      scroll: "zoom-in-up",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      scroll: "zoom-in-up",
    },
    {
      id: 11,
      src: figma,
      title: "Figma",
      style: "shadow-red-600",
      scroll: "zoom-in-up",
    },
  ];

  return (
    <div>
      <div
        id="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full "
      >
        <div className="max-w-screen-lg mx-auto p-4 md:p-0 md:pt-16 flex flex-col justify-center w-full  text-white">
          <p className="text-4xl font-bold inline pt-0 md:pt-4  border-b-4 border-biol border-gray-500">
            Experience
          </p>
          <p className="py-4 md:py-6">
            These are the technologies I've worked with
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
            {techs.map(({ id, src, title, style, scroll }) => (
              <div
                key={id}
                data-aos={scroll}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
