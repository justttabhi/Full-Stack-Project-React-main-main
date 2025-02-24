import React from "react";
import { useForm } from "react-hook-form";
import { AddRegister } from "../../helpers/PostRquest/postRquest";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Registration = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            role: ""
        },
    });

    const handleLogout = (event) => {
        localStorage.clear();
        sessionStorage.clear()
    }

    const onSubmit = (data) => {
        console.log(data); // Handle the form data submission here

        AddRegister(data)
            .then((data) => {
                if (!data.message) {
                    Swal.fire({
                        icon: 'success',

                        text: 'User register successfully',
                    });

                } else {
                    Swal.fire({
                        icon: 'error',

                        text: 'Email already exists.',
                    });
                }

                reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div class="card" style={{ width: "400px" }}>
                <div class="card-body">
                    <h5 class="card-title">Admin Registration</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">
                                User Role
                            </label>
                            <select
                                className="form-control"
                                id="role"
                                {...register("role", {
                                    required: "Select user role",
                                })}
                            >
                                <option value="">Select User</option>
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>

                            </select>
                            {errors.role && (
                                <div className="text-danger">{errors.role.message}</div>
                            )}
                        </div>

                        {/* First Name */}
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                {...register("firstname", {
                                    required: "First Name is required",
                                })}
                            />
                            {errors.firstname && (
                                <div className="text-danger">{errors.firstname.message}</div>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                {...register("lastname", {
                                    required: "Last Name is required",
                                })}
                            />
                            {errors.lastname && (
                                <div className="text-danger">{errors.lastname.message}</div>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className="text-danger">{errors.email.message}</div>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                            {errors.password && (
                                <div className="text-danger">{errors.password.message}</div>
                            )}
                        </div>
                        <div style={{ textAlign: 'right' }}>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                    <Link to="/login" className="dropdown-item" onClick={handleLogout}>
                        <i className="feather icon-lock" /> Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Registration;
