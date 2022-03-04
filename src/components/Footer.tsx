import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import colors from '@styles/colors'

const Container = styled.footer`
	width: 100%;
	height: 53px;
	position: fixed;
	bottom: 0;
	border-top: 1px solid ${colors.gray};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	.footer-button {
		font-size: 32px;
		width: 32px;
		height: 32px;
		border-radius: 5px;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		padding: 0;
		line-height: 0;
		outline: none;
	}
`

const Footer = () => {
	const router = useRouter()

	const isMain = useMemo(() => router.pathname === '/', [router])

	const onMoveAddPage = useCallback(
		() => router.push(isMain ? '/todo/add' : '/'),
		[isMain, router]
	)

	return (
		<Container>
			<button type="button" className="footer-button" onClick={onMoveAddPage}>
				{isMain ? '+' : '-'}
			</button>
		</Container>
	)
}

export default Footer
