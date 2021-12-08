const backgroundColor = '#1b1b1b';
const foregroundColor = '#e6e6e6';
const borderColor = '#2b2b2b';
const cursorColor = '#34f9ae';
const selectionColor = '#6f303a';
const colors = {
  black: '#070707',
  red: '#ff5555',
  green: '#34f9ae',
  yellow: '#faa483',
  blue: '#faa483',
  magenta: '#6087ed',
  cyan: '#faa483',
  white: '#ffffff',
  lightBlack: '#d1d1d1',
  lightRed: '#ff6e67',
  lightGreen: '#34f9ae',
  lightYellow: '#34f9ae',
  lightBlue: '#6087ed',
  lightMagenta: '#6087ed',
  lightCyan: '#fb7c7c',
  lightWhite: '#e6e6e6'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: ${borderColor};
			}
		`
  });
};
