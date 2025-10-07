import Image from "next/image";

const BlogTips = () => {
  return (
    <div className="text-primary flex flex-col items-center px-4 md:px-0 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-alfa-slab mb-2.5 md:w-[415px] md:justify-self-center text-center">
        Blog
      </h1>
      <p className="font-inter font-medium text-base md:text-[18px] md:w-[325px] md:justify-self-center">
        Tips, insights, and expert advice to help seniors live healthier, fuller
        lives.
      </p>
      <button className="bg-secondary text-white btn border-secondary text-[14px] font-inter mt-9 rounded-full">
        Explore Our Plans
      </button>

      <figure className="mt-6 w-full flex justify-center">
        <Image
          src="/Blogbg.jpg"
          alt="Blog bg image"
          width={1160}
          height={600}
          className="w-full md:w-[1140px] h-auto object-cover rounded-lg"
        />
      </figure>
    </div>
  );
};

export default BlogTips;
