import greenThumbs from "./images/greenThumbs.png";
import website1 from "./images/website1.jpg";
import workDay from "./images/workDay.png";
import jsQuiz from "./images/jsQuiz.jpg";
import techBlog from "./images/techBlog.jpg";
import dishDelight from "./images/dishdelight.jpg";
import githubIcon from "./images/github.png";

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
    title: "My website - Team Project",
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

export default projects;
