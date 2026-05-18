import type {Meta, StoryObj} from '@storybook/react-vite'
import {Checkbox} from './Checkbox'

const meta: Meta<typeof Checkbox> = {
	component: Checkbox
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Checked: Story = {
	args: {
		selected: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Отмеченный'
			}
		}
	}
}

export const Unchecked: Story = {
	args: {
		selected: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Не отмеченный'
			}
		}
	}
}