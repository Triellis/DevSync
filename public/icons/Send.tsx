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
			d="m18.617 8.87-.007-.004-16.682-6.92a.92.92 0 0 0-.868.085.963.963 0 0 0-.435.805V7.26a.937.937 0 0 0 .762.92l9.1 1.683a.157.157 0 0 1 0 .307l-9.1 1.683a.937.937 0 0 0-.762.92V17.2a.92.92 0 0 0 .414.769.935.935 0 0 0 .888.08l16.682-6.88.008-.003a1.249 1.249 0 0 0 0-2.297Z"
			fill="#EEE"
		/>
	</svg>
);

export default SvgComponent;
