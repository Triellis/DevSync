import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M2 20h14a2 2 0 0 0 2-2V9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 0 9v9a2 2 0 0 0 2 2Zm5-2v-5h4v5H7ZM2 9.41l7-7 7 7V18h-3v-5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5H2V9.41Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
