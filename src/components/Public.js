/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSignIn} from "@fortawesome/free-solid-svg-icons"


const Public = () => {
    const content = (
        <section className="public">
            <header className="text-center">
                <h1>Welcome to <span className="nowrap">EunnyTech!</span></h1>
            </header>

            <main className="public__main">
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-12">
                <div className="col">
                <div className="card">
                <img src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">Happy Families Bring Happy Employees</h5>
                    <p className="card-text">
                    A harmonious and joyful family life enhances employee well-being, fostering 
                    a positive work environment. Contented families 
                    contribute to focused, motivated, and dedicated employees, ultimately fueling organizational success.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://images.unsplash.com/photo-1508361727343-ca787442dcd7?q=80&w=1603&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">The Future is Bright Here At EunnyTech</h5>
                    <p className="card-text">
                    Embracing the future with unwavering optimism fuels employee motivation, sparks creativity, and 
                    ultivates a resilient workforce. The collective anticipation 
                    of success propels the company towards unparalleled achievements and sustained excellence..</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://images.unsplash.com/photo-1528870884180-5649b20f6435?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">Best Technology at your disposal</h5>
                    <p className="card-text">
                    Unrestricted access to cutting-edge technology empowers employees, unlocking limitless potential for efficiency, 
                    collaboration, and innovation. A tech-empowered workforce catalyzes unparalleled productivity, 
                    propelling the company towards unprecedented success..</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://images.unsplash.com/photo-1458014854819-1a40aa70211c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center bold">Your Personal Growth</h5>
                    <p className="card-text">Personal growth is the cornerstone of our corporate success, 
                    fostering innovation, resilience, and adaptability. We want to empowered individuals, constantly evolving and honing skills, drive the 
                    company's prosperity through transformative leadership and unparalleled expertise..</p>
                </div>
                </div>
            </div>
            </div>


            </main>
            <footer>
                <div className="card text-center mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Our valued employees</h5>
                        <p className="card-text">We are here not only to pay you well but to make your working here is easier and memorable.</p>
                        <Link to="/login" className="text-decoration-none fs-5 btn btn-primary">
                    <FontAwesomeIcon icon={faSignIn} className="me-2"/>
                    Employee Login</Link>
                    </div>
                </div>
            </footer>
        </section>

    )
    return content
}
export default Public
