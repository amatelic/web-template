import React from 'react';

import LandingPage from '../frontend/pages/landingpage.jsx'
import CssGlobalStyle from './CssGlobalStyle.jsx';
import ThemeProvider from '../frontend/css/ThemeProvider';

export default {
  title: 'Page/Landing page',
  component: () => <ThemeProvider><LandingPage/></ThemeProvider>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LandingPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
//   label: 'Button',
};


