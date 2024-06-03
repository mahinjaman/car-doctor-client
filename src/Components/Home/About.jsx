import React from "react";
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-20 p-5 lg-p-0">
      <div className="relative flex flex-col justify-center">
        <img className="w-3/4 rounded-md" src={person} alt="" />
        <img className="absolute w-2/5 right-20 bottom-0 border-8 border-white rounded-md" src={parts} alt="" />
      </div>
      <div>
        <div className="lg:w-2/3 space-y-5">
          <h4 className="font-semibold text-orange-500">About Us</h4>
          <h1 className="font-bold text-5xl ">
            We are qualified & of experience in this field
          </h1>
        </div>

        <div className="space-y-5 my-5 text-lg text-gray-500">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div>
          <button className="py-2 px-5 text-lg text-white font-semibold tracking-wide border border-orange-500 bg-orange-500 rounded-md">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
