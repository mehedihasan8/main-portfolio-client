import {
  FaFacebook,
  FaGithub,
  FaJsSquare,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import profile from "../assets/okay.jpg";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="pt-28">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:flex-row px-8 pt-8 justify-center items-center gap-8 w-full">
            <div className="lg:w-2/4 h-full">
              <img className="h-full rounded-lg" src={profile} alt="" />
            </div>
            <div className="flex flex-col items-start lg:w-2/4 mt-6 lg:mt-0">
              <h2 className="lg:text-4xl text-3xl text-[#0CB0D8] font-bold ">
                Mehedi Hasan Foysal
              </h2>
              <p className=" text-sm">Web Developer</p>
              <div className="text-center lg:text-left w-full my-4">
                <p
                  //
                  className="text-left text-base text-gray-300 w-full "
                >
                  Hi I am a Full Stack developer And I can build your website as
                  you want.
                  <br />
                  <br />
                  Creative problem solver with demonstrated ability to work on
                  multiple projects simultaneously.Positive driven and confident
                  individual with an apt for learning new technology.{" "}
                </p>
              </div>
              <div className="mb-3">
                <h2 className="text-2xl font-semibold text-[#0CB0D8]">
                  Contact Information
                </h2>
                <div className="text-gray-300">
                  Email : mehedihasanfoysal22@gmail.com <br /> Phone : +88
                  01719064743 <br /> Address : Dhaka, Bangladesh
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between pr-0 lg:pr-36 mt-3">
                <div>
                  <h5 className="text-left mb-3 uppercase tracking-wide">
                    Find Me
                  </h5>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mehedihasan8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaGithub fontSize={20} />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mehedihasanfoysal8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaLinkedinIn fontSize={20} />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/mehedihasanfoysal8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaFacebook fontSize={20} />
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="text-left mb-3 uppercase tracking-wide">
                    Best skills
                  </h5>
                  <div className="flex gap-5">
                    <div
                      className="shadow-2xl bg-black text-blue-500 p-2 rounded-md
                    hover:bg-white"
                    >
                      <i className="fa-brands fa-react"></i>
                      <FaReact fontSize={20} />
                    </div>

                    <div
                      className="shadow-2xl bg-black text-white p-2 rounded-md
                    hover:bg-white hover:text-black"
                    >
                      <SiNextdotjs fontSize={20} />
                    </div>
                    <div
                      className="shadow-2xl bg-black text-yellow-500 p-2 rounded-md
                    hover:bg-white hover:text-black"
                    >
                      <FaJsSquare fontSize={20} />
                    </div>

                    <div
                      className="shadow-2xl bg-black text-green-500 p-2 rounded-md
                    hover:bg-white hover:text-green-500"
                    >
                      <FaNodeJs fontSize={20} />
                    </div>
                    <div
                      className="shadow-2xl bg-black text-blue-500 p-2 rounded-md
                    hover:bg-white hover:text-blue-500"
                    >
                      <SiMongodb fontSize={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:pl-28 pb-24 px-6">
            <h2 className="lg:text-[25px] text-[25px] text-[#0CB0D8] font-bold text-center pt-8 pb-4">
              Education
            </h2>
            <div className="flex gap-4">
              <MdCastForEducation className="mt-1" size={26} />
              <div>
                <h1>Running</h1>
                <p className="text-lg font-semibold mt-2">
                  CSE - University Of Scholars
                </p>
                <p className="text-[17px] font-medium mt-2">
                  Studying Computer Science and Engineering at University Of
                  Scholars
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <MdCastForEducation className="mt-1" size={26} />
              <div>
                <h1>2019 - 2021</h1>
                <p className="text-lg font-semibold mt-2">
                  HSC - Gazipur Mahanagar College (GMC)
                </p>
                <p className="text-[17px] font-medium mt-2">
                  Studied Higher Secondary School Certificate at Gazipur
                  Mahanagar College (GMC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
