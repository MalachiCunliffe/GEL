import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const ChatPictogram = ({ color, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(color, COLORS);

	return (
		<Pictogram pictogram="ChatPictogram" color={color} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="12.15 19.031 43.364 19.031 43.364 16.031 12.15 16.031" />
				<polygon fill={highlight} points="12.15 26.01 43.364 26.01 43.364 23.01 12.15 23.01" />
				<polygon fill={highlight} points="12.15 32.988 33.026 32.988 33.026 29.988 12.15 29.988" />
				<path
					fill={outline}
					d="M71.2813,26.4472 L58.5753,26.4472 C57.9583,26.4472 57.4573,26.9472 57.4573,27.5652 L57.4573,44.6662 C57.4573,45.2842 56.9563,45.7842 56.3393,45.7842 L29.5513,45.7842 C28.9323,45.7842 28.4323,46.2852 28.4323,46.9032 L28.4323,48.1482 L28.4323,56.2362 C28.4323,56.7452 28.8443,57.1582 29.3543,57.1582 L50.2663,57.1522 C50.4463,57.1462 62.1863,56.7722 67.2733,61.6132 C69.0553,63.3102 70.0203,65.4182 70.2083,68.0372 C70.2433,68.5332 70.6353,68.9262 71.1343,68.9242076 L71.1823,68.9242076 C71.6903,68.9212 72.0993,68.5092 72.0993,68.0022 L72.0993,27.2652 C72.0993,26.8132 71.7333,26.4472 71.2813,26.4472"
				/>
				<path
					fill={outline}
					d="M10.2139,44.5097 C8.9459,45.7167 8.0469,47.0977 7.4999,48.6857 L7.4999,11.4997 L48.6669,11.4997 L48.6669,39.7107 L28.1239,39.7047 C27.6169,39.6837 15.6279,39.3587 10.2139,44.5097 L10.2139,44.5097 Z M48.9949,42.2107 C48.9979,42.2107 49.0009,42.2097 49.0049,42.2097 L51.9949,42.2107 C53.1929,42.2107 54.1669,41.2367 54.1669,40.0387 L54.1669,11.0687 C54.1669,9.9277 53.2389,8.9997 52.0989,8.9997 L49.0989,8.9997 L10.0679,8.9997 L7.0679,8.9997 C5.9279,8.9997 4.9999,9.9277 4.9999,11.0677 L4.9999,51.8047 C4.9999,52.9757 5.9389,53.9327 7.1489,53.9707 L7.1489,53.9737 L7.1849,53.9737 C7.1929,53.9737 7.1999,53.9767 7.2079,53.9767 L7.2209,53.9767 C7.2299,53.9767 7.2369,53.9737 7.2449,53.9737 L10.1849,53.9737 C10.1929,53.9737 10.1999,53.9767 10.2079,53.9767 L10.2209,53.9767 C10.2299,53.9767 10.2369,53.9737 10.2449,53.9737 L10.2959,53.9737 L10.2959,53.9687 C11.3979,53.9297 12.3089,53.0527 12.3889,51.9287 C12.5529,49.6317 13.3869,47.7977 14.9379,46.3207 C18.6519,42.7857 26.5889,42.2667 29.7459,42.2047 L48.9949,42.2107 Z"
				/>
			</g>
		</Pictogram>
	);
};

ChatPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Chat',
};
ChatPictogram.propTypes = propTypes;
