/** @jsx jsx */

import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import Select from '@arch-ui/select';
import chroma from 'chroma-js';

import { secondaryColors } from '../src/secondary-colors.js';

// Recursively render swatches
const Swatch = ({ color, name }) => {
	if (!chroma.valid(color)) return null;
	const { SPACING, PACKS } = useBrand();
	const mq = useMediaQuery();
	const [r, g, b] = chroma(color).rgb();
	return (
		<Fragment>
			<div css={{ background: color, height: SPACING(12) }} />
			<div
				css={mq({
					display: 'flex',
					flexDirection: 'column',
					background: '#fff',
					...PACKS.typeScale.bodyFont(9),
					padding: SPACING(2),
					marginBottom: [SPACING(3), SPACING(4)],
				})}
			>
				<strong>{name}</strong>
				<span css={{ marginTop: SPACING(1, true) }}>{color}</span>
				<span css={{ marginTop: SPACING(1, true) }}>{`R:${r} G:${g} B:${b}`}</span>
			</div>
		</Fragment>
	);
};

// Separator
export const ColorSwatch = {
	editor: ({ value, onChange }) => {
		const { COLORS } = useBrand();

		const swatches = Object.entries({
			...COLORS,
			...{ 'Secondary Colors': '--secondary-colors--' },
		})
			.filter(([key, value]) => typeof value === 'string')
			.map(([key, value]) => {
				return { value: value, label: key.charAt(0).toUpperCase() + key.slice(1) };
			});

		return (
			<Select
				isMulti={true}
				isSearchable={true}
				options={swatches}
				value={value.colors}
				onChange={(values) => {
					onChange({ colors: values });
				}}
			/>
		);
	},

	component: ({ colors }) => {
		const { BRAND } = useBrand();
		return (
			<Fragment>
				{colors.map((color) => {
					if (color.value === '--secondary-colors--') {
						return (
							<Fragment key={color.value}>
								{Object.entries(secondaryColors[BRAND]).map((secondaryColor) => (
									<Cell key={secondaryColor[1]} width={[10, 6, 4, 3]} left={[2, 'auto']}>
										<Swatch color={secondaryColor[1]} name={secondaryColor[0]} />
									</Cell>
								))}
							</Fragment>
						);
					} else {
						return (
							<Cell key={color.value} width={[10, 6, 4, 3]} left={[2, 'auto']}>
								<Swatch color={color.value} name={color.label} />
							</Cell>
						);
					}
				})}
			</Fragment>
		);
	},
};
