import React from 'react';
import { Fragment } from 'react';
import '../frontend/css/global.css';

export default function CssGlobalStyle({ children }) {
	return (
		<Fragment>
			{ children }
		</Fragment>
	)
}