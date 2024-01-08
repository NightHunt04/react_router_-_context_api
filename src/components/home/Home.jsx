import '/src/index.css'

export default function Home() {
    return (
        <div className="w-full font-poppins py-5">
            <div className="w-3/5 px-24 py-12 relative m-auto">
                {/* 1 */}
                <div className="text-5xl font-roboto text-gray-800 flex items-center justify-center">
                    <div className="max-w-md">
                        This <span className="text-red-600 font-black">React</span>
                        &nbsp;site contains the concept of <span className="text-red-600 font-black">Routes</span> 
                         &nbsp;& <span className="text-red-600 font-black">Context API</span> 
                    </div> 
                    <div className="w-full">
                        <img className="w-full transition-transform duration-300 ease-linear transform-gpu hover:scale-105" 
                        src="/src/assets/home-site.svg" alt="*site" />
                    </div>
                </div>

                {/* 2 */}
                <div className="text-5xl font-roboto pt-24 text-gray-800 flex items-center justify-center">
                    <div className="w-full">
                        <img className="w-9/12 transition-transform duration-300 ease-linear transform-gpu hover:scale-105" src="/src/assets/home-visionary.svg" alt="*visionary" />
                    </div>
                    <div className="max-w-md text-right">
                        The <span className="text-red-600">reason</span> for making this site is to <span className="text-red-600">clear</span> the concepts.
                    </div>
                </div>

                {/* 3 */}
                <div className="text-5xl font-roboto pt-24 text-gray-800 flex items-center justify-center">
                    <div className="max-w-md">
                        Also the source <span className="text-red-600">code</span> will be provided on the <span className="text-red-600">Github <i className="fa-brands fa-github"></i></span>
                    </div>
                    <div className="w-full">
                        <img className="w-9/12 m-auto transition-transform duration-300 ease-linear transform-gpu hover:scale-105"
                        src="/src/assets/home-developer.svg" alt="*visionary" />
                    </div>
                </div>
            </div>
        </div>
    )
}