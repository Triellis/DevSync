import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "var(--background)",
				color: "var(--text)",
			},
		},
	},
	components: {},
	fonts: {},
});
