import React from 'react'

const page = () => {
  const articles = [
    {
      id: '1',
      title: 'Diversity of Aquatic Hyphomycetes in Two Coastal Streams of Southwest India',
      authors: 'Shekar Tejaswi, Kodandoor Sharathchandra, Kandikere Ramaiah Sridhar',
      citation: 'Mycological Spectrum 1(1): 01-17.',
      linkText: 'View Abstract',
    },
    {
      id: '2',
      title: 'Azaphilone Pigments from <i>Penicillium maximae</i>',
      authors: 'Filipe Augusto Tironi Alice, Alice Ferreira-Silva, Ivanildo Evódio Marriel, Gabriel Franco dos Santos, Jacqueline Aparecida Takahashi',
      citation: 'Mycological Spectrum 1(1): 18-27.',
      linkText: 'View Abstract',
    },
    {
      id: '3',
      title: 'Extraction and Partial Characterization of Melanin Pigment from <i>Alternaria burnsii</i> NFCCI 5753 and <i>Cladosporium tenuissimum</i> NFCCI 5754',
      authors: 'Malika Suthar, Sanjay K. Singh',
      citation: 'Mycological Spectrum 1(1): 28-46.',
      linkText: 'View Abstract',
    },
    {
      id: '4',
      title: 'Do You Believe in “New” Fungal Species?',
      authors: 'Belle Damodara Shenoy',
      citation: 'Mycological Spectrum 1(1): 47-58',
      linkText: 'View Abstract',
    },
    {
      id: '5',
      title: 'Fungal Bioactive Peptides: Rejuvenating the Era of Peptide-Based Therapy',
      authors: 'Lokesh Gambhir and Neha Kapoor',
      citation: 'Mycological Spectrum 1(1): 59-87.',
      linkText: 'View Abstract',
    },
    {
      id: '6',
      title: 'Remembrance: Professor (Dr.) Mansaram Sukhdeo Patil (15 July 1940 – 04 March 2025)',
      authors: 'Anjali Patil',
      citation: 'Mycological Spectrum 1(1): 88.',
      linkText: 'View Article',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col ">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#808080' }}>
        MYCOLOGICAL SPECTRUM, VOLUME 1, ISSUE 1, 2025
      </h1>
      <hr className="mb-6" />
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <div className="space-y-8">
        {articles.map((article) => (
          <div key={article.id}>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: article.title }} />
            <p className="text-gray-700">{article.authors}</p>
            <p className="italic text-gray-600">{article.citation}</p>
            <a
              href={`/articles/volume1/${article.id}`}
              className="text-primary-black-v3 underline"
            >
              {article.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page