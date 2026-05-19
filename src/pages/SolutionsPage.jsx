import React from "react";
import { Brain, Cloud, Shield, Gauge } from "lucide-react";

const solutionBlocks = [
    {
        title: "AI Product Acceleration",
        description: "Design and deploy AI-powered product capabilities with strong evaluation and governance.",
        icon: Brain
    },
    {
        title: "Cloud Modernization",
        description: "Migrate and modernize applications into cloud-native platforms for performance and scale.",
        icon: Cloud
    },
    {
        title: "Security & Compliance",
        description: "Shift-left security with secure SDLC controls and enterprise compliance readiness.",
        icon: Shield
    },
    {
        title: "Performance Engineering",
        description: "Improve user experience and uptime with observability-led performance optimization.",
        icon: Gauge
    }
];

export default function SolutionsPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-black">Solutions</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Outcome-focused software solutions that help enterprises move faster, reduce risk, and scale confidently.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {solutionBlocks.map((item) => (
                    <article key={item.title} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                        <div className="mb-4 inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="mt-3 text-slate-600">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
