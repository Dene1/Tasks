import type {Meta, StoryObj} from '@storybook/react-vite'
import {Label} from './Label'
import {userEvent, within, expect, fn} from 'storybook/test'
import {useArgs} from 'storybook/preview-api'

const meta: Meta<typeof Label> = {
	component: Label,
	tags: ['autodocs'],
	args: {
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
	},
	render: function Render(args) {
		const [{item}, updateArgs] = useArgs()

		const toggleTodoSelection = () => {
			updateArgs({
				item: {
					...item,
					isSelected: !item.isSelected
				}
			})
		}

		return (
			<Label  {...args} item={item}
			        toggleTodoSelection={toggleTodoSelection} />
		)
	},
	play: async ({canvasElement}) => {
		const canvas = within(canvasElement)
		const checkbox = canvas.getByRole('checkbox')

		await userEvent.click(checkbox)
		// expect(checkbox).toBeChecked()
		expect(checkbox).not.toBeChecked()
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