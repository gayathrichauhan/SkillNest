export default function FlipCard({ title, back }) {
    return (
        <div className="group perspective">
            <div className="relative h-44 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front */}
                <div className="absolute inset-0 bg-white border border-green-200 rounded-xl flex items-center justify-center backface-hidden">
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center rotate-y-180 backface-hidden">
                    <p className="text-sm text-gray-700 px-4 text-center">{back}</p>
                </div>

            </div>
        </div>
    );
}
