"use client";

import GHIcon from "@/public/icons/GHIcon";

import { Flex } from "@chakra-ui/react";

export default function SocialLinks() {
	return (
		<Flex direction={"column"} gap={8}>
			<a href="https://github.com/JeelRajodiya" target="_blank">
				<Flex gap={4} alignItems={"center"}>
					<GHIcon /> GitHub
				</Flex>
			</a>
		</Flex>
	);
}
