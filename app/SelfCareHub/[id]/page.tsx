import BMI from "@/components/SelfCareHub/BMI";
import BMR from "@/components/SelfCareHub/BMR";
import Calorie from "@/components/SelfCareHub/Calorie";
import FatIntakeCalculator from "@/components/SelfCareHub/FatIntakeCalculator";
import HealthyWeightCalculator from "@/components/SelfCareHub/HealthyWeightCalculator";
import OvulationChecker from "@/components/SelfCareHub/OvulationChecker";
import PeriodChecker from "@/components/SelfCareHub/PeriodChecker";
import PregnancyLastPeriodCalculator from "@/components/SelfCareHub/PregnancyLastPeriodCalculator";
import { consultationCardData } from "@/components/SelfCareHub/SelfCareHubCardData";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SelfCareHubDetailPage({ params }: PageProps) {
  const { id } = await params;

  const item = consultationCardData.find((data) => data.id.toString() === id);

  if (!item) {
    return <div className="p-8 text-center text-red-500">Item not found.</div>;
  }

  return (
    <main>
      {id === "1" && <BMI />}
      {id === "2" && <Calorie />}
      {id === "3" && <OvulationChecker />}
      {id === "4" && <BMR />}
      {id === "5" && <FatIntakeCalculator />}
      {id === "6" && <HealthyWeightCalculator />}
      {id === "7" && <PeriodChecker />}
      {id === "8" && <PregnancyLastPeriodCalculator />}
    </main>
  );
}
