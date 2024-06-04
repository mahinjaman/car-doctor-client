import { Link } from 'react-router-dom';
import Img from "../assets/images/login/login.svg";
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import useAuthInfo from '../Hooks/useAuthInfo';
const SignUp = () => {

  const { createUser } = useAuthInfo()

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get("email");
      const password = formData.get("password");
      const loginData = {
        name,
        email,
        password,
      };
      console.log(loginData);
      createUser(email, password)
      .then(result =>{
        console.log(result);
        if(result.user){
          Swal.fire({
            title: "Successfully created",
            text: "Congratulations...! Your account has been created successfully",
            icon: "success",
          });
          updateProfile(result.user, {
            displayName: name,
          });
        }
      })
      .catch(err =>{
        console.log(err);
        const errorMessage = err.message.split('/')[1];
        Swal.fire({
          title: "Something went wrong",
          text: errorMessage,
          icon: "error",
        });
      })
    };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
        <div>
          <img src={Img} alt="" />
        </div>

        <div>
          <form className="card-body" onSubmit={handleSubmit}>
            <div>
              <h1 className="text-3xl font-bold text-center">Please Sign Up</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
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
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Already Have An Account? logIn
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

export default SignUp;