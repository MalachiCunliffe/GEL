/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Well = props => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<div
			css={mq({
				padding: ['0.75rem', '1.5rem'],
				marginBottom: '1.125rem',
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.border}`,
				borderRadius: '0.1875rem',

				// Nested Well styling
				'& &': {
					backgroundColor: '#fff',
					margin: '0.75rem 0',
				},
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * Well content
	 */
	children: PropTypes.node,
};

Well.defaultProps = {};