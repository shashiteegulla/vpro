import React from "react";

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-300 bg-slate-50 px-6 py-24 shadow-sm">
            <h1 className="text-4xl font-black">Contact Us</h1>
            <p className="mt-4 text-slate-600">Tell us about your project and our team will get back to you shortly.</p>

            <form className="mt-10 grid gap-4 rounded-3xl border border-slate-300 bg-slate-50 p-6 shadow-sm md:grid-cols-2">
                <label className="grid gap-2">
                    <span className="text-sm text-slate-600">Full Name</span>
                    <input
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        type="text"
                        placeholder="Your name"
                    />
                </label>

                <label className="grid gap-2">
                    <span className="text-sm text-slate-600">Work Email</span>
                    <input
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        type="email"
                        placeholder="you@company.com"
                    />
                </label>

                <label className="grid gap-2 md:col-span-2">
                    <span className="text-sm text-slate-600">Project Details</span>
                    <textarea
                        className="min-h-32 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="Share your goals and timeline"
                    />
                </label>

                <button type="button" className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow md:col-span-2">
                    Send Inquiry
                </button>
            </form>
        </section>
    );
}
