import React from "react";

const articles = [
    {
        title: "Building Responsible AI Systems in Enterprise",
        date: "May 2026",
        excerpt: "A practical guide to introducing guardrails, evaluation, and governance into AI product delivery."
    },
    {
        title: "Cloud Modernization Playbook for Legacy Apps",
        date: "Apr 2026",
        excerpt: "How to decompose, migrate, and optimize legacy systems using cloud-native patterns."
    },
    {
        title: "SRE Metrics That Actually Improve Reliability",
        date: "Mar 2026",
        excerpt: "A focused look at SLOs, error budgets, and incident metrics that drive operational excellence."
    }
];

export default function BlogPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-black">Blog</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Engineering insights, architecture patterns, and delivery best practices from our teams.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {articles.map((article) => (
                    <article key={article.title} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                        <p className="text-sm text-slate-500">{article.date}</p>
                        <h2 className="mt-3 text-xl font-bold">{article.title}</h2>
                        <p className="mt-3 text-slate-600">{article.excerpt}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
