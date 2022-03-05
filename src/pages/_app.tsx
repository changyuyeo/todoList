import { AppProps } from 'next/app'

import GlobalStyle from '@styles/GlobalStyle'
import { wrapper } from '@store/index'
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

export default wrapper.withRedux(MyApp)
