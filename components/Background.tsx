"use client";

export default function BackgroundGradients() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
        >
            <div className="absolute top-[-20%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[#0066CC] opacity-30 blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#0066CC] opacity-25 blur-[150px]" />
            <div className="absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-[#0066CC] opacity-20 blur-[180px]" />
        </div>
    );
}
