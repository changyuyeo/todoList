import styled from 'styled-components'
import colors from '@styles/colors'

export const Container = styled.div`
	padding: 16px;
	.add-todo-header-title {
		font-size: 21px;
	}
	.add-todo-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.add-todo-submit-button {
			padding: 4px 8px;
			border: 1px solid black;
			border-radius: 5px;
			background-color: white;
			outline: none;
			font-size: 14px;
		}
	}
	.add-todo-colors-wrapper {
		width: 100%;
		margin-top: 16px;
		display: flex;
		justify-content: space-between;
		.add-todo-color-list {
			display: flex;
			.add-todo-color-button {
				width: 24px;
				height: 24px;
				margin-right: 16px;
				border: 0;
				outline: 0;
				border-radius: 50%;
				&:last-child {
					margin: 0;
				}
			}
			.add-todo-selected-color {
				border: 2px solid black !important;
			}
		}
	}
	.bg-blue {
		background-color: ${colors.blue};
	}
	.bg-green {
		background-color: ${colors.green};
	}
	.bg-navy {
		background-color: ${colors.navy};
	}
	.bg-orange {
		background-color: ${colors.orange};
	}
	.bg-red {
		background-color: ${colors.red};
	}
	.bg-yellow {
		background-color: ${colors.yellow};
	}
	.add-todo-textarea {
		width: 100%;
		border-radius: 5px;
		height: 300px;
		border-color: ${colors.gray};
		margin-top: 12px;
		resize: none;
		outline: none;
		padding: 12px;
		font-size: 16px;
	}
`
