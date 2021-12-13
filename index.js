const backgroundColor = '#171717';
const foregroundColor = '#E6E6E6';
const borderColor = '#444444';
const cursorColor = '#34f9AE';
const selectionColor = '#6F303A';
const colors = {
  black: '#070707',
  red: '#FF5555',
  green: '#34f9AE',
  yellow: '#fAA483',
  blue: '#fAA483',
  magenta: '#6087ED',
  cyan: '#fAA483',
  white: '#FFFFFF',
  lightBlack: '#909090',
  lightRed: '#ff6E67',
  lightGreen: '#34f9AE',
  lightYellow: '#34f9AE',
  lightBlue: '#6087ED',
  lightMagenta: '#6087ED',
  lightCyan: '#ff6E67',
  lightWhite: '#E6E6E6'
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
