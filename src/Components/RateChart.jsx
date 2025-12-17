// src/components/RateChart.jsx
import React from "react";

export default function RateChart() {
  const rates = [
    {
      type: "1 BHK Home",
      values: [
        "Rs. 7,000 - 11,000",
        "Rs. 12,000 - 16,000",
        "Rs. 20,000 - 25,000",
        "Rs. 26,000 - 32,000",
        "Rs. 30,000 - 35,000",
      ],
    },
    {
      type: "2 BHK Home",
      values: [
        "Rs. 12,000 - 15,000",
        "Rs. 20,000 - 23,000",
        "Rs. 25,000 - 30,000",
        "Rs. 32,000 - 40,000",
        "Rs. 40,000 - 45,000",
      ],
    },
    {
      type: "3 BHK Home",
      values: [
        "Rs. 15,000 - 18,000",
        "Rs. 25,000 - 30,000",
        "Rs. 35,000 - 40,000",
        "Rs. 45,000 - 50,000",
        "Rs. 50,000 - 65,000",
      ],
    },
    {
      type: "4 BHK / Villa",
      values: [
        "Rs. 25,000 - 30,000",
        "Rs. 35,000 - 40,000",
        "Rs. 50,000 - 60,000",
        "Rs. 55,000 - 65,000",
        "Rs. 70,000 - 90,000",
      ],
    },
    {
      type: "Car Transportation",
      values: [
        "Rs. 9,000 - 11,500",
        "Rs. 12,000 - 14,500",
        "Rs. 17,000 - 20,000",
        "Rs. 21,000 - 25,000",
        "-",
      ],
    },
    {
      type: "Bike Transportation",
      values: [
        "Rs. 3,000 - 7,000",
        "Rs. 7,000 - 10,500",
        "Rs. 10,000 - 15,000",
        "Rs. 15,000 - 18,000",
        "-",
      ],
    },
  ];

  const headers = [
    "Shifting Type",
    "Up to 50 KM",
    "Up to 500 KM",
    "Up to 1000 KM",
    "Up to 1500 KM",
    "Within 2500 KM",
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-grow h-[2px] bg-[#E0E0E0] hidden sm:block"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F0F0F] px-4 text-center">
            Rates & Charges –{" "}
            <span className="text-[#E10600]">Mathura Packers</span>{" "}
            <span className="text-[#0F0F0F]">& Movers</span>
          </h2>
          <div className="flex-grow h-[2px] bg-[#E0E0E0] hidden sm:block"></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E0E0E0] bg-[#FFFFFF] shadow-xl">
          <table className="min-w-[700px] w-full border-collapse">
            <thead>
              <tr className="bg-[#0F0F0F] text-white text-xs sm:text-sm md:text-base">
                {headers.map((head, idx) => (
                  <th
                    key={idx}
                    className="px-3 sm:px-5 py-3 sm:py-4 text-center font-semibold uppercase tracking-wide"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rates.map((row, idx) => (
                <tr
                  key={idx}
                  className={`text-center text-[#111111] text-xs sm:text-sm md:text-base transition ${
                    idx % 2 === 0 ? "bg-[#F4F4F4]" : "bg-[#FFFFFF]"
                  } hover:bg-[#E1060015]`}
                >
                  <td className="px-3 sm:px-5 py-3 sm:py-4 font-semibold text-[#0F0F0F] whitespace-nowrap">
                    {row.type}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className="px-3 sm:px-5 py-3 sm:py-4 text-[#5F5F5F] whitespace-nowrap"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-8 bg-[#FFFFFF] border-l-4 border-[#E10600] p-4 rounded-lg shadow-sm">
          <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] text-center max-w-3xl mx-auto">
            <span className="font-bold text-[#0F0F0F]">Note:</span> Prices are
            approximate and may vary based on distance, volume of goods,
            manpower, and additional services. Contact{" "}
            <span className="font-semibold text-[#E10600]">
              Mathura Packers & Movers
            </span>{" "}
            for an accurate quotation tailored to your relocation needs.
          </p>
        </div>
      </div>
    </section>
  );
}
