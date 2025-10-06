import DashboardNav from "@/components/Dashboard/DashBoardNavbar";
import DashboardSidebar from "@/components/Dashboard/Sidebar";
import Image from "next/image";

const DashboardPage = () => {
  const quickActionData = [
    {
      imag: "/quickAction1.png",
      title: "Talk to a Doctor or Pharmacists",
      description:
        "Need to talk to a doctor or pharmacist about your health needs?",
      btnlable: "Consult Now",
    },
    {
      imag: "/quickAction2.png",
      title: "Book a Lab Test",
      description: "Would you like to book a lab test?",
      btnlable: "Book Now",
    },
  ];

  return (
    <main className="flex h-screen text-[#000000B2]">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col bg-white relative">
        <div className="sticky top-0 z-50 bg-white">
          <DashboardNav />
        </div>

        <div className="flex-1 overflow-y-auto bg-[#F9F9F9] px-6">
          <div className="py-11">Last Orders</div>

          <div className="flex flex-col items-center justify-center gap-[16px] mt-16">
            <Image
              src="/orderBag.png"
              alt="Order Bag"
              height={109.6}
              width={81.65}
            />
            <h1>Empty</h1>
            <p>You haven’t order for any medication yet</p>
            <button className="btn bg-secondary rounded-full border-secondary md:w-[235px]">
              Order Now
            </button>
          </div>
          <div className="my-[88.48px]">
            <h2>Quick Action</h2>
            <div className="flex gap-6 mt-10">
              {quickActionData.map((item) => (
                <div
                  key={item.btnlable}
                  className="card bg-base-100 image-full w-96 shadow-sm h-[200px]"
                >
                  <figure>
                    <Image
                      src={item.imag}
                      alt="Shoes"
                      width={563}
                      height={153}
                      className="object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Talk to a Doctor or Pharmacists
                    </h2>
                    <p>
                      Need to talk to a doctor or pharmacist about
                      your health needs?
                    </p>
                    <div className="card-actions justify-center b">
                      <button className="btn bg-white text-secondary md:w-[190.16px] rounded-full">
                        Consult Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
