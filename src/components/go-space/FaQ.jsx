import React from "react";
import clsx from "clsx";
import { TextGradientYellowPurple } from "@/utils/ReueseClass";

const faqData = [
  {
    question: "How do I create an account?",
    answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: "I forgot my password. What should I do?",
    answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
];

export const FaQ = ({ fontCustom }) => {
  return (
    <section className="flex flex-col mx-7 pb-12">
      <div className={clsx(TextGradientYellowPurple, "text-center text-4xl font-bold mb-10")}>
        <h1>FAQ?</h1>
      </div>

      <div className="flex flex-col gap-3" >
        {faqData.map((item, idx) => (
          <div key={idx} className="collapse collapse-arrow shadow-2xl bg-gradient-to-r from-[#252525] to-[#6b1e9c]">
            <input type="radio" name="my-accordion-2" defaultChecked={idx === 0} />
            <div className="collapse-title font-semibold text-white">{item.question}</div>
            <div className="collapse-content text-sm text-white/90">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
