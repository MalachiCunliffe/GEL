/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const CloseBtn = ({ onClose, state: _, ...rest }) => (
	<Button
		onClick={(event) => onClose(event)}
		iconAfter={CloseIcon}
		look="unstyled"
		size="small"
		assistiveText="Close alert"
		{...rest}
	/>
);

const BlenderCloseBtn = (props) => (
	<CloseBtn
		overrides={{
			Button: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const closeBtnStyles = () => {
	const mq = useMediaQuery();
	const { PACKS } = useBrand();

	return mq({
		label: 'alert-closebtn',
		color: 'inherit',
		position: 'absolute',
		zIndex: 1,
		top: '3px',
		right: 0,
		opacity: 1,
		backgroundColor: 'transparent',

		':hover': {
			opacity: 0.8,
		},
		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const closeBtnAttributes = () => ({
	'data-testing': 'alert-closeBtn',
});

const blenderAttributes = () => ({
	'data-js': 'alert-closeBtn__version__',
});

// ==============================
// Exports
// ==============================

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};

export const blenderCloseBtn = {
	component: BlenderCloseBtn,
	styles: closeBtnStyles,
	attributes: blenderAttributes,
};
