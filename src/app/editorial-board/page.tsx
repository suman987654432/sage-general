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
                <h2 className="font-semibold mt-6 mb-2">Chief Patrons</h2>
                <p> {/* Add names or leave blank if not provided */} </p>
                <h2 className="font-semibold mt-6 mb-2">Patrons</h2>
                <p> {/* Add names or leave blank if not provided */} </p>
                <h2 className="font-semibold mt-6 mb-2">Editor-in-Chief</h2>
                <p>………………………………………………..</p>
                <h2 className="font-semibold mt-6 mb-2">Editorial Board</h2>
                <p> {/* Add names or leave blank if not provided */} </p>
                <h2 className="font-semibold mt-6 mb-2">Editorial Advisory Board</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Prof. Tropmann-Frick, Hamburg, Germany</li>
                    <li>Dr. A.K. Pandey, Ujjain, Madhya Pradesh, India</li>
                    <li>Dr. A.M. Deshmukh, Osmanabad, Maharashtra, India</li>
                    <li>Ts. Dr. Ranjetta Poobathy, Perak Darul Ridzuan, Malaysia</li>
                    <li>Dr. Nipun Silawat, Bhopal, Madhya Pradesh, India</li>
                    <li>Dr. Vikas Shinde, Bhopal, Madhya Pradesh, India</li>
                    <li>Dr. Vita Meylani, Universitas Siliwangi, Tasikmalaya, Indonesia</li>
                    <li>Mr. Pankaj Sohaney, Dubai, UAE</li>
                    <li>Dr. Om Prakash Sharma, Pune, Maharashtra, India</li>
                    <li>Dr. Swapnil Kajale, Rishon LeZion, Israel</li>
                    <li>Dr. Kamal Ahmad Qureshi, Unaizah, Saudi Arabia</li>
                </ul>
                <h2 className="font-semibold mt-6 mb-2">Managing Editor</h2>
                <p> {/* Add name or leave blank if not provided */} </p>
                <h2 className="font-semibold mt-6 mb-2">Managing Co-Editor</h2>
                <p> {/* Add name or leave blank if not provided */} </p>
                <h2 className="font-semibold mt-6 mb-2">English Proofreading</h2>
                <p> {/* Add name or leave blank if not provided */} </p>
            </div>
        </div>
    )
}

export default page