import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <div className="text-[#034F81]">
        <h1 className="font-inter font-bold md:text-[28px]">Sign up</h1>
        <p className="text-sm">
          Create an account to start your journey to better senior care.
        </p>
      </div>
      <form action="">
        <div className="mt-2">
          <label htmlFor="firstname" className="text-[#034F81]">
            First Name
          </label>
          <input
            type="firstname"
            id="firstname"
            name="firstname"
            placeholder="what is your first name"
            className="placeholder:text-[#040D0F] text-black border-[1px] border-[#EDE8FF] block w-full py-[10px] px-[18px] placeholder:text-sm"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="lastname" className="text-[#034F81]">
            Last Name
          </label>
          <input
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            className="placeholder:text-[#040D0F] border-[1px] border-[#EDE8FF] text-black block w-full py-[10px] px-[18px] placeholder:text-sm"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="tel" className="text-[#034F81]">
            Phone Number
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="What is your phone number"
            className="placeholder:text-[#040D0F] border-[1px] border-[#EDE8FF] text-black block w-full py-[10px] px-[18px] placeholder:text-sm"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="text-[#034F81]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="placeholder:text-[#040D0F] border-[1px] border-[#EDE8FF] text-black block w-full py-[10px] px-[18px] placeholder:text-sm"
          />
        </div>
        <p className="text-xs text-primary mt-2">
          By clicking Create account, I agree to use Terms of Use and
          acknowledge that i have read the{" "}
          <Link rel="stylesheet" href="/privacy" className="text-secondary">
            Privacy Policy.
          </Link>{" "}
          <input type="checkbox" id="privacy" />
        </p>
        <button className="mt-2 btn bg-secondary border-secondary w-full text-white rounded-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
