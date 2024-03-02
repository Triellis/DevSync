"use client";

import Logo from "@/components/Logo";
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Chat from "@/public/icons/Chat";
import Home from "@/public/icons/Home";
import People from "@/public/icons/People";
import { Avatar, Button, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
} from "@chakra-ui/react";
const icons = [
	{
		icon: <Home />,
		link: "/link1",
	},
	{
		icon: <People />,
		link: "/link2",
	},
	{
		icon: <Chat />,
		link: "/link3",
	},
];
1;

const Navbar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.first}>
				<div className={styles.navLogo}>
					<a href="/home">
						<Logo fSize="18px" />
					</a>
				</div>

				<div className={styles.iconGrp}>
					{icons.map((item, index) => (
						<IconButton
							key={index}
							icon={item.icon}
							aria-label="icon"
							bg="transparent"
							_hover={{ bg: "transparent" }}
						/>
					))}
				</div>
			</div>

			<a className={styles.second} href="/Dashboard/Profile"></a>
			<Menu>
				<MenuButton>
					<ProfilePic />
				</MenuButton>
				<MenuList
					backgroundColor={"hsl(var(--b2))"}
					className={styles.customList}
					boxSize={""}
					borderRadius={"var(--rounded-box)"}
				>
					<Link
						href="/Auth/Profile"
						style={{ textDecoration: "none" }}
					>
						<MenuItem className={styles.menuItem}>
							My Profile
						</MenuItem>
					</Link>
					<MenuItem
						className={styles.menuOut}
						onClick={() => {
							callbackUrl: "/";
						}}
						color={"rgb(255,69,0)"}
					>
						Logout{" "}
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default Navbar;
