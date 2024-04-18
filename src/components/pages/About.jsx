import yousra from "../../images/yousra.jpg";
import pills from "../../images/pills.jpg";
import computer from "../../images/computer.jpg";
import coding from "../../images/coding.jpg";

export default function About() {
  return (
    <div className=" ">
      <main className="isolate">
        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About me
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Hello! I am Yousra, a clinical pharmacist and a software
                  developer in the making.  
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                My previous employment was for nearly
                  seven yeasrs at Dar As Salama Medical Hospital as a clinical pharmacist,
                  where I gained experience in patient care, medication
                  management, and customer service. <br /> <br />
                  I am a driven and self-motivated individual with a passion for
                  technology and a desire to make a positive impact through my
                  work. I am currently studying to become a software developer. I am
                  always looking for new opportunities to learn and grow. I am
                  excited to see where my career will take me next.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src={yousra}
                    alt="my picture"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src={coding}
                      alt="picture of a code in a computer"
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src={computer}
                      alt="picture of a computer"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src={pills}
                      alt="picture of pills"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
