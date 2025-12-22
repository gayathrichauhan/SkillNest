import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/images/icons/logo.svg" className="h-8 w-8" />
                        <span className="font-bold text-gray-900">SkillNest</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Empowering learners with industry-ready online education and
                        career-focused courses.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link to="/courses" className="hover:text-primary-600">Courses</Link></li>
                        <li><Link to="/about" className="hover:text-primary-600">About</Link></li>
                        <li><Link to="/login" className="hover:text-primary-600">Login</Link></li>
                        <li><Link to="/signup" className="hover:text-primary-600">Sign Up</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Help Center</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* CTA */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Start Learning</h4>
                    <Link
                        to="/courses"
                        className="inline-block bg-primary-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-primary-700 transition"
                    >
                        Explore Courses
                    </Link>
                </div>

            </div>

            <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SkillNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
