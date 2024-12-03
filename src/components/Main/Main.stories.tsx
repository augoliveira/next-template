import { StoryFn, Meta } from '@storybook/react/types-6-0';

import Main from './Main';
import type { JSX } from 'react';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: StoryFn = (args: JSX.IntrinsicAttributes & { children: React.ReactNode; }) => (
  <Main {...args}>
    <h1>Next Example</h1>
  </Main>
);
