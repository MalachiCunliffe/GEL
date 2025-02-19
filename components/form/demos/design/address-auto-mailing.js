/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Fragment } from 'react';
import { Autocomplete } from '@westpac/autocomplete';
import { components } from 'react-select';
import { Form, FormGroup, Field, Fieldset } from '@westpac/form';
import { Fork, Content } from '@westpac/fork';
import { Link, Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Input = ({ autoComplete, options, ...props }) => (
	<components.Input {...props} autoComplete="street-address" />
);

const Hint = (props) => (
	<Link
		{...props}
		onClick={(e) => {
			e.preventDefault();
		}}
	>
		Enter manually instead
	</Link>
);

const Footer = (props) => (
	<Fragment {...props}>
		Can't find your address? <Link>Enter it manually</Link>
	</Fragment>
);

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<Fieldset legend="Do you have a different mailing address?">
						<Fork size="large" css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}>
							<Content text="Yes">
								<FormGroup>
									<Field label="Search for your mailing address" hint={Hint}>
										<Autocomplete
											size="large"
											footer={Footer}
											noOptionsMessage={() => 'None found'}
											options={[
												{ value: '', label: '123 Sesame Street, Hornsby, NSW, 2077 ' },
												{ value: '', label: '742 Evergreen Terrace , Chatswood, NSW, 2067 ' },
												{ value: '', label: '42 Wallaby Way, Sydney, NSW, 2000 ' },
												{ value: '', label: '124 Conch Street, Marrickville, NSW, 2204 ' },
											]}
											components={{ Input }}
										/>
									</Field>
								</FormGroup>
							</Content>
							<Content text="No" />
						</Fork>
					</Fieldset>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
