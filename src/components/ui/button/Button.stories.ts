import type {Meta, StoryObj} from '@storybook/react-vite'

import {Button} from './Button'

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: 'Default',
		variant: 'default'
	},
	parameters: {
		docs: {
			description: {
				story: 'Стандартная кнопка'
			}
		}
	}
}

export const Delete: Story = {
	args: {
		label: '✖',
		variant: 'delete'
	},
	parameters: {
		docs: {
			description: {
				story: 'Кнопка удаления'
			}
		}
	}
}
export const Green: Story = {
	args: {
		label: 'Green',
		variant: 'green'
	},
	parameters: {
		docs: {
			description: {
				story: 'Кнопка сделать выполненным'
			}
		}
	}
}
export const Red: Story = {
	args: {
		label: 'Red',
		variant: 'red'
	}
}

export const Add: Story = {
	args: {
		label: 'Add',
		variant: 'add'
	},
	parameters: {
		docs: {
			description: {
				story: 'Кнопка добавления'
			}
		}
	}
}

export const Move: Story = {
	args: {
		label: 'Move ↑↓',
		variant: 'move'
	},
	parameters: {
		docs: {
			description: {
				story: 'Кнопка перемещения'
			}
		}
	}
}