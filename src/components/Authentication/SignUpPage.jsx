import "./SignUpPage.css";
import { useState } from "react";
import user from "../../assets/user.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {signUp,Login} from "../../Services/Services";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    name: z.string().min(3, "Name should be at least 3 characters."),
    email: z.string().email({ message: "Please enter valid email" }).min(6),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirm_password: z.string(),
    address: z.string().min(15, "Address must be at least 15 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const SignupPage = () => {
  const navigate=useNavigate()
  const [profilePic, setProfilePic] = useState(null);
  const [fromError,setFormError]=useState("")
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const submit = async(formData) =>{
    try{
      const res=await signUp(formData,profilePic)
      localStorage.setItem("token",res.data.token)
      navigate("/")
    }
    catch(err){
          if (err.response && err.response.status===400){
            setFormError(err.response.data.message)
          
          }

          }
  };
  

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(submit)}
      >
        <h2>SignUp Form</h2>

        {/* Image Upload Section */}
        <div className="image_input_section">
          <div className="image_preview">
            {/* creates a unique url to display images  */}
            <img src={profilePic?URL.createObjectURL(profilePic):user} id="file-ip-1-preview" alt="Preview" />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input type="file" id="file-ip-1"  onChange={(e)=>setProfilePic(e.target.files[0])}  className="image_input" />
        </div>

        {/* Form Inputs */}
        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {formState.errors.name && (
              <em className="form_error">{formState.errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {formState.errors.email && (
              <em className="form_error">{formState.errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {formState.errors.password && (
              <em className="form_error">
                {formState.errors.password.message}
              </em>
            )}
          </div>

          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              id="confirm_password"
              className="form_text_input"
              type="password"
              placeholder="Enter confirm password"
              {...register("confirm_password")}
            />
            {formState.errors.confirm_password && (
              <em className="form_error">
                {formState.errors.confirm_password.message}
              </em>
            )}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="Enter delivery address"
              {...register("address")}
            />
            {formState.errors.address && (
              <em className="form_error">{formState.errors.address.message}</em>
            )}
          </div>
        </div>
        
        {fromError && <em className="form_error">
          {fromError}
          </em>}
        <button className="search_button form_submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;
