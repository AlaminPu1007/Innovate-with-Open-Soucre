import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] bg-white flex items-center justify-center"
            style={{ backgroundImage: "url('/herobg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                    Contribute To
                    <br />
                    <span className="relative">
                        Open Source
                        <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-300 -z-10"></span>
                    </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Kickstart your open-source journey with beginner-friendly repository <br /> designed for first-time contributors this Hacktoberfest!
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <Link href="https://hacktoberfest.com/">
                            <Button className=" bg-black text-white hover:bg-gray-800">Hacktoberfest</Button>
                        </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre">
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-base font-medium">
                                <Github className="mr-2" /> Contribute
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}