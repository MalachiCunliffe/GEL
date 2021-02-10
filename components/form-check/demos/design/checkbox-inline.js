/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<FormCheck name="example-inline" inline>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
			</FormCheck>
		</Playground>
	);
};
