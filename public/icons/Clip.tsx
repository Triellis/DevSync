import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={12}
		height={19}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.19.735A3.935 3.935 0 0 1 8.643 4.41l-.006 8.846a2.629 2.629 0 0 1-5.257 0V6.5a.75.75 0 0 1 1.5 0v6.736a1.129 1.129 0 0 0 2.257 0l.006-8.84a2.435 2.435 0 1 0-4.87 0l.001.009v8.908a3.727 3.727 0 1 0 7.453 0V4.988a.75.75 0 1 1 1.5 0v8.31a5.229 5.229 0 0 1-8.95 3.739 5.227 5.227 0 0 1-1.503-3.74V4.41A3.935 3.935 0 0 1 3.19.735Z"
			fill="#2B6CB0"
		/>
	</svg>
);

export default SvgComponent;
