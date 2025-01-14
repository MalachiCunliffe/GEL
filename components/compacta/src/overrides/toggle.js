/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Toggle = ({ open, state: _, ...rest }) => (
	<Button
		look="link"
		size="small"
		soft
		iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const toggleStyles = () => ({
	label: getLabel('compacta-toggle'),
});

// ==============================
// Attributes
// ==============================

const toggleAttributes = (_, { id, open }) => ({
	'aria-expanded': open,
	'aria-controls': id,
});

// ==============================
// Exports
// ==============================

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};
