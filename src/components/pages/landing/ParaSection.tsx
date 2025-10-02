import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import hero from "@/assets/image.png";
import carousel from "@/assets/carousel.png";

const ParaSection = () => {
    return (
        <section className="bg-white py-12">
            {/* Text content with proper container */}
            <div className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
                {/* ...existing para content... */}
                <div className="mb-8">
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                        <span className="font-bold">Mycological Spectrum</span> is an online
                        peer-reviewed, open-access journal published by{" "}
                        <a
                            href="https://associationoffungalbiologists.com/"
                            className="text-blue-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Association of Fungal Biologists
                        </a>
                        , Mumbai, India. It serves as a platform for the publication of
                        original and high-quality research in various fields of mycology,
                        including fungal taxonomy, ecology, phylogeny, secondary metabolites,
                        and applied aspects. The journal follows a continuous publication
                        model and does not charge any article processing fees, making it
                        accessible to researchers from all backgrounds. By adopting an
                        inclusive approach, Mycological Spectrum aims to promote the
                        dissemination of knowledge and encourage wider participation in fungal
                        research. The journal is guided by a distinguished editorial board
                        comprising national and international experts in fungal biology. Each
                        manuscript undergoes a thorough yet timely peer-review process,
                        ensuring scientific rigour and prompt publication. Mycological
                        Spectrum welcomes diverse contributions such as research articles,
                        reviews, brief communications, and letters, especially those exploring
                        underrepresented fungal groups and ecosystems. With its commitment to
                        open access, academic integrity, and global outreach, the journal
                        aspires to become a trusted and recognised platform for advancing
                        fungal science in India and beyond.
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="font-bold text-lg mb-2">JOURNAL PARTICULARS</h3>
                    <ul className="text-gray-800 text-base md:text-lg leading-relaxed list-none space-y-1">
                        <li>
                            <span className="font-bold">Title:</span> Mycological Spectrum
                        </li>
                        <li>
                            <span className="font-bold">Frequency:</span> Non-annual (Biannual)
                        </li>
                        <li>
                            <span className="font-bold">e-ISSN:</span> 3107-6203
                        </li>
                        <li>
                            <span className="font-bold">Publisher:</span> President,{" "}
                            <a
                                href="https://associationoffungalbiologists.com/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Association of Fungal Biologists
                            </a>
                            , SIES College of Arts, Science & Commerce (Autonomous), Sion (West)
                            Mumbai - 400022, India
                        </li>
                        <li>
                            <span className="font-bold">Editor-in-Chief:</span>{" "}
                            <a
                                href="https://www.nfccindia.org/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dr. Sanjay K. Singh
                            </a>
                            , Chief Scientist, National Fungal Culture Collection of India,
                            Agarkar Research Institute, Pune, India
                        </li>
                        <li>
                            <span className="font-bold">Copyright:</span> Authors retain
                            copyright over their published work (Creative Commons Attribution
                            4.0 International License (CC BY 4.0))
                        </li>
                        <li>
                            <span className="font-bold">Starting Year:</span> 2025
                        </li>
                        <li>
                            <span className="font-bold">Subject:</span> Mycology and allied
                            subjects
                        </li>
                        <li>
                            <span className="font-bold">Language:</span> English
                        </li>
                        <li>
                            <span className="font-bold">Publication Format:</span> Online
                        </li>
                        <li>
                            <span className="font-bold">Phone Number:</span> +91 98205 10292
                        </li>
                        <li>
                            <span className="font-bold">Email Id:</span>{" "}
                            <a
                                href="mailto:mycologicalspectrum@gmail.com"
                                className="text-blue-700 underline"
                            >
                                mycologicalspectrum@gmail.com
                            </a>
                        </li>
                        <li>
                            <span className="font-bold">Website:</span>{" "}
                            <a
                                href="https://mycologicalspectrum.org/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://mycologicalspectrum.org/
                            </a>
                        </li>
                        <li>
                            <span className="font-bold">Address:</span> President,{" "}
                            <a
                                href="https://associationoffungalbiologists.com/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Association of Fungal Biologists
                            </a>
                            , Department of Botany, SIES College of Arts, Science & Commerce
                            (Empowered Autonomous), Sion (West) Mumbai - 400022, India
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">How to submit manuscripts?</h3>
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                        Submit well-prepared manuscript to{" "}
                        <a
                            href="mailto:mycologicalspectrum@gmail.com"
                            className="text-blue-700 underline"
                        >
                            mycologicalspectrum@gmail.com
                        </a>{" "}
                        in accordance with{" "}
                        <a
                            href="https://mycologicalspectrum.org/author-guidelines"
                            className="text-blue-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mycological Spectrum Author Guidelines
                        </a>
                        .
                    </p>
                </div>
            </div>

            {/* Full width Carousel Section */}
            <div className="mt-12 w-full">
                <Carousel className="w-full h-[90vh] overflow-visible">
                    <div className="relative w-full h-[90vh]">
                        <CarouselContent className="h-full">
                            <CarouselItem>
                                <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={hero}
                                        alt="Slide 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={carousel}
                                        alt="Slide 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={hero}
                                        alt="Slide 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>

                        {/* Arrows */}
                        <CarouselPrevious className="!absolute !top-1/2 !left-4 !-translate-y-1/2 !z-30 !bg-black/70 !text-white !rounded-full !shadow-lg !border !border-gray-300" />
                        <CarouselNext className="!absolute !top-1/2 !right-4 !-translate-y-1/2 !z-30 !bg-black/70 !text-white !rounded-full !shadow-lg !border !border-gray-300" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default ParaSection;

