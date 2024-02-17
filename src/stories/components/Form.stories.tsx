import * as Yup from "yup"; 
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../../components';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: { onSubmit: { action: 'submitted' }}
} satisfies Meta<typeof Form>;
export default meta;

const schema = Yup.object().shape({
  field1: Yup.string()
          .min(4, "Field1 must be 4 characters or more")
          .required()
          .default('default'),
  field2: Yup.string()
          .max(8, "field2 must be 8 characters or less")
});

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 
    schema: schema
  }
};

