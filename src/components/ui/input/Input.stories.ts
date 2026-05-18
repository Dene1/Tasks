import type {Meta, StoryObj} from '@storybook/react-vite'
import {Input} from './Input'

const meta: Meta<typeof Input> = {
	component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		placeholder: 'Введите название',
		maxLength: 70,
		text: '',
		minLength: 3
	}
}