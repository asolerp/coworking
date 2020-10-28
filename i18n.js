const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'es',
	otherLanguages: ['en'],
	localePath: "public/static/locales",
});

const {
	appWithTranslation,
	withTranslation,
} = NextI18NextInstance;

module.exports = {
	nextI18next: NextI18NextInstance,
	appWithTranslation,
	withTranslation,
};