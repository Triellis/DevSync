import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 0H2C.897 0 0 .897 0 2v18l5.333-4H18c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2Zm0 14H4.667L2 16V2h16v12Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
