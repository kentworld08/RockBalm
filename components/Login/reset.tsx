type FormStatus = "signin" | "signup" | "reset" | "";

interface SignInProps {
  reset: React.Dispatch<React.SetStateAction<FormStatus>>;
}

const Reset = ({ reset }: SignInProps) => {
  return (
    <div>
      <div className="text-[#034F81]">
        <h1 className="font-inter font-bold md:text-[28px]">Forgot Password</h1>
        <p className="text-sm">
          Having issues remembering your password? You can recover it using the
          email associated with your account
        </p>
      </div>
      <form action="">
        <div className="mt-2">
          <label htmlFor="email" className="text-[#034F81]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="what is your email address"
            className="placeholder:text-[#040D0F] text-black border-[1px] border-[#EDE8FF] block w-full py-[10px] px-[18px] placeholder:text-sm"
          />
        </div>

        <button className="mt-2 btn bg-secondary border-secondary w-full text-white rounded-full">
          Rest Password
        </button>
        <p className="text-primary mt-4 justify-self-center">
          Remember your password?{" "}
          <button
            onClick={() => reset("signin")}
            className="text-secondary bg-none border-none shadow-none"
          >
            {" "}
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default Reset;
