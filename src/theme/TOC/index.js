import React, { useState } from "react";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import Divider from "@mui/material/Divider";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function TOC({ toc, editUrl, ...props }) {
	const [pathEnding, setPathEnding] = useState(".mdx");

	const URL_BASE_PATH = "https://github.com/permitio/docs/tree/master/docs";
	const URL_TRACKING =
		"?utm_source=docs&utm_medium=docs-toc&utm_campaign=edit-on-github&utm_id=permit-docs";

	// TODO: Needs improvement.
	// Avoids home.mdx files throwing a 404.
	const getWindowLocationPathname = (pathname) => {
		if (pathname === "/") {
			return "home.mdx";
		}

		return ".mdx";
	};

	return (
		<div className="toc-wrapper">
			<h2>Contents</h2>
			<OriginalTOC toc={toc} {...props} />
			<BrowserOnly>
				{() => (
					<EditThisPage
						editUrl={
							URL_BASE_PATH +
							window.location.pathname +
							getWindowLocationPathname(window.location.pathname) +
							URL_TRACKING
						}
					/>
				)}
			</BrowserOnly>
		</div>
	);
}
