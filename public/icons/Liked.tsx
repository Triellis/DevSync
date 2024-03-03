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
			d="M5.5 1.375c3.039 0 5.5 2.413 5.5 5.39 0-2.977 2.461-5.39 5.5-5.39S22 3.788 22 6.765c0 4.487-4.447 6.07-10.461 13.211a.705.705 0 0 1-1.078 0C4.447 12.834 0 11.252 0 6.765c0-2.977 2.461-5.39 5.5-5.39Z"
			fill="#EEE"
		/>
	</svg>
);

export default SvgComponent;
