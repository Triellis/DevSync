"use client";
import Logo from "@/components/Logo";
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Chat from "@/public/icons/Chat";
import Home from "@/public/icons/Home";
import People from "@/public/icons/People";
import {
	Avatar,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import React from "react";
import MenuBtn from "../MenuBtn";
import styles from "./Navbar.module.css";
import Link from "next/link";

const icons = [
	{
		icon: <Home />,
		link: "/Dashboard",
	},
	{
		icon: <People />,
		link: "/Dashboard/Communities",
	},
	{
		icon: <Chat />,
		link: "/Dashboard/Chat",
	},
];

const Navbar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.first}>
				<div className={styles.navLogo}>
					<Link href="/Dashboard">
						<Logo fSize="18px" />
					</Link>
				</div>

				<div className={styles.iconGrp}>
					{icons.map((item, index) => (
						<IconButton
							key={index}
							icon={item.icon}
							aria-label="icon"
							bg="transparent"
							_hover={{ bg: "transparent" }}
							onClick={()=> console.log("clicked")}
						/>
					))}
				</div>
			</div>

			<Link className={styles.second} href="/Dashboard/Profile">
				<ProfilePic />
			</Link>
		</div>
	);
};

export default Navbar;
