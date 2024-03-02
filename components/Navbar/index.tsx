import Logo from "@/components/Logo";
import Chat from "@/public/icons/Chat";
import Home from "@/public/icons/Home";
import People from "@/public/icons/People";
import { Avatar, IconButton } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

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

			<div className={styles.second}>
				<Avatar size="sm" src="public/icons/metaicon.png" className={styles.avatar} />
			</div>
		</div>
	);
};

export default Navbar;
