import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} placeholder="First name" />
                        <input {...register("lastName")} placeholder="Last name" />
                        <input {...register("firstName")} placeholder="First name" />
                        <input {...register("lastName")} placeholder="Last name" />
                        <input {...register("firstName")} placeholder="First name" />
                        <input {...register("lastName")} placeholder="Last name" />
                        <p>{result}</p>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
