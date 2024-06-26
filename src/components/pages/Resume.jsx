// Resume page component

import { PaperClipIcon } from "@heroicons/react/20/solid";
import myResume from "../../pdf/Yousas CV.pdf";

export default function Resume() {
  return (
    <>
      <div>
        {/* Technical Skills */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-center mb-20">
            Resumé
          </h1>
          <h2 className="text-2xl font-medium text-amber-900">
            Technical Skills
          </h2>
          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200   ">
            <div className=" lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <div className="text-medium   text-gray-900">
                    HTML - CSS - Javascript - JQuery - Bootstrap - Tailwind css
                    - React - Next.js
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="text-lg  font-medium text-gray-900">Front-End</p>
              </div>
            </div>
            <div className=" lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="mt-4   xl:col-span-2 xl:mt-0">
                  <div className="text-medium   text-gray-900">
                    Node - Express - MySQL - Sequelize - MongoDB - Mongoose -
                    {/*   eslint-disable-next-line react/no-unescaped-entities */}
                    GraphQL - API's
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="text-lg  font-medium text-gray-900">Back-End</p>
              </div>
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="mx-auto max-w-2xl px-4   lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-medium text-amber-900">
            Work Experience
          </h2>
          <div className="mt-3 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            <div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-lg  font-medium text-gray-900">
                  Clinical Pharmacist
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-medium  font-medium  text-gray-900">
                  Dar As Salama Medical Hospital (02/2016 - 07/2022)
                </p>
              </div>
              <ul className="text-medium  pt-4 text-gray-900">
                <li>• Reviewing prescriptions.</li>
                <li>
                  • Compounding and dispensing for long term care patients and
                  acute admissions.
                </li>
                <li>• Supplying to hospital stations and crash carts. </li>
                <li>• Ward rounds and medical record documentation.</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            <div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-medium  font-medium  text-gray-900">
                  Khartoum Teaching Hospital (10/2013 - 01/2014)
                </p>
              </div>
              <ul className="text-medium  pt-4 text-gray-900">
                <li>• Medication Assessments and management .</li>
                <li>• Dispensing for acute admissions.</li>
                <li>• Supplying to hospital stations and crash carts. </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-medium text-amber-900">Education</h2>
          <div className="mt-3 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            <div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-lg  font-medium text-gray-900">
                  - Coding Bootcamp Certificate of Completion (05/2024)
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-medium    text-gray-900">
                  The Coding Boot Camp at the University of Sydney
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-lg  font-medium text-gray-900">
                  - Bachelor of Clinical pharmacy (06/2013)
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm">
                <p className="text-medium    text-gray-900">
                  Khartoum College of Medical Sciences, Sudan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Resume  Attachments */}
        <div className="mx-auto max-w-2xl px-4  lg:max-w-7xl lg:px-8">
          <dt className="text-sm pb-4 font-medium leading-6 text-gray-900">
            Attachments
          </dt>
          <dd className="mt-2 text-sm bg-amber-100 text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              className="divide-y divide-gray-100 rounded-md border border-gray-200"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                      Download Full Resume
                    </span>
                    <span className="flex-shrink-0 text-gray-400">173 KB</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={myResume}
                    download={myResume}
                    className="font-medium text-sky-700 hover:text-sky-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </div>
    </>
  );
}
