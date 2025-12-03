import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
            <BlurText
                text="Coming Soon"
                className="text-4xl md:text-6xl font-bold mb-8 text-center"
                delay={150}
                animateBy="words"
                direction="top"
            />
            <p className="text-neutral-400 text-lg md:text-xl mb-12 text-center max-w-md">
                We are working hard to bring you this resource. Stay tuned!
            </p>
            <Link href="/">
                <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}
