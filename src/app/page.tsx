import Image from "next/image";

export default function HomePage() {
  const carreerPath = [
    {
      date: "09 - '13",
      postition: "Softwareentwickler & Teamleiter",
      company: "Mister Spex GmbH",
    },
    {
      date: "'13 - '15",
      postition: "Selbstständig - IT Beratung und Entwicklung",
      company: "JEP",
    },
    {
      date: "'15 - '18",
      postition: "IT Manager",
      company: "Buhlmann GmbH",
    },
    {
      date: "'15 - dato",
      postition: "Selbstständig - IT Beratung und Entwicklung",
      company: "JEP",
    },
  ];

  const skillSet = [
    {
      name: "Daily Usage",
      description: "",
      skills: [
        { icon: "", name: "Python", lastUsage: 2009 },
        { icon: "", name: "Java", lastUsage: 2009 },
        { icon: "", name: "C#", lastUsage: 2009 },
        { icon: "", name: "JavaScript", lastUsage: 2009 },
        { icon: "", name: "TypeScript", lastUsage: 2009 },
        { icon: "", name: "HTML", lastUsage: 2009 },
        { icon: "", name: "CSS", lastUsage: 2009 },
        { icon: "", name: "React", lastUsage: 2009 },
        { icon: "", name: "Next.js", lastUsage: 2009 },
        { icon: "", name: "TailwindCSS", lastUsage: 2009 },
        { icon: "", name: "AWS Lambda", lastUsage: 2009 },
      ],
    },
  ];

  return (
    <main className="page page-A4 relative">
      <div className="flex flex-row bg-[#262626] pb-6 pl-12 pr-6 pt-12 text-white">
        <div className="flex basis-1/4 items-center justify-center">
          <Image
            src="/johannes_eimer.png"
            width={160}
            height={160}
            alt="Portrait of Johannes Eimer"
          />
        </div>
        <div className="pl-12">
          <h1 className="text-4xl font-bold uppercase">Johannes Eimer</h1>
          <h2 className="uppercase text-gray-400">Software Engineer</h2>
          <div className="mt-3 flex flex-row text-xs text-white">
            <ul role="list" className="space-y-3 pr-6">
              <li className="group flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Johannes Eimer Production (JEP)
                <br />
                Kommodore-Johnsen-Boulevard 32,
                <br />
                DE-28217 Bremen
              </li>
              <li className="group flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                +49 (0)151 27 07 86 51
              </li>
              <li className="group flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                johannes.eimer@jep-dev.com
              </li>
            </ul>
            <ul role="list" className="space-y-3">
              <li className="group flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                  />
                </svg>
                14. Sep. 1988, DE-Weiden i. d. Opf
              </li>
              <li className="group flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
                Englisch, Deutsch
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute right-12 top-6">
          <Image
            src="/JEP_green_128.webp"
            width={110}
            height={110}
            alt="Portrait of Johannes Eimer"
          />
        </div>
      </div>
      <div className="mx-6 my-6 flex flex-row text-sm">
        <div className="basis-3/4">
          {skillSet.map((item, index) => (
            <div key={index}>
              <h2 className="decoration-jep-green text-lg font-bold underline">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
        <div>
          <h2 className="decoration-jep-green text-lg font-bold underline">
            Career Path
          </h2>
          <div className="mt-3 flex flex-row">
            <ul role="list" className="space-y-3">
              {carreerPath.map((item, index) => (
                <li className="grid grid-cols-9" key={index}>
                  <div className="col-span-2">{item.date}</div>
                  <div className="col-span-7">
                    <span className="font-bold">{item.postition}</span>
                    <br />
                    {item.company}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-3 left-3 text-xs">
        Document created with: Next, TS, Tailwind, Python, AWS Lambda
      </footer>
    </main>
  );
}
