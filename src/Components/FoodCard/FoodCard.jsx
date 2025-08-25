import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ ,refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to database
            // console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch the cart to update the cart item
                      refetch();
                }
            })
        } else {
            Swal.fire({
                title: "You are not LoggedIn",
                text: "Please, Login to Add to the Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    navigate('/login', {state: {from: location}})
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Food Image" />
            </figure>
            <p className=" absolute right-0 mr-4 mt-4 px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-blue-500">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name} </h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-orange-400 hover:bg-black border-b-4"
                    >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;