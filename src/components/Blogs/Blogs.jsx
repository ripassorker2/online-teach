import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 w-4/5 m-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-6">
            Some basic quistion !!
          </h2>
          <div className="space-y-4">
            <details className="w-full border border-black rounded-lg" open="">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                1 . what is cors?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                CORS (Cross-Origin Resource Sharing) is a system, consisting of
                transmitting HTTP headers, that determines whether browsers
                block frontend JavaScript code from accessing responses for
                cross-origin requests. The same-origin security policy forbids
                cross-origin access to resources. But CORS gives web servers the
                ability to say they want to opt into allowing cross-origin
                access to their resources.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                2 . Why are you using firebase? What other options do you have
                to implement authentication?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                Firebase helps you develop high-quality apps, grow your user
                base, and earn more money. Each feature works independently, and
                they work even better together. <br />
                Usually, authentication by a server entails the use of a user
                name and password. Other ways to authenticate can be through
                cards, retina scans, voice recognition, and fingerprints.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                3 . How does the private route work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                4 . What is Node? How does Node work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications. <br />
                NOde is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
