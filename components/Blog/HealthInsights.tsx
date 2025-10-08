const HealthInsights = () => {
  const data = [
    {
      title: "1. Early Detection Saves Lives",
      details:
        "Many health conditions, like high blood pressure, diabetes, or heart issues, can go unnoticed without testing because they don’t always present obvious symptoms in the early stages. Seniors may feel healthy while an underlying condition quietly progresses, which can lead to serious complications later on. <br /><br /> Routine screenings provide a safety net by identifying risks early, giving doctors a chance to intervene before problems escalate. With early detection, treatments are often less invasive, more effective, and significantly improve the chances of maintaining long-term wellness.",
    },
    {
      title: "2. Peace of Mind for Families",
      details:
        "For many families, one of the biggest worries is not knowing how their loved ones are truly doing health-wise. Regular checkups remove that uncertainty by providing clear insights into a senior's overall condition. This reassurance gives families confidence that small issues won't go unnoticed, and if something arises, it can be managed quickly.<br /><br /> Beyond medical results, checkups also offer families an opportunity to ask questions, understand care plans, and feel more connected to their loved one's healthcare journey. That peace of mind creates less stress at home and more opportunities for genuine moments of joy together.",
    },
    {
      title: "3. Building Healthier Habits",
      details:
        "Health checkups are not just about spotting problems—they're also a chance to strengthen daily routines that support longevity. During appointments, seniors can receive tailored advice on nutrition, exercise, and medications that fit their personal needs and lifestyles.<br /><br /> Regular visits keep them accountable and motivated, reinforcing good habits like staying active, eating balanced meals, and keeping track of prescriptions. Over time, these consistent lifestyle adjustments compound into lasting improvements, empowering seniors to live more independently and confidently as they age.",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] w-full flex flex-col justify-center items-center py-12 px-5 md:px-0 gap-10">
      {data.map((item) => (
        <ul
          key={item.title}
          className="text-left font-inter w-full max-w-[1042px]"
        >
          <li>
            <h3 className="text-primary font-extrabold text-xl sm:text-2xl md:text-[28px] mb-3">
              {item.title}
            </h3>
            <p
              className="font-medium text-[15px] sm:text-[16px] md:text-[18px] text-primary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.details }}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default HealthInsights;
