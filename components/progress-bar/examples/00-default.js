/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<ProgressBar value={45} />
		</GEL>
	);
}

export default Example;
