import Image from "next/image";

const GeriatricCarePlans = () => {
  return (
    <div className="text-primary">
      <h1 className="md:text-4xl font-alfa-slab mb-2.5 md:w-[415px] justify-self-center">
        Personalized Geriatric Care Plans
      </h1>
      <p className="font-inter font-medium md:text-[18px] md:w-[625px]">
        Comprehensive care plans designed specifically for elderly patients,
        with ongoing support and monitoring to ensure the best quality of life.
      </p>
      <button className="bg-secondary text-white btn border-secondary md:text-[14px] font-inter mt-9 rounded-full">
        Explore Our Plans
      </button>

      <figure className="mt-6 w-screen relative left-1/2 right-1/2 -mx-[50vw] justify-center flex">
        <Image
          src="/GeriatricCarePlans.png"
          alt="GeriatricCarePlans"
          width={1160}
          height={600}
          className="h-auto object-cover rounded-lg"
        />
      </figure>
    </div>
  );
};

export default GeriatricCarePlans;
