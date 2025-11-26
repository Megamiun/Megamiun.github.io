import React from "react";
import { DateDescriptor, describeDate } from "../helpers/time";

export default ({date, endDate}: { date?: DateDescriptor, endDate?: DateDescriptor }) =>
    <div className="date-container">
        <p>
            { describeDate(date) } { endDate != undefined ? ` - ${describeDate(date)}` : null }
        </p>
    </div>
