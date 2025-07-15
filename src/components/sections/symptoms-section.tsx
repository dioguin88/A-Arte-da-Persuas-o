"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MicOff, EyeOff, UserX, Frown, Briefcase } from "lucide-react";

const symptoms = [
    { text: "Me interrompem quando falo", icon: <MicOff className="h-5 w-5 text-primary/80" /> },
    { text: "Ignoram minhas ideias no trabalho", icon: <EyeOff className="h-5 w-5 text-primary/80" /> },
    { text: "Tenho dificuldade de convencer pessoas", icon: <UserX className="h-5 w-5 text-primary/80" /> },
    { text: "Sinto que as pessoas não me respeitam naturalmente", icon: <Frown className="h-5 w-5 text-primary/80" /> },
    { text: "Já perdi oportunidades por não saber me expressar bem", icon: <Briefcase className="h-5 w-5 text-primary/80" /> },
];

export function SymptomsSection() {
    const [symptomsChecked, setSymptomsChecked] = useState(0);

    const handleSymptomCheck = (checked: boolean | 'indeterminate') => {
        setSymptomsChecked(prev => checked ? prev + 1 : prev - 1);
    };

    return (
        <section className="mx-auto max-w-2xl">
            <Card className="p-6 shadow-xl transform -rotate-1 border-b-4 border-primary/50">
            <h2 className="text-center font-headline text-2xl font-bold md:text-3xl">Diagnóstico Rápido</h2>
            <p className="mt-2 text-center text-muted-foreground">Se você marcar 3 ou mais, esta página foi feita pra você.</p>
            <div className="mt-6 space-y-4">
                {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-md border bg-background p-4 shadow-sm transition-transform hover:scale-105">
                    {symptom.icon}
                    <Checkbox id={`symptom-${index}`} onCheckedChange={handleSymptomCheck} />
                    <label
                    htmlFor={`symptom-${index}`}
                    className="flex-1 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    {symptom.text}
                    </label>
                </div>
                ))}
            </div>
            {symptomsChecked > 0 && (
                <p className="mt-6 text-center text-lg font-bold text-primary animate-pulse">
                    {symptomsChecked >= 3 
                    ? "Este curso foi feito para você. Continue..." 
                    : "Continue... você está no caminho certo para resolver isso."}
                </p>
            )}
            </Card>
        </section>
    )
}
