import React, {useState} from "react";
import Steps from "./Steps";
import TextInput from "../forms/TextInput";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";

export default function StepOne({currentStep, onContinue, formData, setFormData}) {
    const {error, setError} = useState("")

    // function signUp(event) {
    //     if (event.target.password.value === event.target["confirm-password"].value) {
    //         fb.auth().createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
    //             .then(onContinue())
    //     } else {
    //         setError("Passwords must match.")
    //     }
    // }

    return (
        <div>
            <form onSubmit={onContinue}>
                <div className="space-y-4" autoComplete="off">

                    {/*Email*/}
                    <TextInput label="Email" id="email" onChange={event => setFormData({
                        ...formData,
                        email: event.target.value
                    })} value={formData.email} required type="email"/>

                    {/*Password*/}
                    <TextInput label="Password" id="password" onChange={event => setFormData({
                        ...formData,
                        password: event.target.value
                    })} value={formData.password} required type="password"/>

                    <TextInput label="Confirm Password" id="confirm-password" onChange={event => setFormData({
                        ...formData,
                        confirmPassword: event.target.value
                    })} value={formData.confirmPassword} error={error} required type="password"/>

                    <h3 className="mt-6 text-gray-400 text-sm">By continuing you agree to Kuff's Terms and Conditions.</h3>
                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        <button type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
                                rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Continue
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}