import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

interface teamProps {
    setTeam: (team: string[]) => void;
    team: string[];
}

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

function chooseMember(newMember: string, { team, setTeam }: teamProps) {
    !team.includes(newMember)
        ? setTeam([...team, newMember])
        : setTeam([...team]);
}

export function ChooseTeam(): JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    const clearTeam = () => setTeam([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    chooseMember(option, { team, setTeam })
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
