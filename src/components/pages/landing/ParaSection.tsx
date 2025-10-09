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
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">
                        <span className="font-bold">.....JOURNAL NAME.............</span> is an online
                        peer-reviewed, open-access journal published under Sanjeev Agrawal Global
                        Educational University, Bhopal. It is a premier university devoted to advancing
                        cutting-edge technological innovation and excellence to benefit society as a whole.{" "}
                        <span className="font-bold">JOURNAL NAME</span> inspires a global community
                        of researchers, educators, and practitioners through its publications. It serves as
                        a platform for the publication of original and high-quality research in various fields
                        of engineering, applied sciences, Agriculture, Medical and management. The journal
                        focuses on diverse technical and practical aspects of every field that foster
                        scientific research and innovation. Its primary mission is to bring together scholars
                        and professionals from both academia and industry to explore advanced technological
                        concepts, foster interdisciplinary collaboration, and drive impactful innovations.
                        The journal invites authors to contribute original research findings, project reports,
                        review papers, and real-world industrial experiences that reflect significant
                        advancements in given disciplines. By providing an open forum for knowledge exchange,{" "}
                        <span className="font-bold">JOURNAL NAME</span> supports the mission of
                        SAGE University in nurturing research excellence and societal progress.
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


