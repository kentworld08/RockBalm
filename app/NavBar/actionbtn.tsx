"use client";

const Actionbtn = () => {
  const handleLogin = () => {
    console.log("Login clicked");
  };
  const handleCreateAccount = () => {
    console.log("create account btn clicked");
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={handleLogin}
        className="hidden md:flex btn bg-transparent border border-primary rounded-[60px] py-[11px] px-7 h-[50px] w-[clamp(40px,_7vw,_93px)] text-primary font-inter font-normal text-[14px] items-center justify-center"
      >
        Login
      </button>

      <button
        onClick={handleCreateAccount}
        className="hidden md:flex items-center justify-center btn bg-secondary border border-secondary rounded-[60px] py-[11px] px-7 h-[50px] w-[clamp(90px,_15vw,_183px)] text-primary font-inter font-normal text-[14px]"
      >
        Create Account
      </button>
    </div>
  );
};

export default Actionbtn;
