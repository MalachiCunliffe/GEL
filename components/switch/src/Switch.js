/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler, wrapHandlers } from '@westpac/core';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ToggleTextWrapper, toggleTextWrapperStyles } from './overrides/toggleTextWrapper';
import { Switch as SwitchWrapper, switchStyles } from './overrides/switch';
import { ToggleText, toggleTextStyles } from './overrides/toggleText';
import { Toggle, toggleStyles } from './overrides/toggle';
import { Input, inputStyles } from './overrides/input';
import { Label, labelStyles } from './overrides/label';

import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Switch = ({
	name,
	label,
	checked: isChecked,
	onChange,
	size,
	block,
	flipped,
	toggleText,
	disabled,
	assistiveText,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [checked, setChecked] = useState(isChecked);

	const defaultOverrides = {
		Switch: {
			styles: switchStyles,
			component: SwitchWrapper,
			attributes: (_, a) => a,
		},
		Input: {
			styles: inputStyles,
			component: Input,
			attributes: (_, a) => a,
		},
		Label: {
			styles: labelStyles,
			component: Label,
			attributes: (_, a) => a,
		},
		Toggle: {
			styles: toggleStyles,
			component: Toggle,
			attributes: (_, a) => a,
		},
		ToggleText: {
			styles: toggleTextStyles,
			component: ToggleText,
			attributes: (_, a) => a,
		},
		ToggleTextWrapper: {
			styles: toggleTextWrapperStyles,
			component: ToggleTextWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = {
		name,
		label,
		size,
		block,
		flipped,
		toggleText,
		disabled,
		assistiveText,
		overrides: componentOverrides,
		checked,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

	return (
		<overrides.Switch.component
			className={className}
			{...overrides.Switch.attributes(state)}
			css={overrides.Switch.styles(state)}
		>
			<overrides.Input.component
				type="checkbox"
				name={name}
				checked={checked}
				aria-label={assistiveText}
				onChange={handleChange(name)}
				disabled={disabled}
				{...overrides.Input.attributes(state)}
				css={overrides.Input.styles(state)}
			/>
			{label && (
				<overrides.Label.component
					{...overrides.Label.attributes(state)}
					css={overrides.Label.styles(state)}
				>
					{label}
				</overrides.Label.component>
			)}
			<overrides.Toggle.component
				{...overrides.Toggle.attributes(state)}
				css={overrides.Toggle.styles(state)}
			>
				{!!toggleText && (
					<Fragment>
						<overrides.ToggleText.component
							position={'left'}
							{...overrides.ToggleText.attributes({ ...state, checked })}
							css={overrides.ToggleText.styles(state)}
						>
							{toggleText[0]}
						</overrides.ToggleText.component>
						<overrides.ToggleText.component
							position={'right'}
							{...overrides.ToggleText.attributes({ ...state, checked: !checked })}
							css={overrides.ToggleText.styles(state)}
						>
							{toggleText[1]}
						</overrides.ToggleText.component>
					</Fragment>
				)}
			</overrides.Toggle.component>
		</overrides.Switch.component>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

Switch.propTypes = {
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * Switch label text
	 */
	label: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the switch input
	 */
	assistiveText: PropTypes.string,

	/**
	 * Switch on/off state
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Switch: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Input: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Toggle: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ToggleText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ToggleTextWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};
