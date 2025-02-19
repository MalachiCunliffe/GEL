/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = (_, { brand }) => {
	const { COLORS } = brand;
	return {
		label: getLabel('compacta-item'),
		marginBottom: '0.375rem',
		border: `1px solid ${COLORS.borderDark}`,
	};
};

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
