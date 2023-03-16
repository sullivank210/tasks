import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");

    const checkNumerical = parseInt(requested) || 0;

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            Number attempts remaining: {remaining}
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setRemaining(remaining - 1)}
                disabled={remaining === 0}
            >
                Use
            </Button>
            <Button onClick={() => setRemaining(checkNumerical + remaining)}>
                Gain
            </Button>
        </div>
    );
}
