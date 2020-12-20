import TextInput from "../forms/TextInput";
import SelectInput from "../forms/SelectInput";
import Steps from "./Steps";
import React from "react";


const StepTwo = ({currentStep, onContinue, onBack, formData, setFormData}) => {

    const genders = ['', 'Male', 'Female', 'Other']

    return <form onSubmit={onContinue}>
        <div className="">
            <div className="">
                {/*Name*/}
                <TextInput label="Name" id="username" onChange={event => setFormData({
                    ...formData,
                    username: event.target.value
                })} value={formData.username} required type="text"/>
            </div>

            {/*Age*/}
            <div className="mt-4">
                <TextInput label="Age" id="age" onChange={event => setFormData({
                    ...formData,
                    age: event.target.value
                })} value={formData.age} required type="number"/>
            </div>

            {/*Gender*/}
            <div className="mt-4">
                <SelectInput values={genders} label="Gender" id="gender" value={formData.gender}
                    onChange={event => setFormData({
                        ...formData,
                        gender: event.target.value
                    })} required/>
            </div>
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
                    Continue
                </button>
            </div>
        </div>
    </form>
}

export default StepTwo