import React from 'react';
import { useForm } from 'react-hook-form';
import { userLogin } from '../../helpers/PostRquest/postRquest';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    
    // useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        userLogin(data)
            .then((response) => {
                if (!response.message) {
                    localStorage.setItem('auth-role', JSON.stringify(response));
                    navigate('/admin-registration');
                    
                } else {
                    Swal.fire({
                        icon: 'error', 
                        title: 'User not found',
                        text: 'Incorrect username or password.',
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'User not found',
                    text: 'Incorrect username or password.',
                });
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw', backgroundColor: '#f8f9fa' }}>
            <div className="login-form bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            id="username"
                            {...register('username', { required: 'Username is required' })}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
