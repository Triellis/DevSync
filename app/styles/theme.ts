import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";
const Button = {
	variants: {
		default: {
			borderRadius: "full",
			px: "6",
			py: "4",
			fontSize: "sm",
			color: "hsl(var(--background) / 0.8)",
			fontWeight: "normal",
			background: "hsl(var(--primary) )",
			textTransform: "uppercase",
			_hover: {
				background: "hsl(var(--primary) / 0.7)",
				_disabled: {
					background: "hsl(var(--primary) / 0.7)",
				},
			},
		},
	},
};
const Input = {
	variants: {
		default: {
			field: {
				border: "1px solid",
				borderColor: "hsl(var(--text) / 0.2)",
				background: "transparent",
				borderRadius: "full",
				color: "hsl(var(--text) / 0.8)",
				_placeholder: {
					color: "hsl(var(--text) / 0.5)",
				},
			},
		},
	},
};
export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "hsl(var(--background))",
				color: "hsl(var(--text))",
			},
		},
	},
	components: {
		Button,
		Input,
	},
	fonts: {},
});
