const Exprience = () => {
  const frontendSkills = [
    {
      skill: "Html",
      percentage: 95,
    },
    {
      skill: "Css",
      percentage: 65,
    },
    {
      skill: "Material-UI",
      percentage: 65,
    },
    {
      skill: "Ant-Design",
      percentage: 65,
    },
    {
      skill: "TypeScript",
      percentage: 75,
    },
    {
      skill: "Javascript",
      percentage: 75,
    },
    {
      skill: "React",
      percentage: 65,
    },
    {
      skill: "Next Js",
      percentage: 75,
    },
  ];

  const backendSkills = [
    {
      skill: "Node Js",
      percentage: 95,
    },
    {
      skill: "Express",
      percentage: 65,
    },
    {
      skill: "Mongoose",
      percentage: 75,
    },
    {
      skill: "PostgreSQL",
      percentage: 65,
    },
    {
      skill: "Prisma",
      percentage: 75,
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
          <p className="py-2">These are the technologies I've worked with</p>

          <div className="flex justify-between gap-10 pt-10 flex-col md:flex-row">
            <div className="w-full md:w-2/4">
              <h1
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                className="text-2xl pb-3 font-semibold"
              >
                Front-End Skill
              </h1>
              {frontendSkills?.map((skill, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1500"
                  key={i}
                >
                  <div className="flex items-center justify-between">
                    <h1>{skill?.skill}</h1>
                    <h1>{skill?.percentage}%</h1>
                  </div>
                  <progress
                    className="progress progress-primary"
                    value={skill?.percentage}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/4">
              <h1
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                className="text-2xl pb-3 font-semibold"
              >
                Back-End Skill
              </h1>

              {backendSkills?.map((skill, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1500"
                  key={i}
                >
                  <div className="flex items-center justify-between">
                    <h1>{skill?.skill}</h1>
                    <h1>{skill?.percentage}%</h1>
                  </div>
                  <progress
                    className="progress progress-primary"
                    value={skill?.percentage}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
