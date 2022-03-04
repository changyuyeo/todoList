import styled from 'styled-components'
import colors from '@styles/colors'

export const Container = styled.div`
	width: 100%;
	.todo-num {
		margin-left: 12px;
	}
	.todo-list-header {
		padding: 12px;
		position: relative;
		border-bottom: 1px solid ${colors.gray};
		.todo-list-last-todo {
			font-size: 14px;
			margin: 0 0 8px;
			span {
				margin-left: 12px;
			}
		}
		.todo-list-header-colors {
			display: flex;
			.todo-list-header-color-num {
				display: flex;
				margin-right: 8px;
				p {
					font-size: 14px;
					line-height: 16px;
					margin: 0;
					margin-left: 6px;
				}
				.todo-list-header-round-color {
					width: 16px;
					height: 16px;
					border-radius: 50%;
				}
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
	.todo-list {
		.todo-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 52px;
			border-bottom: 1px solid ${colors.gray};
			.todo-left-side {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				.todo-color-block {
					width: 12px;
					height: 100%;
				}
				.checked-todo-text {
					color: ${colors.gray};
					text-decoration: line-through;
				}
				.todo-text {
					margin-left: 12px;
					font-size: 16px;
				}
			}
			.todo-right-side {
				display: flex;
				align-items: center;
				margin-right: 12px;
				svg {
					&:first-child {
						margin-right: 16px;
					}
				}
				.todo-trash-can {
					width: 16px;
					path {
						fill: ${colors.deep_red};
					}
				}
				.todo-check-mark {
					fill: ${colors.deep_green};
				}
				.todo-button {
					width: 20px;
					height: 20px;
					border-radius: 50%;
					border: 1px solid ${colors.gray};
					background-color: transparent;
					outline: none;
				}
			}
		}
	}
`
