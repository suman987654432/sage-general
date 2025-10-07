import React from "react";

const JournalInformationPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
        Journal Information
      </h1>
      <div className="max-w-6xl w-full mt-6">
        <p className="mb-6">
          SAGE University, Bhopal, Madhya Pradesh, India, is committed to
          excellence in academic research. The university motivates both its
          students and faculty members to pursue innovation and novel findings
          through their research. Hence, the university has decided to launch a
          journal. The journal aims to publish reviews on current topics and
          original research articles based on cutting-edge research by
          universities, institutes, and industries. This is a peer-reviewed
          academic journal that maintains its ethics in publication. The
          editorial board of the journal encourages national and international
          students and faculty members to submit their articles under the
          categories mentioned below. The present-day research revolves around
          interdisciplinary research fields, including science, computer
          science, engineering, and policy-making.
        </p>
        <h2 className="font-semibold mt-4 mb-2">Proposed Journal Names</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>SAGE FRONTIERS: A Journal of Multidisciplinary Research</li>
          <li>SAGE SPECTRUM: A Journal of Multidisciplinary Research</li>
          <li>
            SAGE FRONTIERS: An International Journal of Multidisciplinary
            Research
          </li>
          <li>
            SAGE SPECTRUM: An International Journal of Multidisciplinary
            Research
          </li>
          <li>SAGE International Journal of Interdisciplinary Research</li>
        </ul>
        <h2 className="font-semibold mt-4 mb-2">Journal Details</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            PRGI Formalities: To be applied after finalisation of journal name
          </li>
          <li>ISSN: To be applied after receiving manuscripts</li>
          <li>Frequency: e-journal</li>
          <li>Open Access: Free accessible for readers</li>
          <li>Review Process: Peer review by referees</li>
          <li>Acceptance Time: 1-3 months, based on revision cycles</li>
          <li>
            Publication Process: Online First, immediately after acceptance
          </li>
          <li>Language: English</li>
        </ul>
        <h2 className="font-semibold mt-4 mb-2">
          Why SAGE SPECTRUM- A Journal of Multidisciplinary Research?
        </h2>
        <p className="mb-6 list-disc pl-6 ">
          <li>Open Access: Ensures your work is freely accessible</li>
          <li> Fast Publication: Quick, quality-focused review process</li>
          <li>
            {" "}
            Expert Editorial Board: Global experts ensure rigorous review
          </li>
          <li>
            {" "}
            Global Reach: Maximises your research’s visibility and impact
          </li>
        </p>
        {/* <h2 className="font-semibold mt-4 mb-2">Scope</h2> */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2"> Scope of Journal</h3>
          <p className="mb-2">The journal accepts:</p>
          <h1 className="font-semibold">Categories</h1>
          <ul className="list-disc pl-6 mb-2">
            <li>Editorial</li>
            <li>
              Review Articles: The journal encourages submitting critical and
              extensive reviews on the current topics of research in any of the
              area mentioned under Disciplines/ Themes. The review articles
              should provide valuable insights, new information, views of the
              authors, current knowledge, good compilation of relevant previous
              data, and potential directions for future research.
            </li>
            <li>
              Original Research Articles: The journal invites original research
              papers that align with the journal's scope of multidisciplinary
              research.
            </li>
            <li>
              Short Communications: Impactful brief reports related to broader
              and long-term studies mentioning significant findings in brief. It
              helps to circulate important results or novel methodologies until
              the complete study is complete.
            </li>
            <li>
              Case Reports/Case Studies/Case Series: Case studies related to
              industry, management, law, etc. can be submitted highlighting
              unique aspects, challenges and lessons learnt from real world
              examples.
            </li>
            <li>
              Book Reviews: The journal also publishes reviews of recently
              published books related to the discipline/ theme mentioned below.
              The book review should critically evaluate the content, relevance
              and contribution of the desired publication in the respective
              area/ field.
            </li>
            <li>
              Others
              <ul className="list-disc pl-6">
                <li>Information Regarding Conference/ Workshop/ Symposium/ Seminars</li>
                <li>Author's Instructions</li>
                <li>About the Journal</li>
                <li>About the SAGE Group</li>
                <li>About SAGE University</li>
              </ul>
            </li>
          </ul>
          <h1 className="font-semibold">Disciplines/Themes</h1>
          <ul className="list-disc pl-6">
            <li>Medical Science (Nursing, Paramedical Sciences, Ayurveda and Pharmacy)</li>
            <li>Sciences, Agriculture, and Engineering</li>
            <li>Computer Science and Computer Applications</li>
            <li>Humanities and Social Science</li>
            <li>Management and Commerce</li>
            <li>Law, Policy, and International Relations</li>
            <li>Journalism and Mass Communication</li>
            <li>Library Science</li>
            <li>Environmental Studies</li>
            <li>Architecture, Planning, and Design</li>
            <li>Language and Literature</li>
            <li>Performing Art</li>
            <li>Education</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JournalInformationPage;
