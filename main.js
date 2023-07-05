import styles from "./style.css?inline";

export default function createStyledDropdown(elementId, links) {
	const element = document.getElementById(elementId);

	function injectStyles() {
		const style = document.createElement("style");
		style.id = "styledDropdownStyles";
		style.textContent = styles;
		document.head.append(style);
	}

	function render() {
		const dropdownContent = document.createElement("div");
		dropdownContent.className = "dropdown-content";

		links.forEach((link) => {
			const aElement = document.createElement("a");
			aElement.href = link.href;
			aElement.textContent = link.label;
			dropdownContent.appendChild(aElement);
		});

		const button = document.createElement("button");
		button.className = "dropbtn";
		button.textContent = "Dropdown";

		element.className = "dropdown";
		element.appendChild(button);
		element.appendChild(dropdownContent);
	}

	injectStyles();
	render();
}
