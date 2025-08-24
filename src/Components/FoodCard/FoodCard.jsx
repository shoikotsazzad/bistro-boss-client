

const FoodCard = ({item}) => {

    const {name, image, price, recipe } = item;

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
                    <button className="btn btn-outline border-0 border-orange-400 hover:bg-black border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;