import Image from "next/image";

const PartnerGeriatricHealth = () => {
  return (
    <div className="text-primary p-6">
      <h1 className="md:text-4xl font-alfa-slab mb-2.5 md:w-[415px] justify-self-center">
        Your Partner in Geriatric Health Because Every Stage of Life Matters.
      </h1>
      <p className="font-inter font-medium md:text-[18px] md:w-[625px]">
        At Rockbalm Health, we believe aging should be dignified, supported, and
        well-managed. That’s why we’ve built a one-stop platform where seniors
        and their caregivers can access personalized care plans, home-visit
        consultations, health products, and wellness tools all from the comfort
        of their homes.
      </p>
      <button className="bg-secondary text-white btn border-secondary md:text-[14px] font-inter mt-9 rounded-full">
        Explore Our Plans
      </button>

      <figure className="mt-6 w-screen relative left-1/2 right-1/2 -mx-[50vw] justify-center flex">
        <Image
          src="/about-bg.jpg"
          alt="GeriatricCarePlans"
          width={1160}
          height={600}
          className="h-auto object-cover rounded-lg"
        />
      </figure>
    </div>
  );
};

export default PartnerGeriatricHealth;
