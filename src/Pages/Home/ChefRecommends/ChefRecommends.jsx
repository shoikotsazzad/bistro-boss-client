import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // Using 'offered' category since 'recommended' doesn't exist in your data
            const chefRecommendedItems = data.filter(item => item.category === 'offered').slice(0, 3);
            setRecommendations(chefRecommendedItems);
        })
    }, []);

    const handleAddToCart = (item) => {
        // Get existing cart from localStorage or initialize empty array
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if item already exists in cart
        const existingItemIndex = existingCart.findIndex(cartItem => cartItem._id === item._id);
        
        if (existingItemIndex > -1) {
            // If item exists, increase quantity
            existingCart[existingItemIndex].quantity += 1;
        } else {
            // If new item, add with quantity 1 and price
            existingCart.push({ 
                ...item, 
                quantity: 1,
                totalPrice: item.price 
            });
        }
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        // Show success message
        alert(`${item.name} added to cart!`);
        
        // Optional: Trigger custom event for cart update
        window.dispatchEvent(new CustomEvent('cartUpdated', { 
            detail: { cart: existingCart } 
        }));
    };

    return (
        <section className="md:m-12 md:pb-10">
            <SectionTitle
                heading="Chef Recommends"
                subHeading="Should Try"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {recommendations.map(item => (
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="rounded-xl h-48 w-full object-cover" 
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.recipe}</p>
                            <div className="flex items-center justify-between w-full">
                                <span className="text-lg font-bold text-yellow-600">
                                    ${item.price.toFixed(2)}
                                </span>
                                <button 
                                    onClick={() => handleAddToCart(item)}
                                    className="btn btn-outline border-0 border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Show message if no recommendations found */}
            {recommendations.length === 0 && (
                <div className="text-center mt-8">
                    <p className="text-gray-500">Loading chef recommendations...</p>
                </div>
            )}
        </section>
    );
};

export default ChefRecommends;