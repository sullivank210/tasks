import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎄" | "🎃" | "🦃" | "🐰🥚" | "❤️";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❤️");
    function nextYearly(): void {
        const yearlyOrder: Array<Holiday> = ["❤️", "🐰🥚", "🎃", "🦃", "🎄"];
        const i: number = yearlyOrder.findIndex(
            (current: Holiday): boolean => current === holiday
        );
        if (i === 4) {
            setHoliday(yearlyOrder[0]);
        } else {
            setHoliday(yearlyOrder[i + 1]);
        }
    }
    function nextABC(): void {
        const ABCorder: Array<Holiday> = ["🎄", "🐰🥚", "🎃", "🦃", "❤️"];
        const i: number = ABCorder.findIndex(
            (current: Holiday): boolean => current === holiday
        );
        if (i === 4) {
            setHoliday(ABCorder[0]);
        } else {
            setHoliday(ABCorder[i + 1]);
        }
    }
    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={nextYearly}>Advance Yearly</Button>
            <Button onClick={nextABC}>Advance Alphabetically</Button>
            Holiday: {holiday};
        </div>
    );
}
