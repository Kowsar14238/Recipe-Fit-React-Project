import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen my-5 rounded-3xl" style={{
        backgroundImage: "url(https://i.ibb.co/k6hZmg7/banner.jpg)",
      }}>
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[60%]">
          <h1 className="mb-5 md:text-4xl sm:text-2xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5">Discover a world of culinary delights with our handpicked cooking classes, designed to suit every palate and skill level. From beginner basics to advanced techniques, embark on a flavorful journey and unleash your inner chef!</p>

          
          <div className="flex justify-center items-center gap-3">
            <button className="btn btn-success bg-[#0BE58A]">Explore Now</button>
            <button className="btn btn-outline">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
