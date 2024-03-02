import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0ZM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
