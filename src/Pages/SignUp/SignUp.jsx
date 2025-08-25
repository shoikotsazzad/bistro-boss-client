import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const userInfo = {
                name: data.name,
                email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId){
                    console.log('User added to the database')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

            navigate('/');
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true,minLength:8, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="text-red-600">Password is required (Minimum 8 Charecter)</span>}
                            <hr />
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <div className="text-center md:m-4">
                    <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;