'use client'
import React, { useRef } from 'react'
import { notFound } from 'next/navigation'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface ArticlePageProps {
  params: {
    id: string
  }
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const articleRef = useRef<HTMLDivElement>(null)

  // 🔹 Articles data
  const articles = [
    {
      id: '1',
      title: 'Diversity of Aquatic Hyphomycetes in Two Coastal Streams of Southwest India',
      authors: 'Shekar Tejaswi, Kodandoor Sharathchandra, Kandikere Ramaiah Sridhar',
      citation: 'Mycological Spectrum 1(1): 01-17.',
      abstract:
        'This study investigates the diversity of aquatic hyphomycetes in two coastal streams of Southwest India. The research provides insights into the fungal community structure and ecological significance of these organisms in aquatic ecosystems.',
      keywords:
        'Aquatic hyphomycetes, coastal streams, diversity, Southwest India, fungal ecology',
    },
    {
      id: '2',
      title: 'Azaphilone Pigments from <i>Penicillium maximae</i>',
      authors:
        'Filipe Augusto Tironi Alice, Alice Ferreira-Silva, Ivanildo Evódio Marriel, Gabriel Franco dos Santos, Jacqueline Aparecida Takahashi',
      citation: 'Mycological Spectrum 1(1): 18-27.',
      abstract:
        'This research focuses on the isolation and characterization of azaphilone pigments from Penicillium maximae. The study explores the chemical properties and potential applications of these bioactive compounds.',
      keywords:
        'Azaphilone pigments, Penicillium maximae, bioactive compounds, fungal metabolites',
    },
    {
      id: '3',
      title:
        'Extraction and Partial Characterization of Melanin Pigment from <i>Alternaria burnsii</i> NFCCI 5753 and <i>Cladosporium tenuissimum</i> NFCCI 5754',
      authors: 'Malika Suthar, Sanjay K. Singh',
      citation: 'Mycological Spectrum 1(1): 28-46.',
      abstract:
        'This study presents the extraction and partial characterization of melanin pigments from Alternaria burnsii and Cladosporium tenuissimum. The research examines the structural and functional properties of these natural pigments.',
      keywords:
        'Melanin pigment, Alternaria burnsii, Cladosporium tenuissimum, natural pigments, characterization',
    },
    {
      id: '4',
      title: 'Do You Believe in "New" Fungal Species?',
      authors: 'Belle Damodara Shenoy',
      citation: 'Mycological Spectrum 1(1): 47-58',
      abstract:
        'This perspective article discusses the concept of "new" fungal species and challenges current taxonomic practices. It explores the implications of molecular techniques in fungal taxonomy and species delimitation.',
      keywords:
        'Fungal taxonomy, species concept, molecular techniques, biodiversity, classification',
    },
    {
      id: '5',
      title:
        'Fungal Bioactive Peptides: Rejuvenating the Era of Peptide-Based Therapy',
      authors: 'Lokesh Gambhir and Neha Kapoor',
      citation: 'Mycological Spectrum 1(1): 59-87.',
      abstract:
        'This comprehensive review discusses fungal bioactive peptides and their therapeutic potential. The article explores various peptide-based therapies derived from fungal sources and their applications in medicine.',
      keywords:
        'Bioactive peptides, fungal peptides, peptide therapy, therapeutic applications, drug discovery',
    },
    {
      id: '6',
      title:
        'Remembrance: Professor (Dr.) Mansaram Sukhdeo Patil (15 July 1940 – 04 March 2025)',
      authors: 'Anjali Patil',
      citation: 'Mycological Spectrum 1(1): 88.',
      abstract:
        'A tribute to Professor (Dr.) Mansaram Sukhdeo Patil, highlighting his contributions to mycology and his lasting impact on the scientific community.',
      keywords:
        'Tribute, mycology, Professor Mansaram Patil, academic legacy',
    },
  ]

  // 🔹 Find current article
  const articleId = String(params.id)
  const article = articles.find((a) => a.id === articleId)

  if (!article) {
    notFound()
  }

  // 🔹 Download PDF logic same as TestPDF
  const handleDownload = async () => {
    if (!articleRef.current) return
    const canvas = await html2canvas(articleRef.current, { scale: 2 })
    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${article.title.replace(/<[^>]+>/g, '')}.pdf`)
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16 flex flex-col">
      <article
        ref={articleRef}
        className="p-8 "
      >
        <h1
          className="text-xl font-bold mb-4 text-gray-800"
          dangerouslySetInnerHTML={{ __html: article.title }}
        />

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Authors:</h2>
          <p className="text-gray-600">{article.authors}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Citation:</h2>
          <p className="italic text-gray-600">{article.citation}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Abstract:</h2>
          <p className="text-gray-700 leading-relaxed">{article.abstract}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Keywords:</h2>
          <p className="text-gray-600">{article.keywords}</p>
        </div>

        <div className="pt-6 flex gap-4">
          <button
            onClick={handleDownload}
            className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform"
          >
            Download as PDF
          </button>
        </div>
      </article>
    </div>
  )
}

export default ArticlePage
