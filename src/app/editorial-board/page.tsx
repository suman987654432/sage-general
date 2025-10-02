import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 flex flex-col items-center">
            <h1
                className="text-5xl font-bold mb-6"
                style={{ color: '#808080' }}
            >
               EDITORIAL BOARD
            </h1>
            {/* Editorial Board Details */}
            <div className="max-w-2xl w-full text-left text-lg">
                <h2 className="font-semibold mt-6 mb-2">Editor-in-Chief</h2>
                <p>
                    <a href="mailto:sksingh@aripune.org" className="font-bold underline text-primary-black-v3">Dr. Sanjay K. Singh</a><br />
                    National Fungal Culture Collection of India, Agharkar Research Institute, Pune, India<br />
                    <a href="mailto:mycologicalspectrum@gmail.com" className="underline text-primary-black-v3">mycologicalspectrum@gmail.com</a>,{' '}
                    <a href="mailto:sksingh@aripune.org" className="underline text-primary-black-v3">sksingh@aripune.org</a>
                </p>
                <h2 className="font-semibold mt-6 mb-2">Managing Editors</h2>
                <p>
                    <a href="mailto:contact@mycologicalspectrum.org" className="font-bold underline text-primary-black-v3">Dr. Sunil Kumar Deshmukh</a><br />
                    President, <a href="#" className="underline text-primary-black-v3">Association of Fungal Biologists</a>, India<br />
                    <a href="mailto:mycologicalspectrum@gmail.com" className="underline text-primary-black-v3">mycologicalspectrum@gmail.com</a>,{' '}
                    <a href="mailto:contact@mycologicalspectrum.org" className="underline text-primary-black-v3">contact@mycologicalspectrum.org</a>
                </p>
                <p className="mt-4">
                    <a href="mailto:shilpa.verekar@parleagro.com" className="font-bold underline text-primary-black-v3">Dr. Shilpa Verekar</a><br />
                    Parle Agro Pvt Ltd, Mumbai, India<br />
                    <a href="mailto:mycologicalspectrum@gmail.com" className="underline text-primary-black-v3">mycologicalspectrum@gmail.com</a>,{' '}
                    <a href="mailto:shilpa.verekar@parleagro.com" className="underline text-primary-black-v3">shilpa.verekar@parleagro.com</a>
                </p>
                <h2 className="font-semibold mt-6 mb-2">Associate Editors</h2>
                <p>
                    <a href="mailto:s.badalyan@ysu.am" className="font-bold underline text-primary-black-v3">Prof. Susanna Badalyan</a><br />
                    Yerevan State University, Armenia<br />
                    <a href="mailto:s.badalyan@ysu.am" className="underline text-primary-black-v3">s.badalyan@ysu.am</a>
                </p>
                <p className="mt-4">
                    <a href="mailto:hesham@utm.my" className="font-bold underline text-primary-black-v3">Prof. Hesham Ali EL Enshasy</a><br />
                    Universiti Teknologi Malaysia<br />
                    <a href="mailto:hesham@utm.my" className="underline text-primary-black-v3">hesham@utm.my</a>
                </p>
            </div>
        </div>
    )
}

export default page