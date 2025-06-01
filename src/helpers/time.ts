export type DateDescriptor = { month?: number, year: number };

export const describeDate = (date?: DateDescriptor) => {
    if (!date)
        return '';

    const paddedMonth = date.month?.toString()?.padStart(2, '0');

    if (!paddedMonth)
        return date.year;

    return `${paddedMonth}/${date.year}`;
}