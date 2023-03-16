import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "FireBrick",
    "LightCoral",
    "Blue",
    "LightBlue",
    "BlueViolet",
    "DarkSeaGreen",
    "LightGreen",
    "LightSalmon"
];

function ColorBox({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "120px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "10px"
            }}
        >
            {color}
        </div>
    );
}

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((chosen: string) => (
                <Form.Check
                    key={chosen}
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id={"responce-" + chosen}
                    label={chosen}
                    value={chosen}
                    checked={color === chosen}
                ></Form.Check>
            ))}
            <ColorBox color={color}></ColorBox>
        </div>
    );
}
