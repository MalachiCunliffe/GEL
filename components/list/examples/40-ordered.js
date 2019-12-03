/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { listGenerator } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h3>Ordered</h3>
			<List type="ordered">
				<Item>Ordered</Item>
				<Item>Ordered</Item>
				<Item>Ordered</Item>
				<Item>
					Ordered list
					<List>
						<Item>Ordered</Item>
						<Item>Ordered</Item>
						<Item>Ordered</Item>
					</List>
				</Item>
				<Item>Ordered</Item>
				<Item>Ordered</Item>
				<Item>Ordered</Item>
				<Item>
					Ordered list
					<List type="bullet">
						<Item>Ordered</Item>
						<Item>Ordered</Item>
						<Item>Ordered</Item>
					</List>
				</Item>
				<Item>Ordered</Item>
				<Item>Ordered</Item>
				<Item>Ordered</Item>
			</List>
		</GEL>
	);
}

export default Example;