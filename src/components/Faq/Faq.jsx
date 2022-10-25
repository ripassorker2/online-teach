import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100 w-4/5 m-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl pb-6">
            Frequently Asked Questions !!
          </h2>
          <div className="space-y-4">
            <details className="w-full border border-black rounded-lg" open="">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                1 . What is online teaching?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                Online teaching is a field of teaching that has increased even
                more as the pandemic has taken over the world. <br />
                In fact, besides being in our lives for a long time, it has
                increased with the pandemic. <br />
                It can be defined as receiving training through devices such as
                computers, phones or tablets.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg" open="">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                2 . What are the differences between face-to-face vs. online
                teaching?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                In terms of students' performance, there is not much difference
                between online education and face-to-face education. In some
                cases, it has been observed that students in online teaching are
                more active and relevant to the lesson. <br />
                However, in general, the most well-known difference between
                online teaching and face-to-face education is that one is in the
                classroom environment and the other is where you want it.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg" open="">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                3 . When does the course start and finish?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                The course starts now and never ends! It is a completely
                self-paced online course. You decide when you start and when you
                finish.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                4 . How long do I have access to the course?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                How does lifetime access sound? After enrolling, you have
                unlimited access to this course for as long as you like, across
                any and all devices you own.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                5 . What if I am unhappy with the course?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                We would never want you to be unhappy! If you are unsatisfied
                with your purchase, contact us in the first 30 days and we will
                give you a full refund.
              </p>
            </details>
            <details className="w-full border border-black rounded-lg">
              <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
                6 . This amout isn't a lot for a course. Will it be worth the
                money?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg dark:text-gray-400">
                Absolutely. We price our online courses reasonably on purpose,
                making them affordable even if you're buying out of pocket
                without reimbursement. Then, we pack them full of resources so
                you'll be fully equipped -- in the same way you'd find in
                courses that cost hundreds of dollars.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
