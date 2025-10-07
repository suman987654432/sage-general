import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
        PUBLICATION ETHICS
      </h1>
      <div className="max-w-6xl w-full mt-6">
        <h2 className="font-semibold mt-4 mb-2">Policies</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <span className="font-semibold">Membership Fee:</span>
            <br />
            The membership fee of Rs. 500 (students), Rs. 800 (PhD/ Research
            Scholars), and Rs. 1200 (Faculty Members), Rs. 2500 (Industry/
            Company), $50 (International Faculty) is applicable at the time of
            submitting a manuscript.
          </li>
          <li>
            <span className="font-semibold">Processing Fee:</span>
            <br />
            The journal does not charge any processing fee.
          </li>
          <li>
            <span className="font-semibold">Open Access Statement:</span>
            <br />
            SAGE SPECTRUM: A Journal of Multidisciplinary Research is an
            open-access journal. The articles published in the journal can be
            freely distributed as per the Creative Commons
            Attribution-Non-Commercial-Share Alike 4.0 License{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              (link)
            </a>
             (As per the Budapest Open Access Initiative and reaffirmed in 2012
            BOAI-10). However, any research or work published in the journal
            should be duly quoted/ acknowledged in subsequent publications.
          </li>
          <li>
            <span className="font-semibold">Editorial Policies:</span>
            <br />
            SAGE SPECTRUM: A Journal of Multidisciplinary Research is committed
            to following the ethics of publication at all stages of the review
            and publication process as per the Committee on Publication Ethics
            (COPE). The journal publication committee expects the authors,
            reviewers, and editors to strictly follow the journals ethical
            policy. We also expect our reviewers and editors to follow the
            journals ethical policy in processing the received manuscripts.
          </li>
          <li>
            <span className="font-semibold">Publication Ethics:</span>
            <br />
            It is the responsibility of the journal to assure the readers that
            they are reading an original article. Any article that is submitted
            to the journal overlapping with already published or under review or
            in press, or any other electronic form will be considered to be a
            duplicate or redundant publication. It is a violation of the APA
            Ethics Code{" "}
            <a
              href="https://www.apa.org/ethics/code"
              target="_blank"
              rel="noopener noreferrer"
            >
              (link)
            </a>
            . Hence, such publications will be rejected or retracted (if
            published) and the journal will send a notice/ information of the
            same to the concerned authorities of the submitter’s affiliation.
          </li>
          <li>
            <span className="font-semibold">Ethics Committee Approval:</span>
            <br />
            SAGE SPECTRUM: A Journal of Multidisciplinary Research suggests that
            all those submissions dealing with animal or human data must include
            the details of the ethical committee approval in the Methods
            section. The authors are requested to submit a valid clearance
            certificate from the regulatory ethical committee of the organisation
            where the work is accomplished.
          </li>
          <li>
            <span className="font-semibold">Consent Form:</span>
            <br />
            SAGE SPECTRUM: A Journal of Multidisciplinary Research suggests that
            those studies that involve the participation of patients or healthy
            persons to other subjects that are part of the experimental or survey
            studies should take permission from the volunteer in the form of a
            consent form. The details of the same should be mentioned in the
            manuscripts.
          </li>
          <li>
            <span className="font-semibold">Conflict of Interest:</span>
            <br />
            The authors are asked to reveal any financial interests/ funding of
            the work. Also, the authors must state any conflicts between them.
          </li>
          <li>
            <span className="font-semibold">Copyright Policy:</span>
            <br />
            By submitting the manuscript to the journal, authors agree to the
            copyright policy of the journal, and the copyright to the above work
            (including, without limitation, the right to publish the work in
            whole, or part, in any form) is hereby transferred to the journal,
            to ensure the widest dissemination and protection against infringement.
            The journal proclaims no proprietary right other than copyright.
            <br />
            By submitting the manuscript to the journal, the authors also declare
            that:
            <ul className="list-disc pl-6">
              <li>
                The manuscript submitted is an original work and has neither been
                published in any other peer-reviewed journal nor is it under
                consideration for publication by any other journal. More so, the
                manuscript does not contravene any existing copyright or any
                other third-party rights.
              </li>
              <li>
                The corresponding author(s) and/ or the main author take full
                responsibility of any plagiarism or ethics issue, if arise at
                some stage of the publication and even after the manuscript is
                published.
              </li>
              <li>
                I / we are the sole author(s) of the manuscript and maintain the
                authority to enter into this agreement and the granting of rights
                to the journal does not infringe any clause of this agreement.
              </li>
              <li>
                The manuscript contains no such material that may be unlawful,
                defamatory, or which would, if published, in any way whatsoever,
                violate the terms and conditions as laid down in the agreement.
              </li>
              <li>
                I/we have taken due care that the scientific knowledge and all
                other statements contained in the manuscript conform to facts and
                authentic formulae and will not, if followed precisely, be
                detrimental to the user.
              </li>
              <li>
                I/we permit the adaptation, preparation of derivative works, oral
                presentation, or distribution, along with the commercial
                application of the work.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Plagiarism Policy:</span>
            <br />
            All the manuscripts received by the editorial office will be checked
            for their originality by checking the plagiarism. The journal policy
            considers paraphrasing of text, concepts, and ideas as plagiarism.
            Also, if any text, data, or images are used without due permission
            from the publishers, it will be categorised under plagiarism. Usually
            less than 10% plagiarism is accepted in the manuscript. The
            manuscript will be rejected by the editorial board without undergoing
            the review process and also report to the concerned authority of the
            organization from where the manuscript is submitted.
          </li>
          <li>
            <span className="font-semibold">Privacy Statement:</span>
            <br />
            The editorial board states that the names and email addresses mentioned
            in the journal will be used only for the purposes of the journal and
            will not be used for any other purpose.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
