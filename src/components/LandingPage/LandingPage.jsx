import React from 'react'

const LandingPage = () => {
    return (
        <div className="bg-background">
            <div className="relative isolate lg:px-8">

                <div className="mx-auto  max-w-2xl sm:py-48 lg:py-56">
                    <div className="hiddentext-accent sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative text-accent rounded-full px-3 py-1 text-sm leading-6 ">
                            Announcing our next round of funding. <a href="#" className="font-semibold hover:text-accent-hovert"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-accent hover:text-accent-hover sm:text-6xl">Data to enrich your online business</h1>
                        <p className="mt-6 text-lg  leading-8 text-accent hover:text-accent-hover">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-accent hover:bg-accent-hover  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                            <a href="#" className="text-sm font-semibold  leading-6 text-accent hover:text-accent-hover">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LandingPage  