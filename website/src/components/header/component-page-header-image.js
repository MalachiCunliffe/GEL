/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import React, { Fragment } from 'react';
import {
	WbcBackgroundRightSvg,
	WbcBackgroundLeftSvg,
	StgBackgroundSvg,
	BsaBackgroundSvg,
} from '../symbols';

const ComponentPageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const WestpacImage = (props) => (
		<Fragment>
			<div
				css={mq({
					top: [null, null, 0],
					bottom: 0,
					left: 0,
					width: [360, null, 'auto'],
				})}
				{...props}
			>
				<WbcBackgroundLeftSvg
					css={{
						display: 'block',
						width: 'auto',
						height: '100%',
					}}
				/>
			</div>
			<div
				css={mq({
					top: [null, null, 0],
					bottom: 0,
					right: 0,
					width: [268, null, 'auto'],
				})}
				{...props}
			>
				<WbcBackgroundRightSvg
					css={{
						display: 'block',
						width: 'auto',
						height: '100%',
					}}
				/>
			</div>
		</Fragment>
	);

	const StGeorgeImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				left: 0,
				width: [601, 1202],
			})}
			{...props}
		>
			<StgBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const BankSaImage = (props) => (
		<div
			css={{
				bottom: 0,
				right: 0,
				width: [508, 1016],
			}}
			{...props}
		>
			<BsaBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: WestpacImage,
		WBG: null,
		STG: StGeorgeImage,
		BSA: BankSaImage,
		BOM: null,
		BTFG: null,
	};
	const HeaderImage = BRAND_HEADERS[brand];

	return HeaderImage ? (
		<HeaderImage
			css={{
				position: 'absolute',
				zIndex: -1,
			}}
			{...rest}
		/>
	) : null;
};

export default ComponentPageHeaderImage;
