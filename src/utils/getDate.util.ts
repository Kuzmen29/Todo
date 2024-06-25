export function getDate(date : Date) {
    date = new Date(date);
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
}