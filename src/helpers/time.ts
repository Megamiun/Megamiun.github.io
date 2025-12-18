export type DateDescriptor = { month?: number, year: number };

export const numberToMonth: Record<number, string> = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}


export const describeDate = (date?: DateDescriptor) => {
    if (!date)
        return '';

    const monthName = date.month ? numberToMonth[date.month] : undefined;

    if (!monthName)
        return date.year;

    return `${monthName} ${date.year}`;
}