import { type CategoryType } from "@/lib/sanity.types";

export const getRandomCategories = (categories: CategoryType[], maxCount: number) => {
	const randomCount = Math.floor(Math.random() * maxCount) + 1;
	const selectedCategories: CategoryType[] = [];

	const usedIndices = new Set();

	while (selectedCategories.length < randomCount && usedIndices.size < categories.length) {
		const randomIndex = Math.floor(Math.random() * categories.length);

		if (!usedIndices.has(randomIndex)) {
			usedIndices.add(randomIndex);
			const category = categories[randomIndex];

			selectedCategories.push(category);
		}
	}

	return selectedCategories;
};
