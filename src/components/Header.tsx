import React from 'react'
import styled from 'styled-components'

import colors from '@styles/colors'

const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 52px;
	padding: 0 12px;
	border-bottom: 1px solid ${colors.gray};
	h1 {
		font-size: 21px;
	}
`

const Header = () => {
	return (
		<Container>
			<h1>Jebong&apos;s TodoList</h1>
		</Container>
	)
}

export default Header
