export default function About() {
    return (
        <div className="w-full font-poppins">
            <div className="w-3/5 px-24 m-auto py-60 flex items-center justify-between">
                {/* image */}
                <div className="w-3/5 m-auto transition-transform duration-300 ease-linear transform-gpu hover:scale-105">
                    <img src="/src/assets/about-profile.svg" alt="profile" />
                </div>
                <div className="text-lg text-gray-700 max-w-sm text-right">
                    <div>Hello! I'm <span className="text-red-600">Jeet</span>, the sole developer behind this website. Here, I've crafted a space dedicated to practicing and mastering <span className="text-red-600">React Router</span> and the <span className="text-red-600">Context API.</span></div>
                    <div>As the only person involved in this project, my goal is to provide a practical and hands-on experience for honing these essential <span className="text-red-600">React skills.</span></div>
                </div>
            </div>
        </div>
    )
}