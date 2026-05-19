import React from "react";
import { Bot, Code2, ShieldCheck, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: <Bot className="h-7 w-7" />,
        title: "AI & Automation",
        desc: "Build intelligent workflows, AI assistants, and enterprise automation.",
        items: ["Agentic AI", "Workflow Automation", "LLM Integration"]
    },
    {
        icon: <Code2 className="h-7 w-7" />,
        title: "Product Engineering",
        desc: "Design and scale modern digital products.",
        items: ["Web Apps", "API Platforms", "Modernization"]
    },
    {
        icon: <ShieldCheck className="h-7 w-7" />,
        title: "Quality & Security",
        desc: "Improve release confidence with automation and DevSecOps.",
        items: ["QE Automation", "DevSecOps", "SRE"]
    }
];

export default function ServicesPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="mb-12">
                <h1 className="text-4xl font-black">Technology Services</h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                    Purpose-built services to accelerate product delivery, reduce risk, and modernize enterprise systems.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {services.map((s) => (
                    <article key={s.title} className="rounded-[1.5rem] border border-slate-300 bg-slate-50 p-6 shadow-sm">
                        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-slate-800 text-white">{s.icon}</div>

                        <h2 className="text-2xl font-bold">{s.title}</h2>
                        <p className="mt-3 text-slate-600">{s.desc}</p>

                        <ul className="mt-5 space-y-2 text-sm text-slate-600">
                            {s.items.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-slate-700" /> {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
