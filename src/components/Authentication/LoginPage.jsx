import React from "react";
import { useState } from "react";
// import { useRef } from 'react'
import { useForm } from "react-hook-form";
import "./LoginPage.css";

const LoginPage = () => {
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

  const [user, setUser] = useState({
    name: "",
    phone: "",
  });

  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     console.log(user)
  //   }

  const { register, handleSubmit, formState } = useForm();
  console.log(formState.errors);
  const submit = (formdata) => console.log(formdata);

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
            <label htmlFor="name">Name</label>
            <input
              type="text"
                id="name"
              placeholder="Enter Name"
              className="form_text_input"
              {...register("name", { required: true, minLength: 3 })}
            />

            {formState.errors.name &&
              formState.errors.name.type === "required" && (
                <em className="form_error">Please enter your name</em>
              )}

            {formState.errors.name &&
              formState.errors.name.type === "minLength" && (
                <em className="form_error">Name should be greater</em>
              )}
          </div>
          <div>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="number"
              id="phonenumber"
              placeholder="Enter Your Number"
              className="form_text_input"
              {...register("phone", { valueAsNumber: true })}
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
