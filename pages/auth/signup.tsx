import React, {useState} from "react";
import StepOne from "../../components/signup/StepOne";
import TextInput from "../../components/forms/TextInput";
import Steps from "../../components/signup/Steps";
import Button from "../../components/forms/Button";

export default function SignUp({onChange}) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        age: "",
        gender: ""
    })

    function signUp(event) {
        event.preventDefault()
    }

    console.log(formData)

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="text-center rounded-lg border border-gray-200 p-8">
                    <form onSubmit={signUp} className="space-y-4">
                        <h1 className="text-4xl font-bold">✌️ Create an Account</h1>

                        {/*Username*/}
                        <TextInput label="Name" id="username"
                            onChange={event => setFormData({
                                ...formData,
                                username: event.target.value,
                            })} value={formData.username} required
                        />

                        {/*Email*/}
                        <TextInput label="Email" id="email"
                                   onChange={event => setFormData({
                                       ...formData,
                                       email: event.target.value,
                                   })} value={formData.email} required
                        />

                        {/*Password*/}
                        <TextInput label="Password" type="password" id="password" required/>

                        {/*Confirm Password*/}
                        <TextInput label="Confirm Password" type="password" id="confirm-password" required/>

                        {/*Age*/}
                        <TextInput label="Age" id="age"
                                   onChange={event => setFormData({
                                       ...formData,
                                       age: event.target.value,
                                   })} value={formData.age} required
                        />

                        {/*Gender*/}
                        <TextInput label="Gender" id="gender"
                                   onChange={event => setFormData({
                                       ...formData,
                                       gender: event.target.value,
                                   })} value={formData.gender} required
                        />

                        {/*Buttons*/}
                        <div className="text-right pt-4">
                            <Button variant="filled" sizes="lg" color="primary" type="submit">Create Account</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}