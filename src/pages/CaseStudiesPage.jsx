import React from "react";

const studies = [
    {
        client: "Global Retail Platform",
        impact: "42% faster release cycle",
        summary: "Implemented cloud-native architecture and CI/CD automation to accelerate product launches."
    },
    {
        client: "FinTech Enterprise",
        impact: "35% reduction in incidents",
        summary: "Introduced SRE practices, observability dashboards, and reliability engineering workflows."
    },
    {
        client: "Healthcare SaaS Provider",
        impact: "2x data processing throughput",
        summary: "Built a modern data platform for near real-time analytics and operational insights."
    }
];

export default function CaseStudiesPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-black">Case Studies</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Real-world transformation stories showcasing measurable engineering and business outcomes.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {studies.map((study) => (
                    <article key={study.client} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{study.client}</p>
                        <p className="mt-3 text-2xl font-black text-slate-900">{study.impact}</p>
                        <p className="mt-3 text-slate-600">{study.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
