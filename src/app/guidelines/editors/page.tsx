import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
          EDITOR GUIDELINES
        </h1>
        <div className="max-w-6xl w-full mt-6 text-justify leading-relaxed text-lg">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Decide which submitted articles should be published, prioritizing
              validation and importance to researchers and readers.
            </li>
            <li>
              Follow the journal&apos;s editorial board policies and comply with
              legal requirements regarding libel, copyright infringement, and
              plagiarism.
            </li>
            <li>
              Consult with other editors or reviewers (or society officers) when
              making publication decisions.
            </li>
            <li>
              Evaluate manuscripts for intellectual content without bias toward
              race, gender, sexual orientation, religious belief, ethnic origin,
              citizenship, or political philosophy.
            </li>
            <li>
              Keep all information about submitted manuscripts confidential,
              sharing only with appropriate parties (authors, reviewers, editorial
              advisers, publisher).
            </li>
            <li>
              Do not use unpublished materials from submitted manuscripts in your
              own research without written consent from the author.
            </li>
            <li>
              Maintain confidentiality and avoid personal advantage from
              privileged information or ideas obtained through peer review.
            </li>
            <li>
              Recuse yourself from handling manuscripts where you have conflicts
              of interest due to competitive, collaborative, or other
              relationships.
            </li>
            <li>
              Require contributors to disclose competing interests and publish
              corrections if conflicts are revealed after publication.
            </li>
            <li>
              Take appropriate action (correction, retraction, expression of
              concern) when necessary, and ensure peer-review standards for
              sponsored supplements match those of the main journal.
            </li>
            <li>
              Accept items in sponsored supplements based solely on academic
              merit and reader interest, not commercial considerations. Clearly
              identify non-peer reviewed sections.
            </li>
            <li>
              Ensure manuscripts are not submitted to more than one journal
              simultaneously.
            </li>
            <li>
              Accept only original work not published elsewhere, except for
              justified secondary publication (e.g., translations, expanded
              previous work) with transparency about text reuse
              (&apos;self-plagiarism&apos;).
            </li>
            <li>
              Avoid &apos;salami-slicing/publishing&apos;—do not split a single
              study into multiple submissions.
            </li>
            <li>
              Present results clearly, honestly, and without fabrication,
              falsification, or inappropriate data manipulation. Adhere to
              discipline-specific data acquisition and processing rules.
            </li>
            <li>
              Do not present data, text, or theories by others as your own
              (&apos;plagiarism&apos;). Give proper acknowledgements, use
              quotation marks for verbatim material, and secure permissions for
              copyrighted content.
            </li>
            <li>
              Use plagiarism screening software as needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
           