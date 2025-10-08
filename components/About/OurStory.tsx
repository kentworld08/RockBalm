import Image from "next/image";

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-[146px] md:gap-[229px] justify-between py-[82px] w-full p-6 gap-7">
      <div className="md:w-[602px] text-left text-primary">
        <h1 className="font-alfa-slab font-normal md:text-[39px]">Our Story</h1>
        <p className="font-inter md:text">
          Our journey began with a simple observation: too many seniors in
          Nigeria face barriers to consistent, quality healthcare. From long
          queues at hospitals to difficulty traveling for routine care, the
          system wasn’t built with their needs in mind. <br />
          <br />
          Rockbalm Health was created to change that. We set out to bring care
          closer to where it matters most home so that seniors and their
          caregivers can spend less time worrying about logistics and more time
          focusing on health and quality of life.
        </p>
      </div>
      <figure className="rounded-xl">
        <Image
          src="/default-img.png"
          alt="Our story"
          height={456}
          width={548}
          className="object-contain rounded-xl"
        />
      </figure>
    </div>
  );
};

export default OurStory;
