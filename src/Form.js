import React, { useState, useRef } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const {register,handleSubmit, watch,formState: { errors }} = useForm();

    const onSubmit = (data) => setResult(JSON.stringify(data));
    const [result, setResult] = useState("");

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <p className="titleform">Form and validation</p>
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
                            {errors?.password?.type === "pattern" && (<p>6-12 characters,must have one-Uppercase and one-Number</p>
                            )}
                        <label>Verify Password
                            <input placeholder="Please confirm password" type="password"
                                {...register("confirmpassword", { 
                                    required: true,
                                    validate: value => value === password.current })} />
                        </label>
                            {errors?.confirmpassword?.type === "required" && <p>This field is required</p>}
                            {errors?.confirmpassword?.type === "validate" && (<p>The password not current</p>
                            )}
                        <label>Gender
                            <select {...register("gender", { required: true })}>
                                <option value="" disabled selected>Please choose</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                            </select>
                        </label>
                            {errors?.gender?.type === "required" && <p>This field is required</p>}
                        <div id="label-sent">
                            <input id="sent" type="submit" value="Sent !"/>
                        </div>
                        <div id="label-sent">
                            <p>{result}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
