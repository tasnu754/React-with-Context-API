import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-[#00796B]">ShopNest</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          ShopNest is your one-stop destination for quality products, unbeatable
          prices, and exceptional customer service.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https:/http://localhost:3000.reliasoftware.com/uploads/ecommerce_website_design_2ad8afed1f.png"
          alt="Our Store"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg w-[80%]">
            We aim to redefine your shopping experience by offering the best
            selection of products with fast delivery, secure payments, and
            hassle-free returns. An ecommerce website is an online store where
            customers can find products, browse offerings, and place purchases
            online.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Customer First",
              desc: "Every decision we make is aimed at improving your shopping experience.",
            },
            {
              title: "Integrity",
              desc: "We operate with honesty, transparency, and fairness.",
            },
            {
              title: "Innovation",
              desc: "We constantly seek new ways to simplify and enhance shopping.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-10 rounded-xl">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Happy Customers", value: "100K+" },
            { label: "Products Shipped", value: "250K+" },
            { label: "Countries Served", value: "50+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-[#00796B]">
                {stat.value}
              </div>
              <div className="text-gray-700 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
