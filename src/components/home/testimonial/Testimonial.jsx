import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { customer } from "../../assets/data/data";
import Heading from "../../common/Heading";

const Testimonial = () => {
  return (
    <>
      <section className="customer">
        <Heading
          title="Choose The Planes"
          desc="Meet our newbies! The lastest templates uploaded to the marketplace."
        />

        <div className="content">
          {customer.map((items) => (
            <div className="card">
              <button>
                <ImQuotesRight />
              </button>
              <p>{items.desc}</p>
              <h3>{items.name}</h3>
              <span>{items.post}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
