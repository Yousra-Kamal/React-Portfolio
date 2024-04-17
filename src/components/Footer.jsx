//Footer component of the website that contains social media links and the copy right text
const navigation = {
  social: [
    // github, linkedin, hashnode icons
    {
      name: "GitHub",
      href: "https://github.com/Yousra-Kamal",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yousra-kamal-4815a1303/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM8.75 18.25H6.5v-8h2.25v8zM7.625 8.875h-.017c-.747 0-1.2-.516-1.2-1.157 0-.655.457-1.156 1.167-1.156.714 0 1.201.501 1.218 1.156 0 .641-.5 1.157-1.168 1.157zm10.625 9.375h-2.25v-4.719c0-1.123-.402-1.891-1.4-1.891-.764 0-1.218.51-1.418 1.012-.077.193-.097.464-.097.737v4.861H10.5v-8h2.225v1.297c.3-.475.81-1.161 1.963-1.161 1.434 0 2.515.94 2.515 2.953v5.91z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "Hashnode",
      href: "https://yousraa.hashnode.dev/",

      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M3.523 9.477h2.157v4.95l-1.58.658v.932l1.606.672v.928l-2.006-.838c-.437-.183-.437-.183-.437-.446V9.476h.25zm5.574 0c1.29 0 1.96.67 1.96 1.921 0 .784-.37 1.232-1.019 1.483.797.166 1.568.715 1.568 1.868 0 1.385-1.053 2.127-2.59 2.127h-2.656V9.476h2.737zm.25 5.155c.217-.065.419-.216.54-.406.121-.19.194-.426.194-.692 0-.837-.62-1.283-1.298-1.283-.824 0-1.368.625-1.368 1.318 0 .666.389 1.116 1.128 1.181zm8.97-5.395h-1.853v2.994c0 .416.193.56.626.56h.804v1.605l-1.646.675v.927l1.674.697v1.507h-2.06V9.477h-1.799V8.386l2.62-1.05v2.294zm-3.382-1.05l2.58 1.05v7.2l-2.58-1.066zm-3.207 0v7.2l-2.578-1.066v-7.2zm-7.84 2.427l2.58 1.05v3.12l-2.58-1.05zm0 6.748l2.58-1.05v-3.12l-2.58 1.05z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};


function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10 ">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only ">{item.name}</span>
              <item.icon className="h-12 w-20" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center   leading-5 text-gray-500">
          &copy; 2024 Yousra Kamal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
