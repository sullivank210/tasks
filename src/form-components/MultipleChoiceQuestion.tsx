import React, { useState } from "react";

/* 
The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown, and then displays 
whether they got it correct or incorrect. The component takes in a parameter representing the expectedAnswer and also a 
parameter representing the list of options.

- You will need a state to represent the user’s currently selected choice.
- The initial state of the selected choice is the first element of the options list.
- When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    return (
        <div>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
