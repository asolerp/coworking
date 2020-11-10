import React from 'react';
import App, { Container } from 'next/app';
import {appWithTranslation} from '../i18n';
import { DefaultSeo } from 'next-seo'

import '../global.css'
import { DEFAULT_SEO } from '../config'

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<Container>
				<DefaultSeo config={DEFAULT_SEO} />
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default appWithTranslation(MyApp);