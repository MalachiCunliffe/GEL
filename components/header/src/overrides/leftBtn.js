/** @jsx jsx */

import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';
import { ArrowLeftIcon, HamburgerMenuIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================

const LeftBtn = ({ state: { leftIcon, leftOnClick, leftAssistiveText }, ...rest }) => {
	// Can I make this cleaner
	const Icon =
		leftIcon === 'arrow' ? ArrowLeftIcon : leftIcon === 'hamburger' ? HamburgerMenuIcon : null;
	return (
		<Button
			look="link"
			iconAfter={Icon}
			size="large"
			onClick={leftOnClick}
			assistiveText={leftAssistiveText}
			{...rest}
		/>
	);
};

// ==============================
// Styles
// ==============================

const leftBtnStyles = () => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('header-left-button'),
		color: COLORS.text,
		padding: 0,
		marginTop: '0.375rem',
		marginBottom: '0.375rem',
		marginLeft: ['-0.75rem', null, '-1.5rem'],
		marginRight: ['0.75rem', null, '1.125rem'],
		minWidth: ['2.625rem', null, '3.75rem'],
		borderRight: '1px solid #e8e8ed',
	})[0];
};

// ==============================
// Attributes
// ==============================

const leftBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLeftBtn = {
	component: LeftBtn,
	styles: leftBtnStyles,
	attributes: leftBtnAttributes,
};
