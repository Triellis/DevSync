import Logo from "@/components/Logo";
import { Center, Divider, IconButton } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";


const icons = [
	{
		icon: <Home/>,
		link: "/link1"
	},
	{
		icon: "icon2",
		link: "/link2"
	},
	{
		icon: "icon3",
		link: "/link3"
	}
];1

const Navbar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.navLogo}>
				<a href="/home" className={styles.navLogo}>
					<Logo fSize="16px" />
				</a>
			</div>

			<div>
				{icons.map((item) => (
					<IconButton key={item.icon} icon={item.icon} onClick={() => window.location.href = item.link} />
				))}
			</div>
		</div>
	);
};

export default Navbar;;
