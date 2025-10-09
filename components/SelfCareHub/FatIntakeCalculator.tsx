const FatIntakeCalculator = () => {
  const data = false;

  return (
    <div className="bg-white overflow-hidden">
      <div className="text-primary flex justify-center items-center text-center flex-col pt-[124px] p-6">
        <h1 className="font-normal font-alfa-slab md:text-[40px]">
          Fat Intake Calculator
        </h1>
        <p className="md:w-[800px]">
          The Fat Intake Calculator helps you determine the optimal amount of
          fat you should consume daily based on your overall calorie intake and
          dietary goals.
        </p>
      </div>

      <div className="bg-[#F8F8F8] p-6 md:p-[84px] w-full">
        <div className="flex flex-col justify-center items-center gap-8">
          {data ? (
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
                    Activity
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
                    <option value="Sedentary">
                      Sedentary: little or no exercise
                    </option>
                    <option value="Light">
                      Light: exercise 1-3 times/week
                    </option>
                    <option value="Moderate">
                      Moderate: exercise 4-5 times/week
                    </option>
                    <option value="Active">
                      Active: daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value="VeryActive">
                      Very Active: intense exercise 6-7 times/week
                    </option>
                    <option value="ExtraActive">
                      Extra Active: very intense exercise daily, or physical job
                    </option>
                  </select>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="send"
                    name="send"
                    className="mr-2"
                  />
                  <label htmlFor="send">Send result to my email</label>
                </div>

                <button className="btn bg-secondary border-secondary w-full rounded-full text-white">
                  Calculate
                </button>
              </form>
            </div>
          ) : (
            <div className="w-full overflow-x-auto md:overflow-hidden bg-white rounded-xl shadow-sm p-4">
              <h1 className="text-black">Result</h1>
              <hr className="my-4" />
              <table className="min-w-full border-collapse text-sm md:text-base text-left text-black">
                <thead>
                  <tr className="bg-white text-black text-sm text-">
                    <th className="py-3 px-4 rounded-tl">Goal</th>
                    <th className="py-3 px-4">Daily Calorie Allowance</th>
                    <th className="py-3 px-4">Daily Fat Allowance (20-35%)*</th>
                    <th className="py-3 px-4">
                      Saturated Fat Allowance (10%)*
                    </th>
                    <th className="py-3 px-4 rounded-tr-xl">
                      Saturated Fat Allowance to Help Reduce Heart Disease (7%)*
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Row 1 */}
                  <tr className="bg-[#E0E0E0] border-[1px] border-[#E0E0E0]">
                    <td className="py-3 px-4">Weight Maintenance</td>
                    <td className="py-3 px-4">1,926 Calories</td>
                    <td className="py-3 px-4">44 - 77 grams</td>
                    <td className="py-3 px-4">&lt;22 grams</td>
                    <td className="py-3 px-4">&lt;15 grams</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="bg-white">
                    <td className="py-3 px-4">Lose 0.5 kg/week</td>
                    <td className="py-3 px-4">1,426 Calories</td>
                    <td className="py-3 px-4">32 - 57 grams</td>
                    <td className="py-3 px-4">&lt;22 grams</td>
                    <td className="py-3 px-4">&lt;15 grams</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="bg-[#E0E0E0] border-[1px] border-[#E0E0E0]">
                    <td className="py-3 px-4">Lose 1 kg/week</td>
                    <td className="py-3 px-4">926 Calories</td>
                    <td className="py-3 px-4">21 - 37 grams</td>
                    <td className="py-3 px-4">&lt;22 grams</td>
                    <td className="py-3 px-4">&lt;15 grams</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="bg-white">
                    <td className="py-3 px-4">Gain 0.5 kg/week</td>
                    <td className="py-3 px-4">2,426 Calories</td>
                    <td className="py-3 px-4">55 - 96 grams</td>
                    <td className="py-3 px-4">&lt;22 grams</td>
                    <td className="py-3 px-4">&lt;15 grams</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="bg-[#E0E0E0] border-[1px] border-[#E0E0E0]">
                    <td className="py-3 px-4">Gain 1 kg/week</td>
                    <td className="py-3 px-4">2,926 Calories</td>
                    <td className="py-3 px-4">67 - 116 grams</td>
                    <td className="py-3 px-4">&lt;22 grams</td>
                    <td className="py-3 px-4">&lt;15 grams</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-black mt-6">
                Note that the percentages provided reflect percentages of total
                daily caloric intake
              </p>
              <div className="flex gap-2 mt-6">
                <button className="btn border-black text-black bg-transparent">
                  Recalculate BMI
                </button>
                <button className="btn border-secondary text-secondary bg-transparent">
                  Recalculate BMI
                </button>
                <button className="btn border-secondary text-white bg-secondary">
                  Recalculate BMI
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FatIntakeCalculator;
