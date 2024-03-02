import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={22}
		height={22}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10.998 1.5A9.503 9.503 0 0 0 2.378 7H4.75a.75.75 0 0 1 0 1.5H1a1 1 0 0 1-1-1V3.75a.75.75 0 0 1 1.5 0v1.697A10.997 10.997 0 0 1 10.998 0C17.074 0 22 4.925 22 11s-4.926 11-11.002 11C5.014 22 .146 17.223 0 11.275a.75.75 0 0 1 1.5-.037c.126 5.136 4.33 9.262 9.498 9.262 5.248 0 9.502-4.253 9.502-9.5s-4.254-9.5-9.502-9.5Z"
			fill="#D6E8FF"
		/>
		<path
			d="M11.5 6.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L11.5 11.315V6.25Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
