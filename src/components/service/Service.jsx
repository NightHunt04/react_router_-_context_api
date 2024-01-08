export default function Service() {
    return (
        <div className="w-full font-poppins">
            <div className="w-3/5 m-auto px-24 py-60 flex items-center justify-between">
                <div className="text-lg text-gray-700 max-w-md">
                    As a one-person team, I've crafted this space to showcase and practice the <span className="text-red-600">power</span> of <span className="text-red-600">React Router</span> and the <span className="text-red-600">Context API.</span>
                    <div className="pt-6">Happy <span className="text-red-600">coding!</span></div>
                </div>
                <div>
                    <img className="w-11/12 m-auto transition-transform duration-300 ease-linear transform-gpu hover:scale-105" 
                        src="/src/assets/service-service.svg" alt="service" />
                </div>
            </div>
        </div>
    )
}