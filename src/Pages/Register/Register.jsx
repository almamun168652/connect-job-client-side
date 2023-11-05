import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const Register = () => {

    const [error, setError] = useState('');
    const { createUser, profileUpdate } = useContext(AuthContext);




    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');

        if (password.length < 6) {
            setError('Password should have at least 6 characters or longer');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError('Your password should heve at least one uppercase characters and one speacial character.')
            return;
        }

        if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
            setError('Your password should have at least one special character.');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res);
                profileUpdate(name, photo)
                    .then((result) => {
                        console.log("update", result.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                swal("Good job!", "Registration Successfully!", "success");
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            });

        e.target.name.value = '';
        e.target.photo.value = '';
        e.target.email.value = '';
        e.target.password.value = '';

    }

    return (
        <div>
            <div className="container mx-auto ">
                <div className=" my-20">
                    <div className="border p-5 w-full max-w-sm mx-auto space-y-6">
                        <h2 className="text-2xl font-bold">Register Here</h2>
                        {error ? <p className="text-red-600 max-w-[400px] text-sm text-center relative -bottom-4">{error}</p> : ''}
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Name"

                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Email"

                                />
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Password"

                                />
                                <input
                                    type="text"
                                    name="photo"
                                    id=""
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Photo URL"

                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#152475] hover:bg-[#152475] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center "
                            >
                                Register
                            </button>
                            <p className="text-center">
                                Already have an account? {" "}
                                <Link className="text-base text-[#152475] underline" to="/login">
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Register;