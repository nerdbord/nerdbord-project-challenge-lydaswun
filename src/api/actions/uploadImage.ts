/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { createWriteStream, createReadStream, unlinkSync } from "fs";
import { join, basename } from "path";
import axios from "axios";

const sanityClient = axios.create({
	baseURL: "https://dr96nfh9.api.sanity.io/v2022-03-07",
	headers: {
		Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
	},
});

export const uploadImage = async (url: string) => {
	const response = await axios({
		url,
		method: "GET",
		responseType: "stream",
	});

	const filePath = join(process.cwd(), "temp.jpg");
	const writer = createWriteStream(filePath);

	response.data.pipe(writer);

	await new Promise((resolve, reject) => {
		writer.on("finish", resolve);
		writer.on("error", reject);
	});

	const file = createReadStream(filePath);
	const { data: imageAsset } = await sanityClient.post(
		`/assets/images/production?filename=${basename(filePath)}`,
		file,
		{
			headers: {
				"Content-Type": "application/octet-stream",
			},
		},
	);

	unlinkSync(filePath);

	return imageAsset;
};
