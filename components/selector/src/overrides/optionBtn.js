/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const OptionBtn = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const optionBtnStyles = () => {
	const { PACKS, SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	const paddingArr = [SPACING(3), null, SPACING(4)];

	return mq({
		label: getLabel('selector-option-btn'),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: '100%',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		padding: paddingArr,

		// Hover state
		'input:hover + &': {
			borderColor: COLORS.hero,
		},

		// Checked state
		// Note: Padding reduced to counter the increased border width
		'input:checked + &': {
			borderColor: COLORS.hero,
			borderWidth: '3px',
			padding: paddingArr.map((p) => p && `calc(${p} - 2px)`),
		},

		// Disabled state
		'input:disabled + &, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},

		// Focus state
		'body:not(.isMouseMode) input:focus + &': {
			...PACKS.focus,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const optionBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultOptionBtn = {
	component: OptionBtn,
	styles: optionBtnStyles,
	attributes: optionBtnAttributes,
};