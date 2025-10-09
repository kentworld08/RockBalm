import Image from "next/image";

const SelfCare = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white text-primary justify-center items-center p-6 md:p-[125px] md:gap-[144px] gap-10 ">
      <div className="mt-20">
        <h1 className="font-normal font-alfa-slab md:text-[46px] ">
          Self Care Hub
        </h1>
        <p className="font-inter font-medium md:text-[22px]">
          Access professional medical calculators to assess health metrics and
          risks. Our tools help healthcare providers make informed decisions
          quickly.
        </p>
      </div>
      <figure>
        <Image
          src={"/selfcarehub.jpg"}
          alt="Self care hub"
          height={693}
          width={917}
          className="rounded-lg"
        />
      </figure>
    </div>
  );
};

export default SelfCare;
