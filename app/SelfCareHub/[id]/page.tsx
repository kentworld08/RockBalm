import BMI from "@/components/SelfCareHub/BMI";
import OvulationChecker from "@/components/SelfCareHub/OvulationChecker";
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
      {id === "3" && <OvulationChecker />}
    </main>
  );
}
