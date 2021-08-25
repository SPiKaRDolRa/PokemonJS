import React, { useState, useRef } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const {register,handleSubmit, watch,formState: { errors }} = useForm();

    const onSubmit = (data) => setResult(JSON.parse(JSON.stringify(data)));
    const [result, setResult] = useState('');
    const [show,setShow] = useState(true);

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <p className="titleform">Form And Validation</p>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <label>First Name
                            <input placeholder="Please fill first name"
                                {...register("firstName", {
                                    required: true,
                                    pattern: /^[A-Za-z]+$/i})} />
                        </label>
                            {errors?.firstName?.type === "required" && <p>This field is required</p>}
                            {errors?.firstName?.type === "pattern" && (<p>Alphabetical characters only</p>)}
                        <label>Laste Name
                            <input placeholder="Please fill last name"
                                {...register("lastName", { 
                                    required: true,
                                    pattern: /^[A-Za-z]+$/i })} />
                        </label>
                            {errors?.lastName?.type === "required" && <p>This field is required</p>}
                            {errors?.lastName?.type === "pattern" && (<p>Alphabetical characters only</p>
                            )}
                        <label>E-mail
                            <input placeholder="Please fill email"
                                {...register("email", { 
                                    required: true,
                                    pattern: /\S+@\S+\.\S+/ })} />
                        </label>
                            {errors?.email?.type === "required" && <p>This field is required</p>}
                            {errors?.email?.type === "pattern" && (<p>Email pattern only (much have @ and .)</p>
                            )}
                        <label>Password
                            <input placeholder="Please fill password" type="password" name="password"
                                {...register("password", { 
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[A-Z]).{6,12}$/ })} />
                        </label>
                            {errors?.password?.type === "required" && <p>This field is required</p>}
                            {errors?.password?.type === "pattern" && (<p>6-12 characters (must have One-Uppercase and One-Number)</p>)}
                        <label>Verify Password
                            <input placeholder="Please confirm password" type="password"
                                {...register("confirmpassword", { 
                                    required: true,
                                    validate: value => value === password.current })} />
                        </label>
                            {errors?.confirmpassword?.type === "required" && <p>This field is required</p>}
                            {errors?.confirmpassword?.type === "validate" && (<p>The password not current</p>)}
                        <label>Gender
                            <select {...register("gender", { required: true })}>
                                <option value="" disabled selected>Please choose</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </label>
                            {errors?.gender?.type === "required" && <p>This field is required</p>}
                        <div id="label-sent">
                            <input id="sent" type="submit" value="Sent !"/>
                        </div>
                        {result?<div id="label-sent" className="post">
                            <h6>Firstname : <hl>{result.firstName}</hl></h6>
                            <h6>Lastname : <hl>{result.lastName}</hl></h6>
                            <h6>Email : <hl>{result.email}</hl></h6>
                            <h6>Genter : <hl>{result.gender}</hl></h6>
                        </div>:null}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form
