import Image from "next/image";
import React from "react";

const SelfCare = () => {
  return (
    <div>
      <div>
        <h1>Self Care Hub</h1>
        <p>
          Access professional medical calculators to assess health metrics and
          risks. Our tools help healthcare providers make informed decisions
          quickly.
        </p>
        <figure>
          <Image
            src={"/selfcarehub.jpg"}
            alt="Self care hub"
            height={200}
            width={400}
          />
        </figure>
      </div>
    </div>
  );
};

export default SelfCare;
