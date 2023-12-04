import axios from "axios";
import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "/images/logo-n-maskot/Sticker-2.png";
import Logo_2 from "/images/logo-n-maskot/Logo-png.png";

export default function Login() {
  const checkToken = localStorage.getItem("token");
  if (checkToken) {
    window.location.href = "/dashboard";
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    // if password less than 8
    if (password.length < 8) {
      setPasswordError(""); // Reset pesan kesalahan password salah
      setPasswordLengthError("Password harus memiliki minimal 8 karakter."); // Pesan password lebih dari 8
      return;
    }

    setForm({
      email,
      password,
    });
  };

  useEffect(() => {
    const login = async () => {
      try {
        if (form.email && form.password) {
          const res = await axios.post(
            " https://sinow-production.up.railway.app/api/v1/auth/login",
            form,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(res.data);
          if (res.data.status === "Success") {
            localStorage.setItem("token", res.data.data.token);
            window.location.href = "/dashboard";
          }
        }
      } catch (error) {
        console.error(error.response.data);
        setPasswordLengthError(""); // Reset pesan kesalahan panjang password
        setPasswordError("Email atau Password salah. Silakan coba lagi."); // Pesan ID atau password salah
        return;
      }
    };
    login();
  }, [form]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-screen w-full">
      <div className="px-[40px] orm-app flex flex-col justify-center md:h-screen lg:py-0">
        <div className=" my-[30px] logo-app md:hidden flex justify-center items-center">
          <img
            src={Logo_2}
            alt=""
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-80 md:h-80 "
          />
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="space-y-4 md:space-y-6 max-w-[400px] w-full mx-auto"
        >
          <h1 className="text-sinow-05 text-xl font-bold md:text-2xl py-[20px]">
            Masuk
          </h1>
          {/* message if ID and password wrong */}
          {passwordError && (
            <p className="text-alert-danger text-sm mt-2">{passwordError}</p>
          )}
          {/* message if passsword less than 8 */}
          {passwordLengthError && (
            <p className="text-red-500 text-sm mt-2">{passwordLengthError}</p>
          )}
          <div>
            <label htmlFor="idAdmin" className="block mb-2 font-bold">
              Email
            </label>
            <input
              type="text"
              className="border text-neutral-05 sm:text-sm rounded-lg block w-full p-3"
              placeholder="Contoh: johndoe@gmail.com"
              required=""
              name="email"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className=" mb-2 font-bold flex items-start"
              >
                Password
              </label>
              <a href="#" className="mb-2 text-sm text-sinow-05 font-semibold">
                Lupa Kata Sandi
              </a>
            </div>
            <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border sm:text-sm rounded-l-lg block w-full p-3 text-neutral-05 border-r-0"
                placeholder="Masukkan Password"
                required=""
                name="password"
              />
              <span
                className="border justify-center px-3 py-4 md:px-3 md:py-4 cursor-pointer rounded-r-lg border-l-0"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <FiEyeOff style={{ color: "#B0B0B0" }} />
                ) : (
                  <FiEye style={{ color: "#B0B0B0" }} />
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-sinow-05 font-semibold rounded-2xl text-center p-3 "
          >
            Masuk
          </button>
        </form>
      </div>

      <div className="border logo-app bg-sinow-05  hidden sm:flex justify-center items-center">
        <img
          src={Logo}
          alt=""
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-80 md:h-80 "
        />
      </div>
    </div>
  );
}
