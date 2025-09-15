import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = '6a28aef66898f02741c7cd18ed262ace';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const {name, category, recipe, price, _id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api,imageFile,
            { headers: {
                'Content-Type': 'multipart/form-data'
            }}
        );
        if(res.data.success){
            //now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // send menuItem to your server
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with img url',res.data);
    };

    return (
        <div>
            <SectionTitle
                heading="Update an Item"
                subHeading="Refresh Info"
            >

            </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* name */}
                    <div className="my-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input
                                defaultValue={name}
                                type="text"
                                placeholder="Recipe Name"
                                {...register("name", { required: true })}
                                className="input input-bordered w-full"
                            />
                        </label>

                    </div>
                    {/* category and recipe start */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                        <div>
                            {/* category field */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select
                                    defaultValue={category}
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">
                                        select a category
                                    </option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </label>
                        </div>
                        {/* price */}
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    defaultValue={price}
                                    type="number"
                                    placeholder="Price"
                                    {...register("price", { required: true })}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* Text Area */}
                    <div className="mb-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <br />
                            <textarea
                            defaultValue={recipe}
                                className="textarea textarea-bordered h-24 w-full"
                                placeholder="Recipe Details"
                                {...register("recipe", { required: true })}
                            ></textarea>
                        </label>
                    </div>
                    {/* file input */}
                    <div className='mb-6'>
                        <input type="file"
                            className="file-input w-full max-w-xs"
                            {...register("image", { required: true })}
                        />
                    </div>

                    <button className='btn btn-sm bg-[#cb8823] border-0 hover:bg-[#43bb49]'>
                        Update Menu Item <FaUtensils className='ml-4'></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;