import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={21}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20 7.67a1 1 0 0 0-.86-.67l-5.69-.83L10.9 1a1 1 0 0 0-1.8 0L6.55 6.16.86 7a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.45 1.07L10 16.76l5.1 2.68c.14.08.299.12.46.12a1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 20 7.67Zm-6.15 4a1.001 1.001 0 0 0-.29.89l.72 4.19-3.76-2a1 1 0 0 0-.94 0l-3.76 2 .72-4.19a1 1 0 0 0-.29-.89l-3-3 4.21-.61a1 1 0 0 0 .76-.55L10 3.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
