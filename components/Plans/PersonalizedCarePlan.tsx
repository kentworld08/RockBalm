const PersonalizedCarePlan = () => {
  return (
    <section className="bg-[#F9F9F9] flex justify-center items-center p-[84.5px] flex-col gap-[60px] w-full">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px] md:w-lg">
          Ready to Start Your Personalized Care Plan?
        </h1>
        <p className="w-xs md:w-sm text-center justify-self-center">
          Our team is here to help you choose the best care plan for your loved
          ones needs.
        </p>
        <button className="btn bg-secondary rounded-full border-secondary mt-4">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default PersonalizedCarePlan;
