import Image from "next/image";

const Footer = () => {
  const tableData = [
    {
      title: "Services",
      links: [
        { name: "Home", href: "#" },
        { name: "Shop", href: "#" },
        { name: "Medical", href: "#" },
        { name: "Consultation", href: "#" },
        { name: "Lab Testing", href: "#" },
        { name: "Geriatric Clinic", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Partnership", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Medical", href: "#" },
        { name: "Grace Clinic", href: "#" },
        { name: "FAQS", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="w-full px-6 flex flex-col md:flex-row items-center gap-8 z-40 py-10 md:py-0">
        {/* Image stays nicely sized */}
        <figure className="flex-shrink-0">
          <Image
            src="/frame.png"
            alt="frame"
            height={258.84}
            width={270.92}
            className="object-cover mx-auto md:mx-0 hidden md:block"
          />
        </figure>

        {/* Text and Input Container */}
        <div className="flex flex-col md:flex-row items-center justify-center  gap-4 w-full md:w-auto text-center md:text-left md:gap-[234px]">
          <h2 className="text-primary font-alfa-slab font-normal text-[18px] md:text-[24px] leading-snug md:w-[260px]">
            Interested in better health management?
          </h2>

          <div className="flex border border-[#040D0F] rounded-full items-center p-0.5 w-full md:w-auto max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-4 py-2 text-[#040D0F] outline-none rounded-full bg-transparent flex-1"
            />
            <button className="btn rounded-full border-secondary bg-secondary text-white px-6 py-2 whitespace-nowrap">
              Start Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Table Section */}
      <div className="bg-black text-white px-6 py-[90px]">
        {/* Mobile Grid - 2 Columns */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:hidden">
          {/* RockBalm */}
          <div>
            <h2 className="font-bold text-xl">RockBalm</h2>
            <p className="text-white font-inter font-semibold text-sm mt-2">
              Your complete health management platform
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              {tableData[0].links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="hover:text-[#0A9AE2] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              {tableData[1].links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              {tableData[2].links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="hover:text-[#0A9AE2] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (spans one column) */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              {tableData[3].links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="hover:text-[#0A9AE2] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:flex justify-between">
          <div>
            <h2 className="font-bold text-xl">RockBalm</h2>
            <p className="text-white font-inter font-semibold text-sm mt-2">
              Your complete health management platform
            </p>
          </div>

          <div className="overflow-x-hidden">
            <table className="table-auto border-separate border-spacing-x-[139px] border-spacing-y-0 text-sm w-full">
              <thead className="text-left">
                <tr>
                  {tableData.map((col, i) => (
                    <th key={i} className="py-2 text-gray-300 font-semibold">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  {tableData.map((col, i) => (
                    <td key={i} className="py-2">
                      <ul className="space-y-1">
                        {col.links.map((link, j) => (
                          <li key={j}>
                            <a
                              href={link.href}
                              className="hover:text-[#0A9AE2] transition-colors"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
