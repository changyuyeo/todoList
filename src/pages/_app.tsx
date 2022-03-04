import { AppProps } from 'next/app'

import GlobalStyle from '@styles/GlobalStyle'
import Header from '@components/Header'
import Footer from '@components/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
