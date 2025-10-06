"use client";

import AddPrescription from "@/components/Dashboard/AddPrescription";
import DashboardNav from "@/components/Dashboard/DashBoardNavbar";
import { LastOder } from "@/components/Dashboard/latestOrder";
import Order from "@/components/Dashboard/Order";
import DashboardSidebar from "@/components/Dashboard/Sidebar";
import { useState } from "react";

const DashboardPage = () => {
  const [isActive, setisActive] = useState<string>("order");
  const [addPrescription, setAddPrescription] = useState<boolean>(false);

  console.log(isActive);
  return (
    <main className="flex h-screen text-[#000000B2] relative">
      <DashboardSidebar setActive={setisActive} />

      <div className="flex-1 flex flex-col bg-white relative">
        <div className="sticky top-0 z-10 bg-white">
          <DashboardNav />
        </div>

        <div className="flex-1 overflow-y-auto bg-[#F9F9F9] px-6">
          {isActive === "dashboard" && <LastOder />}
          {isActive === "order" && (
            <Order setaddprescription={setAddPrescription} />
          )}
        </div>
      </div>
      {addPrescription && (
        <div className="absolute bg-black/60 top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center">
          <AddPrescription setaddprescription={setAddPrescription} />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;
