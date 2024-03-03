"use client";

import { Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import myToast from "../MyToast/MyToast";
function SubmitBtn({ message }: { message: string }) {
	const { pending } = useFormStatus();

	return (
		<Button
			size={"md"}
			variant={"default"}
			type="submit"
			isDisabled={message == ""}
			isLoading={pending}
		>
			Send
		</Button>
	);
}
export default function MsgBox() {
	const [message, setMessage] = useState("");

	const [dots, setDots] = useState(".");
	const totalDots = 3;

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((dots) => {
				if (dots.length >= totalDots) {
					return "";
				}
				return dots + ".";
			});
		}, 200);
		return () => clearInterval(interval);
	}, []);
	const toast = useToast();
	return (
		<Flex
			direction={"column"}
			gap={4}
			onSubmit={(e) => {
				myToast(
					"Sent!",
					"Your message has been sent!",
					"success",
					toast
				);

				setMessage("");
			}}
		>
			<Text fontSize={"x-large"}>Leave your feedback </Text>

			<Flex gap={2}>
				<Input
					variant={"default"}
					placeholder={`your feedback matters ${dots}`}
					value={message}
					name="message"
					size={"md"}
					style={{
						backgroundColor: "hsl(var(--background))",
					}}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<SubmitBtn message={message} />
			</Flex>
		</Flex>
	);
}
