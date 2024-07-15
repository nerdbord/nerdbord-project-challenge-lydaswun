export const formatDate = (date: string | Date): string => {
	const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };

	if (typeof date === "string") {
		date = new Date(date);
	}

	return new Intl.DateTimeFormat("en-US", options).format(date);
};
