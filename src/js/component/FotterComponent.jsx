import React from 'react'

export const FotterComponent = () => {
    return (
        <>



            <div className="bg-dark mt-2">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top bg-dark text-white ms-5">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/800px-Gay_Pride_Flag.svg.png" style={{ width: '200px' }}></img>
                        </a>
                        <p className="">© 2022. Made with love by the Spain 44 Cohort</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Mentor</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="https://github.com/hchocobar" className="nav-link text-light p-0 text-white text" target="blank">Hector Chocobar</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Mentor Assistant</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link text-light p-0 text-white" target="blank">Raimundo del Rio</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Students</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link text-light p-0 text-white" target="blank">Hector Padrón</a></li>
                            <li className="nav-item mb-2"><a href="https://github.com/Yanfep" className="nav-link text-light p-0" target="blank">Yanfe Pedroza</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link text-light p-0 text-white" target="blank">El Hadj Arroyo</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}