import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaStar, FaRegStar } from "react-icons/fa";
import Swal from 'sweetalert2';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const reviewData = {
            name: user?.displayName,
            email: user?.email,
            rating: rating,
            recipe: data.recipe,
            details: data.details,
            suggestion: data.suggestion,
            date: new Date().toISOString()
        };

        try {
            // Here you would typically send the review data to your backend
            console.log('Review Data:', reviewData);
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Review submitted successfully!',
                showConfirmButton: false,
                timer: 1500,
                background: '#1f2937',
                color: '#f97316',
                iconColor: '#f97316'
            });
            
            // Reset form
            reset();
            setRating(0);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
                background: '#1f2937',
                color: '#f97316',
                iconColor: '#ef4444'
            });
        }
    };

    return (
        <div className="w-full px-4 md:px-8 py-6 bg-gray-900 min-h-screen">
            <SectionTitle
                subHeading={"Tell us more"}
                heading={"Rate and review"}
            />
            
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl  border-gray-700 p-6 md:p-8 mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Rating Section */}
                    <div className="text-center bg-gray-750 rounded-lg p-6 border border-gray-600">
                        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">
                            🍽️ Rate Bistro Boss
                        </h3>
                        <div className="flex justify-center items-center gap-3 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="text-4xl md:text-5xl transition-all duration-300 hover:scale-125 transform focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                >
                                    {star <= (hoverRating || rating) ? (
                                        <FaStar className="text-orange-400 drop-shadow-lg" />
                                    ) : (
                                        <FaRegStar className="text-gray-500 hover:text-orange-300" />
                                    )}
                                </button>
                            ))}
                        </div>
                        {rating > 0 ? (
                            <p className="text-lg text-white font-semibold">
                                You rated: {rating} star{rating > 1 ? 's' : ''} - 
                                {rating === 5 && " Excellent!"}
                                {rating === 4 && " Very Good!"}
                                {rating === 3 && " Good!"}
                                {rating === 2 && " Fair"}
                                {rating === 1 && " Needs Improvement"}
                            </p>
                        ) : (
                            <p className="text-red-400 text-lg font-medium animate-pulse">
                                Please select a rating to continue
                            </p>
                        )}
                    </div>

                    {/* Form Fields Container */}
                    <div className="space-y-6">
                        {/* Which recipe you liked most */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-orange-300 flex items-center gap-2">
                                    Which recipe you liked most?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Grilled Chicken, Beef Steak, Caesar Salad..."
                                className="input bg-gray-700 border-gray-600 text-white placeholder-gray-400 w-full text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                                {...register("recipe", { 
                                    required: "Please tell us which recipe you liked most" 
                                })}
                            />
                            {errors.recipe && (
                                <span className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                    {errors.recipe.message}
                                </span>
                            )}
                        </div>

                        {/* Suggestion */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-orange-300 flex items-center gap-2">
                                    Do you have any suggestion for us?
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., More vegetarian options, faster service, music volume..."
                                className="input bg-gray-700 border-gray-600 text-white placeholder-gray-400 w-full text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                                {...register("suggestion", { 
                                    required: "Please provide your suggestion" 
                                })}
                            />
                            {errors.suggestion && (
                                <span className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                    {errors.suggestion.message}
                                </span>
                            )}
                        </div>

                        {/* Review Details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-orange-300 flex items-center gap-2">
                                    Kindly express your experience in detail
                                </span>
                            </label>
                            <br></br>
                            <textarea
                                placeholder="Share your dining experience... What did you love? How was the service? Ambiance? Food quality? We value your detailed feedback!"
                                className="textarea w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-32 text-base resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                                {...register("details", { 
                                    required: "Please provide detailed review",
                                    minLength: {
                                        value: 20,
                                        message: "Review must be at least 20 characters long"
                                    }
                                })}
                            ></textarea>
                            {errors.details && (
                                <span className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                    {errors.details.message}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                        <button
                            type="submit"
                            disabled={rating === 0}
                            className="btn bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-none px-10 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:from-gray-600 disabled:to-gray-700 min-w-[200px]"
                        >
                            {rating === 0 ? "⚠️ Select Rating First" : "Send Review"}
                        </button>
                    </div>
                </form>

                

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-lg border border-orange-600/30">
                    <p className="text-orange-200 text-center text-sm">
                        Thank you for taking the time to review Bistro Boss. Your feedback helps us serve you better!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddReview;