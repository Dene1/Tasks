import type {Meta, StoryObj} from '@storybook/react-vite'
import {Label} from './Label'

const meta: Meta<typeof Label> = {
	component: Label,
	tags: ['autodocs'],
	args: {
		toggleTodoSelection: (id: string) => console.log('Toggle selection:', id),
		item: {
			id: '1',
			title: 'Example Todo Item',
			isSelected: false,
			isCompleted: false
		}
	}
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
	args: {
		item: {
			id: '1',
			title: 'Example Todo Item',
			isSelected: false,
			isCompleted: false
		}
	}
}

export const Completed: Story = {
	args: {
		item: {
			id: '2',
			title: 'Completed Todo',
			isSelected: false,
			isCompleted: true
		}
	}
}

export const Selected: Story = {
	args: {
		item: {
			id: '3',
			title: 'Selected Todo',
			isSelected: true,
			isCompleted: false
		}
	}
}