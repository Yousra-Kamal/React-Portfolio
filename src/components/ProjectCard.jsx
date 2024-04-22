// Code to display a single project card

/* eslint-disable react/prop-types */
export default function Portfolio({ project }) {
 /*  console.log(project); */
     
  return (
    <article className="flex flex-col items-start justify-between">
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
  );
}
