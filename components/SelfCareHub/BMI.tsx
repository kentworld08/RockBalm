const BMI = () => {
  const data = true;

  return (
    <div className="bg-white">
      <div className="text-primary flex justify-center items-center text-center flex-col pt-[124px] p-6">
        <h1 className="font-normal font-alfa-slab md:text-[40px]">
          Body Mass Index (BMI)
        </h1>
        <p className="md:w-[800px]">
          Knowing BMI can help adult men and women understand their overall
          health. Use the BMI calculator below to determine your body mass index
          by inputting your height and weight.
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
                <div className="flex mt-3.5 items-center justify-center">
                  <div>
                    <div className="bg-[#FFDF6D] md:w-[100px] h-[55px] rounded-l-full w-full" />
                    <p className="text-black text-left">Underweight</p>
                  </div>
                  <div>
                    <div className="bg-[#39D477] md:w-[100px] h-[55px] w-full" />
                    <p className="text-black text-center">Normal</p>
                  </div>
                  <div>
                    <div className="bg-[#EC9E28] md:w-[100px] h-[55px] w-full" />
                    <p className="text-black text-center">Overweight</p>
                  </div>
                  <div>
                    <div className="bg-[#E53118] md:w-[100px] h-[55px] rounded-r-full w-full" />
                    <p className="text-black text-right">Obesity</p>
                  </div>
                </div>
                <div className="flex justify-center items-center text-center text-black my-6 flex-col gap-6">
                  <h1>Your BMI is</h1>

                  <div className="w-[147px] h-[147px] border-[10px] border-secondary rounded-full bg-white flex justify-center items-center">
                    <div className="w-[100px] h-[100px] rounded-full bg-secondary flex justify-center items-center text-white text-center">
                      <p>20kg/m2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#041827]">What next?</h1>
                  <p className="text-[#606060]">
                    If you wish to loose, gain or maintain weight, we can help
                    you find medications to achieve either of your goals
                  </p>
                </div>
                <div className="mt-6 flex flex-col md:flex-row gap-2">
                  <button className="btn border-black bg-transparent text-black rounded-full">
                    Recalculate BMI
                  </button>
                  <button className="btn border-secondary bg-transparent text-secondary rounded-full">
                    Recalculate BMI
                  </button>
                  <button className="btn border-secondary bg-secondary  text-white rounded-full">
                    Recalculate BMI
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

export default BMI;
