import React from "react";
import { useState } from "react";
// import { useRef } from 'react'
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "../../Services/Services";


const schema = z.object({
  email: z.string().email({ message: "Enter the correct email" }).min(3),
  password: z.string().min(8, "Enter correct password"),
});

const LoginPage = () => {
  const [fromError,setFormError]=useState("")
 
  //   const nameRef=useRef(null)
  //   const phoneRef=useRef(null)
  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     const user={
  //         name:"",
  //         phone:0
  //     }
  //     user.name=nameRef.current.value
  //     user.phone=parseInt(phoneRef.current.value)
  //     console.log(user)
  //   }

  //   const [user, setUser] = useState({
  //     name: "",
  //     phone: "",
  //   });

  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     console.log(user)
  //   }

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const submit = async (formData) => {
    try {
     const res= await Login(formData);
     localStorage.setItem("token",res.data.token)
     window.location='/'
   
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setFormError(err.response.data.message);
      }
    }
  };
  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(submit)}
      >
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form_text_input"
              {...register("email")}
            />

            {formState.errors.email && (
              <em className="form_error">{formState.errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="form_text_input"
              {...register("password")}
            />
            {formState.errors.password && (
              <em className="form_error">
                {formState.errors.password.message}
              </em>
            )}
          </div>
          {
            fromError && <em className="form_error">{fromError}</em>
          }
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
