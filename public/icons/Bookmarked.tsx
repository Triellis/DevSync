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
			d="M17.188 0H7.563a2.755 2.755 0 0 0-2.665 2.063h9.797a3.18 3.18 0 0 1 3.18 3.18v13.1l.945.756a.687.687 0 0 0 1.117-.555V2.75A2.75 2.75 0 0 0 17.188 0Z"
			fill="#EEE"
		/>
		<path
			d="M13.75 3.438H4.813a2.75 2.75 0 0 0-2.75 2.75v15.108a.703.703 0 0 0 .283.575.687.687 0 0 0 .847-.03l6.088-5.13 6.088 5.127a.687.687 0 0 0 1.131-.543V6.187a2.75 2.75 0 0 0-2.75-2.75Z"
			fill="#EEE"
		/>
	</svg>
);

export default SvgComponent;
