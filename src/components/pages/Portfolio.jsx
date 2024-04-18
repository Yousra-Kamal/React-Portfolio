import githubIcon from "../../images/github.png";
import techBlog from "../../images/techBlog.jpg";
import workDay from "../../images/workDay.png";
import jsQuiz from "../../images/jsQuiz.jpg";
import dishDelight from "../../images/dishdelight.jpg";
import greenThumbs from "../../images/greenThumbs.png";
import website1 from "../../images/website1.jpg";

const projects = [
  {
    id: 1,
    title: "Green Thumbs - Team Project",
    href: "https://afternoon-shore-14413-3943e17402c9.herokuapp.com/",
    description:
      "A website to learn about gardening and talk to your fellow Australians for best gardening practice!.",
    imageUrl: greenThumbs,

    github: {
      href: "https://github.com/NuclearReid/Green-Thumbs",
      imageUrl: githubIcon,
    },
  },
  {
    id: 2,
    title: "My website - Next.js",
    href: "https://yousra.site/",
    description:
      "Welcome to my professional portfolio. This website was built with Next.js framework.  ",
    imageUrl: website1,

    github: {
      href: "https://github.com/Yousra-Kamal/my-website",
      imageUrl: githubIcon,
    },
  },
  {
    id: 3,
    title: "Work Day Scheduler",
    href: "https://work-day-scheduler-five.vercel.app/",
    description:
      "Work Day Scheduler helps you as an employee with a busy schedule to add important events to a daily planner so that you can manage your time effectively.",
    imageUrl: workDay,

    github: {
      href: "https://github.com/Yousra-Kamal/Work-Day-Scheduler",
      imageUrl: githubIcon,
    },
  },

  {
    id: 4,
    title: "JavaScript Quiz",
    href: "https://java-script-quiz-nu.vercel.app/",
    description:
      "This JavaScript timed quiz tests your knowledge of JavaScript fundamentals and stores your scores and  initials.",
    imageUrl: jsQuiz,

    github: {
      href: "https://github.com/Yousra-Kamal/JavaScript-Quiz",
      imageUrl: githubIcon,
    },
  },

  {
    id: 5,
    title: "Tech Blog",
    href: "https://whispering-forest-22574-8ad33503dc46.herokuapp.com/",
    description:
      "Tech Blog provides a content management system (CMS) to run a blog site. Users can log in to publish a post on the site and leave comments on posts.",
    imageUrl: techBlog,

    github: {
      href: "https://github.com/Yousra-Kamal/Tech-Blog",
      imageUrl: githubIcon,
    },
  },

  {
    id: 6,
    title: "Dish Delight - Team Project",
    href: "https://natpoulson.github.io/recipe-repository/",
    description:
      "Dish Delight is a simple single-page app (SPA) that can be used to query the Spoonacular API for various recipes to use, and also features TTS narration via VoiceRSS.",
    imageUrl: dishDelight,

    github: {
      href: "https://github.com/natpoulson/recipe-repository",
      imageUrl: githubIcon,
    },
  },

  // More projects...
];

export default function Portfolio() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold ">
            Portfolio
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt="Project image"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-4 text-lg text-center font-semibold leading-6 text-gray-900 group-hover:text-gray-600 underline underline-offset-1">
                    <a target="_blank" href={project.href}>
                      <span className="  absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <a target="_blank" href={project.github.href}>
                    <img
                      src={project.github.imageUrl}
                      alt="github icon"
                      className="h-10 w-10  rounded-full bg-gray-100"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
