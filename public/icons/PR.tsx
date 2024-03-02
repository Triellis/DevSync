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
			d="M1.5 4.75a3.25 3.25 0 1 1 3.995 3.164A.758.758 0 0 1 5.5 8v8a.757.757 0 0 1-.005.086A3.251 3.251 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414A.757.757 0 0 1 4 16V8c0-.029.002-.058.005-.086A3.251 3.251 0 0 1 1.5 4.75ZM4.75 3a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM18.5 16.087a3.251 3.251 0 1 0 1.5 0V7.75A3.75 3.75 0 0 0 16.25 4h-4.064l1.22-1.22a.75.75 0 0 0-1.061-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h4.065a2.25 2.25 0 0 1 2.25 2.25v8.337Zm-1 3.163a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
