import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SolutionsPage from "./pages/SolutionsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import logo from "./assets/valuelabspro-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

const serviceLinks = ["AI Delivery", "Cloud Native", "Data Insights", "SRE & DevOps"];

const resourceLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Support", to: "/contact" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-300 bg-slate-50/95 backdrop-blur-xl shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <NavLink to="/" aria-label="Go to homepage" className="inline-flex items-center">
              <img src={logo} alt="ValueLabs Pro logo" className="h-12 w-auto object-contain md:h-14" />
            </NavLink>
            {/* <div>
              <p className="text-lg font-bold text-slate-900">Valuelabspro</p>
              <p className="text-xs text-slate-500">Digital Engineering</p>
            </div> */}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-slate-900 font-semibold text-white" : "text-slate-700 hover:bg-slate-200"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink to="/contact" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow">
            Get Started
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-300 bg-slate-50 px-6 py-12 text-slate-700">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="ValueLabs Pro logo" className="h-10 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Enterprise software engineering partner for AI transformation, cloud modernization, and reliable digital delivery.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="hover:text-slate-900">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <NavLink to="/services" className="hover:text-slate-900">
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.to} className="hover:text-slate-900">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:hello@valuelabspro.com" className="hover:text-slate-900">
                  info@valuelabspro.com
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="hover:text-slate-900">
                  +1 (800) 858-7506
                </a>
              </li>
              {/* <li className="flex gap-4 pt-1">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                  LinkedIn
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                  X
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                  GitHub
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-slate-300 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© 2026 ValueLabsPro. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700">Terms of Service</a>
            <a href="#" className="hover:text-slate-700">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
