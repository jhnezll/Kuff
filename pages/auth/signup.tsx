import React, {useState} from "react";
import StepOne from "../../components/signup/StepOne";

export default function SignUp() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        age: "",
        gender: "",
    })

    const onContinue = (event) => {
        setCurrentStepIndex(prevState => ++prevState)
        console.log(formData)
    }

    const steps = [
        //Step 1
        {
            title: "Sign Up",
            content: <StepOne
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
            />
        },
        {
            title: "Details",
            content: <StepOne
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                // onBack={() => setCurrentStepIndex(0)}
            />
        }
    ]

    const currentStep = steps[currentStepIndex]

    return(
        <div className="h-screen flex justify-center items-center md:bg-gray-50">
            <div className="p-8 md:border border-gray-200 rounded-lg md:shadow-lg max-w-xl w-full text-left bg-white">
                <h1 className="text-4xl font-bold text-center text-gray-900">{currentStep.title}</h1>
                <div className="mt-8">
                    {currentStep.content}
                </div>
            </div>
        </div>
    )
}