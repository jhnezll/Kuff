import React, {useState} from "react";
import Steps from "./Steps";
import TextInput from "../forms/TextInput";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";



export default function StepOne({currentStep, onContinue, formData, setFormData}) {
    const {error, setError} = useState()

    function signUp(event) {
        event.preventDefault()
        if (event.target.password.value === event.target["confirm-password"].value) {
            fb.auth().createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
                .then(onContinue())
        } else {
            setError("Passwords must match.")
        }
    }

    return (
        <div>
            <form onSubmit={signUp}>
                <div className="space-y-4" autoComplete="off">

                    {/*Email and Password*/}
                    <TextInput label="Email" id="email" type="email" required/>
                    <TextInput label="Password" type="password" id="password" error={error} required/>
                    <TextInput label="Confirm Password" type="password" id="confirm-password" error={error} helperText={error} required/>

                    <h3 className="mt-6 text-gray-400 text-sm">By continuing you agree to Kuff's Terms and Conditions</h3>
                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={1}/>
                    <div className="flex justify-between space-x-2">
                        <button type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
                        rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                            Continue
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}