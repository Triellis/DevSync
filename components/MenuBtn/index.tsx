import Link from "next/link";
import React from "react";

function MenuBtn({ icon, linkTo }: { icon: JSX.Element; linkTo: string }) {
	return <Link href={linkTo}>{icon}</Link>;
}

export default MenuBtn;
