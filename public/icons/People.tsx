import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={22}
		height={18}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656ZM4 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM1.879 4.879A3 3 0 1 1 6.12 9.12 3 3 0 0 1 1.88 4.88ZM18 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.121-1.121A3 3 0 1 1 20.12 9.12a3 3 0 0 1-4.242-4.242ZM11 10.999A4.002 4.002 0 0 0 7 15v1h8v-1a3.984 3.984 0 0 0-1.757-3.313A4.002 4.002 0 0 0 11 11Zm5.787 2.411A6.01 6.01 0 0 1 17 15v1h3v-1a2 2 0 0 0-3.213-1.59Zm-.857-1.832A4 4 0 0 1 22 15v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a4 4 0 0 1 6.07-3.422 6.003 6.003 0 0 1 9.86 0ZM5.213 13.41A2 2 0 0 0 2 15v1h3v-1c0-.549.074-1.082.213-1.59Z"
			fill="#D6E8FF"
		/>
	</svg>
);

export default SvgComponent;
