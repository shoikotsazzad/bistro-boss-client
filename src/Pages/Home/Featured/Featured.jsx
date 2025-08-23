import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item mt-6 py-2">
            <div >
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center pt- pb-16 px-32">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="font-thin  ">Aug 20, 2025</p>
                    <p className="uppercase my-1 font-bold">Where can i get some?</p>
                    <p className="mb-2">You can order pizza from our Italian section, which offers a variety of freshly baked options including classic Margherita, pepperoni, and our chef’s special flavors. Once you place your order, our servers will carefully prepare and bring it directly to your table, ensuring it is served hot and fresh. If you’d like, I can also recommend some side dishes or beverages that pair perfectly with the pizza to enhance your dining experience. </p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;