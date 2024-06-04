import Img from "../assets/images/login/login.svg";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAuthInfo from "../Hooks/useAuthInfo";


const LogIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { signIn } = useAuthInfo()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          Swal.fire({
            title: "Logged Successfully",
            text: "Congratulations...! Your account has been logged successfully",
            icon: "success",
          });
        }

        navigate(location.state ? location.state : "/");

      })
      .catch((err) => {
        console.log(err);
        const errorMessage = err.message.split("/")[1];
        Swal.fire({
          title: "Something went wrong",
          text: errorMessage,
          icon: "error",
        });
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
      <div>
        <img src={Img} alt="" />
      </div>

      <div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-3xl font-bold text-center">Please Login</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <div className="flex justify-between">
              <label className="label">
                <button className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>

              <label className="label">
                <Link to={"/signup"} className="label-text-alt link link-hover">
                  Don't Have An Account? SignUp
                </Link>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
