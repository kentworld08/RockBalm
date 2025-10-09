const PregnancyLastPeriodCalculator = () => {
  const data = true;

  return (
    <div className="bg-white">
      <div className="text-primary flex justify-center items-center text-center flex-col pt-[124px] p-6">
        <h1 className="font-normal font-alfa-slab md:text-[40px]">
          Pregnancy Last Period Calculator
        </h1>
        <p className="md:w-[800px]">
          The Pregnancy Last Period Calculator estimates your pregnancy timeline
          based on the date of your last menstrual period (LMP). This tool
          provides key milestones, including your expected due date, helping you
          track your pregnancy progress and prepare for each stage.
        </p>
      </div>

      <div className="bg-[#F8F8F8] p-6 md:p-[84px] w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* === Form === */}
          <div className="md:w-1/2 p-5 bg-white rounded-xl flex flex-col justify-between">
            <form action="" className="text-black flex flex-col gap-6 h-full">
              <div>
                <label htmlFor="averageCycle" className="block">
                  When was the first day of your last period?
                </label>
                <select
                  name="averageCycle"
                  id="gender"
                  className="w-full mt-2 border-[#EDE8FF] border-[1px] py-[15px] text-black px-4 rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#A3A3A3]">
                    Due date
                  </option>
                  <option value="male">2 days</option>
                  <option value="female">3 days</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block">
                  Cycle length in days
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full border-[#EDE8FF] border-[1px] py-[15px] text-black px-4 rounded-lg mt-2"
                  placeholder="MM/DD/YY"
                />
              </div>

              <div>
                <input type="checkbox" id="send" name="send" className="mr-2" />
                <label htmlFor="send">Send result to my email</label>
              </div>
              <button className="btn bg-secondary border-secondary w-full rounded-full text-white">
                Calculate
              </button>
            </form>
          </div>

          <aside className="md:w-1/2 bg-white rounded-xl flex items-center justify-center p-6 flex-col">
            {data ? (
              <div>
                <div className="text-[#041827] justify-self-center">
                  🌸 Your Result 🌸
                </div>
                <div className="flex mt-3.5 items-center justify-center gap-4 w-full flex-col">
                  <div className="flex justify-between p-4 items-center text-black md:gap-7 bg-blue-100 rounded-lg text-sm w-full">
                    <p>You are approximately</p>
                    <p>4 weeks pregnant</p>
                  </div>

                  <div className="flex justify-between p-4 items-center text-black md:gap-7 bg-pink-100 rounded-lg text-sm w-full">
                    <p>Your estimated due date is</p>
                    <p className="text-right">25 May 2025</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-2 items-center justify-center">
                  <button className="btn border-secondary bg-secondary  text-white">
                    Recheck
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-[#0000004D]/30">
                Your BMI result will show here
              </p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PregnancyLastPeriodCalculator;
