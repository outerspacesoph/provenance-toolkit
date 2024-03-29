import React, { FC } from "react";
import ProgressBarUploader from "../components/ProgressBarUploader";

const Page: FC = () => {
	return (
		<div className="mx-auto py-10 bg-[#07081a] text-blue-500 flex flex-col-reverse gap-10 md:flex-row justify-center items-start">
			<div className="p-10 w-full md:w-1/3 md:p-0">
				<ProgressBarUploader />{" "}
			</div>

			</div>
	);
};

export default Page;
