/** @jsx jsx */
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GEL, jsx } from '@westpac/core';

import { BrandPicker } from '../brand-picker';
import { Footer, Normalize, Sidebar } from './';
import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { ALL_COMPONENTS } from '../../../graphql';

const LayoutView = ({ components, children }) => (
	<GridContainer>
		<SidebarContainer>
			<Sidebar components={components} />
		</SidebarContainer>
		<MainContainer>
			{children}
			<Footer />
		</MainContainer>
	</GridContainer>
);

/*
  Wrapper with logic
*/

const Wrapper = props => {
	const router = useRouter();
	const brandParam = router.query.brand || '';

	const { brands, brand } = useBrandSwitcher();
	const { data, error } = useQuery(ALL_COMPONENTS);

	const brandNames = Object.keys(brands);
	const isMatch = brandNames.filter(name => name === brandParam).length > 0;

	// If no brand is detected, show the brand picker...
	if (!isMatch) {
		// show brand selector
		return <BrandPicker />;
	}

	// Handle async state...
	if (!data) return 'loading...';
	if (error) return 'error!!';

	// We can now assume we have our components data...
	const components = data.allComponents;

	return (
		<GEL brand={brands[brand]}>
			<Normalize />
			<LayoutView components={components} {...props} />
		</GEL>
	);
};

/*
  Styled components
*/

const GridContainer = props => {
	return (
		<div
			css={{
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
				display: 'grid',
				width: '100vw',
				height: '100vh',
				gridTemplateColumns: '270px auto',
				gridColumnGap: 20,
			}}
			{...props}
		/>
	);
};

const SidebarContainer = props => (
	<div
		css={{
			gridColumnStart: 1,
			gridColumnEnd: 2,
		}}
		{...props}
	/>
);

const MainContainer = props => (
	<div
		css={{
			gridColumnStart: 2,
			gridColumnEnd: 3,
			overflowY: 'scroll',
		}}
		{...props}
	/>
);

export const Layout = props => (
	<BrandSwitcherProvider>
		<Wrapper {...props} />
	</BrandSwitcherProvider>
);
