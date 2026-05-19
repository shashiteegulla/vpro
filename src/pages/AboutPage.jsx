import React from "react";
import { Globe2, Users, BarChart3, Cloud } from "lucide-react";

const highlights = [
    {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Global Delivery",
        desc: "Cross-functional teams delivering products across geographies and time zones."
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Consulting DNA",
        desc: "Deep domain expertise with an engineering-first mindset for faster outcomes."
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Business Impact",
        desc: "We focus on measurable improvements in velocity, reliability, and customer value."
    },
    {
        icon: <Cloud className="h-6 w-6" />,
        title: "Cloud Maturity",
        desc: "From migration to optimization, we help teams build resilient cloud-native platforms."
    }
];

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-black">About Valuelabspro</h1>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                    We are a digital engineering partner helping enterprises modernize software delivery with AI, automation,
                    and cloud-native practices.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {highlights.map((item) => (
                    <article key={item.title} className="rounded-3xl border border-slate-300 bg-slate-50 p-6 shadow-sm">
                        <div className="mb-4 inline-flex rounded-2xl bg-slate-800 p-3 text-white">{item.icon}</div>
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="mt-3 text-slate-600">{item.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
