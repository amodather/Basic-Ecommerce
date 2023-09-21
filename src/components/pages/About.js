import "./About.css"
import about from '../../components/Images/about.jpg'
function About() {
    return (
        <div className="about-container">
            <div className="row w-100 mx-auto">
                <div className="col p-5">
                    <h2>About Us</h2>
                    <p>E-commerce is a leading online retail company that specializes in providing a wide range of products to customers worldwide. With a user-friendly website and a seamless shopping experience, E-commerce has established itself as a trusted destination for online shoppers.
                        At E-commerce, customers can explore an extensive catalog of products in various categories, including electronics, fashion, Jewelery and more. The company collaborates with reputable brands and suppliers to ensure a diverse selection of high-quality merchandise.
                        One of the key features that sets E-commerce apart is its commitment to customer satisfaction. The company prioritizes delivering exceptional service, offering secure payment options, reliable shipping, and hassle-free returns. Furthermore, E-commerce provides detailed product descriptions, customer reviews, and ratings, empowering shoppers to make informed purchasing decisions.</p>
                </div>
                <div className="col p-0">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;