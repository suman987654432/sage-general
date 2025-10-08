import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
          EDITOR GUIDELINES
        </h1>

        <div className="max-w-6xl w-full mt-6">
          <section className="mt-10 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Editor Guidelines</h2>

            <p className="text-gray-700 mb-4">
              This template remains as-is. Below are brief guidelines to help
              editors maintain consistency and quality.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/Template.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold border-primary-yellow bg-white text-primary-yellow hover:bg-primary-yellow hover:text-white transition-all duration-300 px-6 py-3 rounded-lg border-2"
              >
                📄 View Full PDF
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;

