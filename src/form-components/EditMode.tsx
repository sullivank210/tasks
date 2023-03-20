import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Turn on Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="change-editMode-switch"
                label="Turn on Edit Mode"
                checked={mode}
                onChange={updateMode}
            />
            {mode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Group controlId="enter-name-textbox">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
            <div>
                {name} is {!isStudent && "not "}a student
            </div>
        </div>
    );
}
