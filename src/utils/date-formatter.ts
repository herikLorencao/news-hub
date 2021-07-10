const format = (dateIso: string): string => {
    if (dateIso.length == 0) return "";
    const date = new Date(dateIso);
    const formatter = new Intl.DateTimeFormat("pt-br");
    return formatter.format(date);
};

export default format;
