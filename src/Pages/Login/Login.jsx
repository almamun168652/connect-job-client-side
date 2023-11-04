
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {

    const [err, setErr] = useState('');

    const { googleLogin, logInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res);
                swal("Good job!", "Request Successfully!", "success");
                navigate(location.state ? location.state : '/');
            })
            .catch(err => {
                setErr(err.code);
                console.log(err)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErr('');

        logInUser(email, password)
            .then(res => {
                console.log(res);
                swal("Good job!", "Login Successfully!", "success");
                navigate(location.state ? location.state : '/');
            })
            .catch(err => {
                setErr(err.code);
            });

        e.target.email.value = '';
        e.target.password.value = '';

    }

    return (
        <div>
            <div className="container mx-auto ">
                <div className=" my-20">
                    <div className="border p-5 w-full max-w-sm mx-auto space-y-6">
                        <h2 className="text-2xl font-bold">Login</h2>
                        {err ? <p className="text-red-600 max-w-[400px] text-sm text-center relative -bottom-4">{err}</p> : ''}
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Username or Email"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5 "
                                    placeholder="Password"
                                    
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center "
                            >
                                Login
                            </button>
                            <p className="text-center">
                                Don{"'"}t have an account?{" "}
                                <Link
                                    className="text-base text-rose-700 underline"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="p-5 w-full max-w-sm mx-auto">
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-600 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-600 ">
                            <p className="mx-4 mb-1 text-center font-semibold ">Or</p>
                        </div>
                        <div className='text-center'>
                            <button onClick={handleGoogleLogin} className='bg-slate-100 text-black font-semibold border shadow-lg rounded-lg px-4 py-2'>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;