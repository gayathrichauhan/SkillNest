// src/pages/About.jsx
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-white relative overflow-hidden">

            {/* ✅ WATERMARK LOGO (VITE SAFE) */}
            <img
                src="/images/icons/logo.svg"
                alt="SkillNest watermark"
                className="
                    absolute
                    top-40
                    right-16
                    w-[420px]
                    opacity-10
                    blur-md
                    pointer-events-none
                    select-none
                    z-0
                "
            />

            {/* ===== HERO ===== */}
            <section className="bg-gray-50 border-b border-gray-200 relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className="text-sm font-semibold text-primary-600 mb-4">
                        About SkillNest
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
                        Building Careers Through
                        <span className="text-primary-600"> Industry-Ready Education</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                        SkillNest is an online learning platform designed to help students
                        and professionals gain practical, job-ready skills through
                        structured courses and expert-led programs.
                    </p>
                </div>
            </section>

            {/* ===== WHY SKILLNEST ===== */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why Learn with SkillNest?
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Our courses are carefully designed to bridge the gap between
                            academic learning and real-world industry requirements.
                        </p>

                        <p className="text-gray-600 mb-6">
                            Whether you are starting your career or upskilling for growth,
                            SkillNest provides flexible, affordable, and high-quality learning
                            experiences.
                        </p>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-600 text-lg">✔</span>
                                Industry-aligned curriculum
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-600 text-lg">✔</span>
                                Learn at your own pace
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-600 text-lg">✔</span>
                                Beginner-friendly to advanced programs
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-600 text-lg">✔</span>
                                Certificates that add career value
                            </li>
                        </ul>
                    </div>

                    <div className="bg-primary-50 rounded-2xl p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To empower learners with practical skills, accessible education,
                            and career-focused programs that prepare them for success in a
                            rapidly evolving digital world.
                        </p>
                    </div>

                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="bg-gray-50 py-20 border-t border-gray-200 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <div>
                        <p className="text-4xl font-extrabold text-primary-600">100K+</p>
                        <p className="text-gray-600 mt-2">Learners</p>
                    </div>

                    <div>
                        <p className="text-4xl font-extrabold text-primary-600">200+</p>
                        <p className="text-gray-600 mt-2">Courses</p>
                    </div>

                    <div>
                        <p className="text-4xl font-extrabold text-primary-600">50+</p>
                        <p className="text-gray-600 mt-2">Expert Instructors</p>
                    </div>

                    <div>
                        <p className="text-4xl font-extrabold text-primary-600">95%</p>
                        <p className="text-gray-600 mt-2">Learner Satisfaction</p>
                    </div>

                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Start Learning with SkillNest
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Explore career-oriented courses designed to help you grow.
                    </p>

                    <Link
                        to="/courses"
                        className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition"
                    >
                        Explore Courses
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default About;
