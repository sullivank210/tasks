import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import cuteTurtle from "./cuteTurtle.png";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript.
            </header>
            <h1>Owner: Kaitlyn Sullivan</h1>
            <p>Hello World!</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <img src={cuteTurtle} alt="A cute baby turtle" />
                        <div
                            style={{
                                width: 150,
                                height: 25,
                                backgroundColor: "red"
                            }}
                        >
                            ugly red box col1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 150,
                                height: 25,
                                backgroundColor: "red"
                            }}
                        >
                            <span style={{ color: "white" }}>
                                Turtle Fun Facts:
                            </span>
                        </div>
                        <ul>
                            <li>
                                There are 356 known living species of turtles
                                worldwide.
                            </li>
                            <li>Turtles can live up to 200 years!</li>
                            <li>
                                All tortoises are turtles, yet not all turtles
                                are tortoises.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
