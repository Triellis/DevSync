"use client";

import { ChakraProvider } from "@chakra-ui/react";
// import { GoogleAnalytics } from "nextjs-google-analytics";
import { theme } from "./styles/theme";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => (
	<>
		{/* <GoogleAnalytics /> */}
		<ChakraProvider theme={theme}>
			<SessionProvider>{children}</SessionProvider>
		</ChakraProvider>
	</>
);
