import TextInput from "../forms/TextInput";
import Steps from "./Steps";
import React from "react";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";


const StepThree = ({currentStep, onBack, formData, setFormData}) => {
    const router = useRouter()

    function createAccount() {
        event.preventDefault()
        fb.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .catch(error => {
                let errorCode = error.code
                let errorMessage = error.message
                console.log(error.message)
            })
        fb.firestore().collection("accounts").doc().set({
            username: formData.username,
            email: formData.email,
            age: formData.age,
            gender: formData.gender,
        })
        router.push('/dashboard')
    }

    return <form onSubmit={createAccount}>
        <div className="space-y-4">
            <h1>Name: {formData.username}</h1>
            <h1>Email: {formData.email}</h1>
            <h1>Age: {formData.age}</h1>
            <h1>Gender: {formData.gender}</h1>
        </div>

        {/*Bottom of Forum*/}
        <div className="flex justify-between items-center mt-10">
            <Steps step={currentStep + 1} totalSteps={3}/>
            <div className="flex justify-between space-x-2">
                <button type="button" onClick={onBack}
                        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                    Back
                </button>
                <button type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
                        rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Create Account
                </button>
            </div>
        </div>
    </form>
}

export default StepThree