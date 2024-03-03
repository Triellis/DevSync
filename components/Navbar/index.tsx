"use client";
import Logo from "@/components/Logo";
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Bookmark from "@/public/icons/Bookmark";
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
import classnames from "classnames";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import MenuBtn from "../MenuBtn";
import styles from "./Navbar.module.css";

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
	{
		icon: <Bookmark />,
		link: "/Dashboard/Bookmark",
	},
];

const Navbar = () => {
	const router = useRouter();
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
							onClick={() => router.push(item.link)}
						/>
					))}
				</div>
			</div>

			<Menu placement="bottom-end">
				<MenuButton>{<ProfilePic />}</MenuButton>
				<MenuList className={styles.list}>
					<MenuItem
						className={classnames(styles.item)}
						onClick={() => router.push("/Dashboard/Profile")}
					>
						Profile
					</MenuItem>

					<MenuItem
						className={classnames(styles.item, styles.logout)}
						onClick={() => {
							signOut({ callbackUrl: "/LandingPage" });
						}}
					>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default Navbar;
