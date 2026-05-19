import React from "react";
import { ArrowRight, Bot, Cloud, BarChart3, ShieldCheck, Sparkles, Cpu, Database, Workflow, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

const dashboardItems = [
    {
        title: "AI Delivery",
        description: "Ship copilots and AI workflows with model orchestration, guardrails, and continuous evaluation.",
        icon: Bot
    },
    {
        title: "Cloud Native",
        description: "Build resilient microservices on Kubernetes with autoscaling, observability, and zero-downtime releases.",
        icon: Cloud
    },
    {
        title: "Data Insights",
        description: "Turn raw enterprise data into actionable dashboards, forecasting signals, and decision intelligence.",
        icon: BarChart3
    },
    {
        title: "SRE Ready",
        description: "Improve reliability with SLOs, incident response playbooks, error budgets, and proactive monitoring.",
        icon: ShieldCheck
    },
    {
        title: "Platform Engineering",
        description: "Create reusable developer platforms with self-service templates and secure golden paths.",
        icon: Cpu
    },
    {
        title: "Data Platforms",
        description: "Modernize pipelines with governed data lakes, real-time ingestion, and scalable analytics stacks.",
        icon: Database
    },
    {
        title: "Workflow Automation",
        description: "Automate operations using event-driven workflows, approvals, and enterprise system integrations.",
        icon: Workflow
    },
    {
        title: "Security First",
        description: "Embed security controls into delivery with threat modeling, policy gates, and continuous compliance.",
        icon: LockKeyhole
    }
];

const marqueeItems = [...dashboardItems, ...dashboardItems];

export default function HomePage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-200 px-4 py-2 text-sm text-slate-700">
                    <Sparkles className="h-4 w-4" /> AI-led software consulting company
                </div>

                <h1 className="text-4xl font-black leading-tight md:text-6xl">
                    Build smarter digital products with AI-powered engineering.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                    Enterprise modernization, cloud, AI, automation, and scalable engineering solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white shadow"
                    >
                        Talk to an expert <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>

                <div className="mt-12 rounded-[1.5rem] border border-slate-300 bg-slate-100 p-6">
                    <p className="mb-4 text-sm text-slate-600">Enterprise transformation dashboard</p>

                    <div className="overflow-hidden pb-2">
                        <div className="flex w-max gap-4" style={{ animation: "dashboardMarquee 28s linear infinite" }}>
                            {marqueeItems.map((item, index) => (
                                <div key={`${item.title}-${index}`} className="min-w-[260px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <p className="font-semibold text-slate-800">{item.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes dashboardMarquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
