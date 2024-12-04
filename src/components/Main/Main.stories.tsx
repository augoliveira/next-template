import { StoryFn, Meta } from '@storybook/react';

import Main from './Main';
import type { JSX } from 'react';

export default {
  title: 'Main',
  component: Main
} as Meta;

export function Basic(args: JSX.IntrinsicAttributes & { children: React.ReactNode; }) {
  return (
    <Main {...args}>
      <h1>Next Example</h1>
    </Main>
  );
}
