"use client"
import KeyValueArea from '@/components/account-setup/data-enumerator/key';
import React, { useState } from 'react';

const DataEnumeratorPage: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleSkip = () => {
        // Handle skip logic (e.g., redirect to dashboard)
        console.log('Skipped!');
    };

    return (
        
            <KeyValueArea />

        
    );
};

export default DataEnumeratorPage;
