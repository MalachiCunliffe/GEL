/** @jsx jsx */

import { GEL, jsx, Global, useBrand } from '@westpac/core';
import {
	FormPod,
	Actions,
	ContactList,
	Indicator,
	Panel,
	PanelBody,
	PanelFooter,
} from '@westpac/form-pod';
import { HeadsetIcon, LiveChatIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { Fragment } from 'react';

function Example({ brand }) {
	const { COLORS } = useBrand();

	// Contact detail data
	const contactItems = [
		{
			icon: HeadsetIcon,
			// iconColor: COLORS.muted,
			text: '1300 888 888',
			url: 'tel:1300888888',
			onClick: () => {},
		},
		// {
		// 	icon: LiveChatIcon,
		// 	iconColor: COLORS.muted,
		// 	text: 'LiveChat',
		// 	url: '#0',
		// 	onClick: () => {},
		// },
	];

	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-pod'] = {
		FormPod: {
			styles: (styles) => ({
				...styles,
				border: '2px solid red',
				padding: '1rem',
			}),
		},
		Panel: {
			styles: (styles) => ({
				...styles,
				border: '2px solid red',
				padding: '1rem',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
					},
				}}
			/>
			<h2>With overrides applied</h2>
			<FormPod preheading="Preheading" heading="Heading">
				<Panel>
					<PanelBody>[PANEL CONTENT]</PanelBody>
					<PanelFooter left={<ContactList items={contactItems} />} right={<Indicator />} />
				</Panel>
				<Actions
					primary={
						<Fragment>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Back
							</Button>
							<Button appearance="primary" size="large" block={[true, false]}>
								Next
							</Button>
						</Fragment>
					}
					secondary={
						<Button appearance="faint" soft size="large" block={[true, false]}>
							Cancel
						</Button>
					}
				/>
			</FormPod>

			<hr />

			<h2>With overrides and component overrides</h2>
			<FormPod
				preheading="Preheading"
				heading="Heading"
				overrides={{
					FormPod: {
						styles: (styles) => ({
							...styles,
							border: '2px dashed blue',
							padding: '1rem',
						}),
					},
				}}
			>
				<Panel>
					<PanelBody>[PANEL CONTENT]</PanelBody>
					<PanelFooter left={<ContactList items={contactItems} />} right={<Indicator />} />
				</Panel>
				<Actions
					primary={
						<Fragment>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Back
							</Button>
							<Button appearance="primary" size="large" block={[true, false]}>
								Next
							</Button>
						</Fragment>
					}
					secondary={
						<Button appearance="faint" soft size="large" block={[true, false]}>
							Cancel
						</Button>
					}
				/>
			</FormPod>
		</GEL>
	);
}

export default Example;
