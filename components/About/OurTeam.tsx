import { BiHealth } from "react-icons/bi";

const OurTeam = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="text-primary p-6 bg-white w-full text-center items-center justify-center flex flex-col md:p-[84.5px]">
      <h1 className="font-alfa-slab font-normal md:text-4xl md:w-[450px]">
        Meet Our Team
      </h1>
      <p className="md:w-[806px] font-inter md:text-[22px] font-medium mt-4">
        Our team is made up of passionate healthcare professionals and
        innovators committed to improving elder care. Together, we bring years
        of experience in medicine, pharmacy, nutrition, physiotherapy, and
        health technology.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {data.map((item) => (
          <div
            key={item}
            className="card w-[22rem] md:w-80 text-left text-[#041827] bg-[#C5E5FF] h-80"
          ></div>
        ))}
      </div>
    </div>
  );
};
export default OurTeam;
