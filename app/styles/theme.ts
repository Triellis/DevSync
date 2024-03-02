import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "hsl(var(--background))",
				color: "hsl(var(--text))",
			},
		},
	},
	components: {},
	fonts: {},
});
