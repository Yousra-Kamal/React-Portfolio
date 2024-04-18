import emailIcon from "../../images/email.jpg";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set the state based on the input type
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the email
    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }
    // if any of the fields are empty, return an alert
    if (!Name) {
      alert("Field is Required");
      return;
    }
    if (!message) {
      alert("Field is Required");
      return;
    }

    // If the form is valid, display a success message
    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      // Clear the form
      setName("");
      setMessage("");
      setEmail("");

      return;
    }
  };

  return (
    <>
   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact Me
          </h2>
          <a href="mailto:nice.sora@hotmail.com">
            <img
              className="mt-5 mx-auto h-10 w-auto"
              src={emailIcon}
              alt="Your Company"
            />
          </a>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/*   Name input */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={Name}
                  name="Name"
                  type="text"
                  onChange={handleInputChange}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/*  Message input */}
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Add your Message
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  value={message}
                  name="message"
                  type="message"
                  onChange={handleInputChange}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div>
              {/*  Submit button */}
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Submit
              </button>
            </div>
          </form>
          {successMessage && (
            <div>
              <p className="success-text">{successMessage}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
