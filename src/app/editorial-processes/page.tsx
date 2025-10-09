import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
        EDITORIAL PROCESSES
      </h1>
      <div className="max-w-6xl w-full mt-6">
        <p className="mb-6 text-justify leading-relaxed">
          All submitted research articles are assessed by our Review board and
          Editorial board members utilizing two fold dazzle associate evaluation
          process so as to avoid plagiarism.{" "}
          <span className="font-bold">....JOURNAL NAME..............</span> set
          quality standards for the acceptance of appropriate and most effective
          research articles.
        </p>

        <p className="mb-6 text-justify leading-relaxed">
          Researchers should conduct their research from research proposal to
          publication in line with best practices and codes of conduct of
          relevant professional bodies and/or national and international
          regulatory bodies. In rare cases it is possible that ethical issues or
          misconduct could be encountered in your journal when research is
          submitted for publication.
        </p>
      </div>
    </div>
  );
};

export default page;
         