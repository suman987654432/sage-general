import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
        PUBLICATION ETHICS
      </h1>
      <div className="max-w-6xl w-full mt-6">
        <p className="mb-6">
          Mycological Spectrum is the official journal of{" "}
          <a href="#" className="underline text-primary-black-v3">
            Association of Fungal Biologists
          </a>
          , Mumbai, India. It is an international, online, peer-reviewed,
          open-access journal dedicated to advancing the frontiers of fungal
          research. The journal publishes high-quality studies on fungal
          diversity, ecology, taxonomy, phylogeny, secondary metabolites,
          applied mycology, and more. With a continuous publication model,
          research is shared promptly throughout the year.
        </p>

        <p className="mb-6">
          Publishing in Mycological Spectrum ensures that your research is
          freely accessible to a global audience without paywalls or publication
          fees. We are committed to removing financial barriers to scientific
          dissemination, promoting inclusivity and greater impact. Our
          streamlined peer-review process balances rigorous evaluation with
          timely publication, allowing researchers to share their findings
          efficiently. Led by{" "}
          <a href="#" className="underline text-primary-black-v3">
            Dr. Sanjay K. Singh
          </a>{" "}
          of NFCCI (ARI Pune), our{" "}
          <a href="#" className="underline text-primary-black-v3">
            editorial team
          </a>{" "}
          includes{" "}
          <a href="#" className="underline text-primary-black-v3">
            renowned mycologists
          </a>{" "}
          who ensure scientific integrity and quality. The journal also
          maximizes the visibility of your work through active outreach and
          indexing initiatives.
        </p>

        <p className="mb-6">
          The journal aims to be a global platform for cutting-edge mycological
          research, with a particular focus on underexplored fungal diversity.
          As an open-access publication, Mycological Spectrum is committed to
          fostering collaboration and accessibility across the international
          scientific community.
        </p>

        <p>
          Mycological Spectrum welcomes original research articles, reviews,
          short communications, and letters that advance the understanding of
          fungal biology. Topics include, but not limited to, fungal taxonomy,
          phylogeny, ecology, biochemistry, biotechnology, industrial
          applications, lichenology, and symbiotic associations. We especially
          encourage submissions that report novel species, explore unique
          habitats, or contribute to applied and interdisciplinary mycological
          research.
        </p>
      </div>
    </div>
  );
};

export default page;
