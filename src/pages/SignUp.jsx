import React, { useContext, useState } from "react";
import { Mail, Phone, User, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const { userSignup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { firstName, lastName, phoneNumber, email, password };

    userSignup(email, password)
      .then((userCredential) => {
        // console.log(userCredential)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully created account",
          showConfirmButton: false,
          timer: 1500,
        });

        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
          photoURL: "https://i.pravatar.cc/40",
        });
        navigate("/");
      })
      .catch((error) => {
        //  const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        // ..
      });

    // navigate("/welcome"); // Example redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#27391C] px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-[#1F7D53] mb-6">
          Create Account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#255F38]">
              First Name
            </label>
            <div className="relative">
              <User
                className="absolute top-2.5 left-3 text-[#1F7D53]"
                size={18}
              />
              <input
                type="text"
                name="first_name"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#255F38]">
              Last Name
            </label>
            <div className="relative">
              <User
                className="absolute top-2.5 left-3 text-[#1F7D53]"
                size={18}
              />
              <input
                type="text"
                name="last_name"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#255F38]">
              Phone
            </label>
            <div className="relative">
              <Phone
                className="absolute top-2.5 left-3 text-[#1F7D53]"
                size={18}
              />
              <input
                type="tel"
                name="phoneNumber"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#255F38]">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute top-2.5 left-3 text-[#1F7D53]"
                size={18}
              />
              <input
                type="email"
                name="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#255F38]">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute top-2.5 left-3 text-[#1F7D53]"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-[#1F7D53]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F7D53] text-white py-2 rounded-lg hover:bg-[#255F38] transition-colors"
          >
            Sign Up
          </button>
        </form>
        <h1 className="text-center mt-4">
          Already have an account? please <Link to='/login' className="text-green-500 hover:text-green-900">Login</Link>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
