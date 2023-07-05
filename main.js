import "./style.css";

class StyledDropdown {
	constructor(elementId, options) {
		this.element = document.getElementById(elementId);
		this.options = options;
		this.injectStyles();
		this.render();
	}

	injectStyles() {
		const existingStyle = document.getElementById("styledDropdownStyles");
		if (!existingStyle) {
			const style = document.createElement("style");
			style.id = "styledDropdownStyles";
			style.textContent = `
        select {
          color: #333;
          padding: 10px;
          font-size: 1em;
          border-radius: 5px;
          border: 1px solid #999;
        }
      `;
			document.head.append(style);
		}
	}

	render() {
		const select = document.createElement("select");
		this.options.forEach((option) => {
			const optionElement = document.createElement("option");
			optionElement.value = option.value;
			optionElement.text = option.label;
			select.appendChild(optionElement);
		});
		this.element.appendChild(select);
	}
}

export default StyledDropdown;
