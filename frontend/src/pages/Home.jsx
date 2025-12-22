import FlipCard from "../components/FlipCard";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { user } = useAuth();

    return (
        <main className="bg-white">

            {/* HERO */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        {user && (
                            <p className="text-green-600 font-semibold mb-3">
                                Hello, {user.name} 👋
                            </p>
                        )}

                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Online Degrees <br />
                            Designed for <br />
                            Real Careers
                        </h1>

                        <p className="text-gray-600 text-lg mb-8 max-w-xl">
                            Learn from accredited institutions with flexible,
                            industry-aligned online programs.
                        </p>

                        <a
                            href="/courses"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold"
                        >
                            Explore Courses
                        </a>
                    </div>

                    <div className="rounded-2xl overflow-hidden border">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Students"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* WHY SKILLNEST */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center mb-14">
                        Why Choose SkillNest?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FlipCard
                            title="Expert-led programs"
                            back="Learn from industry professionals"
                        />
                        <FlipCard
                            title="Flexible schedules"
                            back="Study anytime, anywhere"
                        />
                        <FlipCard
                            title="Career-focused learning"
                            back="Programs that boost employability"
                        />
                    </div>
                </div>
            </section>

        </main>
    );
}
