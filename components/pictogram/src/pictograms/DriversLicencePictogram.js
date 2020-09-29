import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const DriversLicencePictogram = ({ type, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[type];

	return (
		<Pictogram pictogram="DriversLicencePictogram" type={type} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					fillRule="nonzero"
					d="M59.60006,41.3844836 C63.9484155,41.3844836 67.514067,44.9175267 67.514067,49.2261158 L67.514067,49.2261158 L67.514067,52.8453306 C67.514067,53.3623613 67.0792314,53.7070485 66.6443959,53.7070485 L66.6443959,53.7070485 L42.032704,53.7070485 C41.5978684,53.7070485 41.25,53.3623613 41.25,52.8453306 L41.25,52.8453306 L41.25,49.2261158 C41.25,44.9175267 44.8156515,41.3844836 49.1640069,41.3844836 L49.1640069,41.3844836 Z M54.3820335,22.654185 C58.7966728,22.654185 62.3754452,26.1850652 62.3754452,30.5406265 C62.3754452,34.8961879 58.7966728,38.427068 54.3820335,38.427068 C49.9673941,38.427068 46.3886218,34.8961879 46.3886218,30.5406265 C46.3886218,26.1850652 49.9673941,22.654185 54.3820335,22.654185 Z"
				/>
				<path
					fill={outline}
					d="M69.2852755,13.5 C72.598984,13.5 75.2852755,16.1862915 75.2852755,19.5 L75.2852755,19.5 L75.2852755,57.3857093 C75.2852755,60.6994178 72.598984,63.3857093 69.2852755,63.3857093 L69.2852755,63.3857093 L8.5,63.3857093 C5.1862915,63.3857093 2.5,60.6994178 2.5,57.3857093 L2.5,57.3857093 L2.5,19.5 C2.5,16.1862915 5.1862915,13.5 8.5,13.5 L8.5,13.5 Z M69.2852755,17.5 L8.5,17.5 C7.3954305,17.5 6.5,18.3954305 6.5,19.5 L6.5,19.5 L6.5,57.3857093 C6.5,58.4902788 7.3954305,59.3857093 8.5,59.3857093 L8.5,59.3857093 L69.2852755,59.3857093 C70.389845,59.3857093 71.2852755,58.4902788 71.2852755,57.3857093 L71.2852755,57.3857093 L71.2852755,19.5 C71.2852755,18.3954305 70.389845,17.5 69.2852755,17.5 L69.2852755,17.5 Z M37.25,41 L37.25,45 L11.25,45 L11.25,41 L37.25,41 Z M37.25,33 L37.25,37 L11.25,37 L11.25,33 L37.25,33 Z M37.25,25 L37.25,29 L11.25,29 L11.25,25 L37.25,25 Z"
				/>
			</g>
		</Pictogram>
	);
};

DriversLicencePictogram.defaultProps = {
	...defaultProps,
	assistiveText: "Driver's licence",
};
DriversLicencePictogram.propTypes = propTypes;