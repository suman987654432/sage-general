import React from 'react'

const Footer = () => {
  return (
    <footer className=" py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-600 text-sm space-y-2">
          <p>
            Copyright © 2025{' '}
            <a 
              href="#" 
              className="text-blue-600 underline"
            >
              Association of Fungal Biologists
            </a>
            {' '}- All Rights Reserved (for website design only).
          </p>
          <p>
            Email:{' '}
            <a 
              href="mailto:mycologicalspectrum@gmail.com" 
              className="text-blue-600 underline"
            >
              mycologicalspectrum@gmail.com
            </a>
            {' '}| e-ISSN: 3107-6203
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer