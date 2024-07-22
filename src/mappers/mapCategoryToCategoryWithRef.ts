import { v4 as uuid } from "uuid";
import { type CategoryType } from "@/lib/sanity.types";

type CategoryWithRefType = {
	_key: string;
	_type: "reference";
	_ref: string;
};

export const mapCategoryToCategoryWithRef = (category: CategoryType): CategoryWithRefType => {
	return {
		_key: uuid(),
		_type: "reference",
		_ref: category._id,
	};
};
