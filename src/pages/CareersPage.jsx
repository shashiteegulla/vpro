import React from "react";

const roles = [
    "Senior Full Stack Engineer",
    "AI Engineer",
    "DevOps / SRE Engineer",
    "Data Platform Engineer"
];

export default function CareersPage() {
    return (
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-black">Careers</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Join a high-impact engineering team building AI-enabled products and enterprise platforms at scale.
                </p>
            </div>

            <div className="mt-12 rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">Open Roles</h2>
                <ul className="mt-5 space-y-3 text-slate-700">
                    {roles.map((role) => (
                        <li key={role} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                            {role}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
