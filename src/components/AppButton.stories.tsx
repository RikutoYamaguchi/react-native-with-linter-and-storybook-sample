import React from 'react';
import { AppButton, AppButtonPropsType } from './AppButton';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'AppButton',
  component: AppButton,
  argTypes: {
    onPress: {
      action: 'pressed',
    },
  },
} as Meta;

const Template: Story<AppButtonPropsType> = (args) => <AppButton {...args} />;

export const primary = Template.bind({});
primary.args = {
  title: 'Button',
};
