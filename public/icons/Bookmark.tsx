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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.56 0h9.63a2.756 2.756 0 0 1 2.747 2.748V18.563a.688.688 0 0 1-1.117.536l-3.437-2.75.859-1.073 2.32 1.856V2.752a1.381 1.381 0 0 0-1.376-1.377H7.564a1.381 1.381 0 0 0-1.377 1.376v.687H4.813v-.69A2.756 2.756 0 0 1 7.56 0Z"
			fill="#D6E8FF"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M4.81 3.438h8.94v.687l.002-.687A2.756 2.756 0 0 1 16.5 6.186v15.127a.688.688 0 0 1-1.13.525L9.28 16.711l-6.088 5.127a.688.688 0 0 1-1.13-.526V6.187A2.756 2.756 0 0 1 4.81 3.438Zm8.939 1.374H4.814A1.381 1.381 0 0 0 3.437 6.19v13.646l5.401-4.548a.687.687 0 0 1 .886 0l5.401 4.548V6.189a1.381 1.381 0 0 0-1.376-1.377Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
