const Calorie = () => {
  const data = true;

  return (
    <div className="bg-white">
      <div className="text-primary flex justify-center items-center text-center flex-col pt-[124px] p-6">
        <h1 className="font-normal font-alfa-slab md:text-[40px]">Calorie</h1>
        <p className="md:w-[800px]">
          Our Calorie Checker helps you keep track of your daily calorie intake
          by providing personalized recommendations based on your age, gender,
          weight, height, and activity level.
        </p>
      </div>

      <div className="bg-[#F8F8F8] p-6 md:p-[84px] w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* === Form === */}
          <div className="md:w-1/2 p-5 bg-white rounded-xl flex flex-col justify-between">
            <form action="" className="text-black flex flex-col gap-6 h-full">
              <div>
                <label htmlFor="gender" className="block">
                  Select Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="w-full mt-2 border-[#EDE8FF] border-[1px] py-[15px] text-black px-4 rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#A3A3A3]">
                    Choose your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="age" className="block">
                  What is your age
                </label>
                <input
                  id="age"
                  className="w-full border-[#EDE8FF] border-[1px] py-[15px] text-black px-4 rounded-lg mt-2"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label htmlFor="height" className="block">
                  What is your height?
                </label>
                <div className="flex items-center border-[#EDE8FF] border-[1px] pr-2 mt-2 rounded-lg">
                  <input
                    id="height"
                    className="w-full py-[15px] text-black px-4 rounded-lg"
                    placeholder="Enter your height"
                  />
                  <p className="text-[#A3A3A3]">CM</p>
                </div>
              </div>

              <div>
                <label htmlFor="weight" className="block">
                  What is your weight?
                </label>
                <div className="flex items-center border-[#EDE8FF] border-[1px] pr-2 mt-2 rounded-lg">
                  <input
                    id="weight"
                    className="w-full py-[15px] text-black px-4 rounded-lg"
                    placeholder="Enter your weight"
                  />
                  <p className="text-[#A3A3A3]">KG</p>
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="block">
                  Your activity level
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="w-full mt-2 border-[#EDE8FF] border-[1px] py-[15px] text-black px-4 rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#A3A3A3]">
                    Select activity level
                  </option>
                  <option value="Basic">Basic metabolic rate (BMR)</option>
                  <option value="sedentary">
                    sedentary (little or no exercise)
                  </option>
                  <option value="light">
                    light (exercise 1-3 times/ week)
                  </option>
                  <option value="extra">
                    extra active (very intense exercise)
                  </option>
                </select>
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
                    <p>Day of ovulation</p>
                    <p>High fertile rate</p>
                    <p>August 31st 2024</p>
                  </div>
                  <div className="flex justify-between p-4 items-center text-black md:gap-7 bg-yellow-100 rounded-lg text-sm w-full">
                    <p>Fertile window</p>
                    <p>Fertility days</p>
                    <p className="text-right">
                      August 26th 2024 - September 4th 2024
                    </p>
                  </div>
                  <div className="flex justify-between p-4 items-center text-black md:gap-7 bg-pink-100 rounded-lg text-sm w-full">
                    <p>Next period date</p>
                    <p>Low chance of pregnant</p>
                    <p>September 12th 2024</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center items-center text-center flex-col">
                  <p className="text-center text-black">
                    Loosing weight of 1kg or more per week requires consumption
                    of less than 1500 calories per day, if you need to speak to
                    a professional for guidance
                  </p>

                  <div className="mt-6 flex flex-col md:flex-row gap-2">
                    <button className="btn border-black bg-transparent text-black rounded-full">
                      Recalculate BMI
                    </button>

                    <button className="btn border-secondary bg-secondary  text-white rounded-full">
                      Recalculate BMI
                    </button>
                  </div>
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

export default Calorie;
