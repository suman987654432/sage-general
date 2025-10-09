import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
          AUTHOR GUIDELINES
        </h1>
        <div className="max-w-6xl w-full mt-6 text-justify leading-relaxed text-lg">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              All submitted work must be original. Appropriately cite all content
              from other sources to avoid plagiarism.
            </li>
            <li>
              Ensure your contribution does not contain libellous material or
              infringe any copyright, intellectual property, or other third-party
              rights.
            </li>
            <li>
              The list of authors should accurately reflect those who carried out
              the research and wrote the article. The order of authorship must be
              jointly determined by all co-authors.
            </li>
            <li>
              All authors should be aware of the submission and agree to the main
              author signing an IPR form on their behalf.
            </li>
            <li>
              Manuscripts must not be under consideration or accepted for
              publication elsewhere. Any overlapping sections with published or
              submitted content should be acknowledged and cited.
            </li>
            <li>
              Obtain permission to reproduce any content from third-party sources
              (text and images). The journal cannot publish third-party content
              without proper permission (except fair dealing).
            </li>
            <li>
              Clearly list the source of funding for research projects in all
              funded papers. Other sources of support (including Open Access
              charges) should be identified in the manuscript, typically in an
              acknowledgement.
            </li>
            <li>
              Declare any potential conflicts of interest relating to the article.
            </li>
            <li>
              Inform the editor or publisher if a significant error is found in
              your published work, and cooperate to publish an erratum, addendum,
              or retraction if necessary.
            </li>
            <li>
              Authors have the right to appeal editorial decisions.
            </li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
              <a
                href="/Template.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold border-primary-yellow bg-white text-primary-yellow hover:bg-primary-yellow hover:text-white transition-all duration-300 px-6 py-3 rounded-lg border-2"
              >
                📄 Template of Articles in PDF
              </a>
            </div>
      </div>

    </div>
  );
};

export default page;
