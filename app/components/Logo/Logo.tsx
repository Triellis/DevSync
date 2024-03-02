import React from "react";

function Logo({ fSize }: { fSize: string }) {
	return (
		<div
			style={{
				fontSize: `${fSize}`,
			}}
		>
			<span>Dev</span>
			<span style={{ color: "var(--primary)" }}>Sync</span>
		</div>
	);
}

export default Logo;
