
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
//   console.log(location)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const  {userLogin} = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

     userLogin(email,password)
     .then((userCredential) => {
               Swal.fire({
                 position: "center",
                 icon: "success",
                 title: "Successfully login",
                 showConfirmButton: false,
                 timer: 1500,
               });
               navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
              
              const errorMessage = error.message;
     
               setError(errorMessage)
              // ..
            });
     
  }
    
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#27391C] px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-[#1F7D53] mb-6">
          Welcome Back
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
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

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#1F7D53] text-white py-2 rounded-lg hover:bg-[#255F38] transition-colors"
          >
            Log In
          </button>
        </form>
        <h1 className="text-center mt-4">
          If you don't have an account? please{" "}
          <Link to="/signup" className="text-green-500 hover:text-green-900">
            Signup
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
