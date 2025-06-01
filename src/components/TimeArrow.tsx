import React from "react";
import { DateDescriptor, describeDate } from "../helpers/time";

export default ({date}: { date?: DateDescriptor }) =>
    <div className="date-container">
        <p>
            { describeDate(date) }
        </p>
    </div>
