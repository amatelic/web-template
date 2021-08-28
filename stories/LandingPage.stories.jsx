import React from 'react';

import LandingPage from '../frontend/pages/landingpage.jsx'
import CssGlobalStyle from './CssGlobalStyle.jsx';
import ThemeProvider from '../frontend/css/ThemeProvider';

const page = {
  title: 'Page/Landing page',
  component: () => <ThemeProvider><LandingPage/></ThemeProvider>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default page;

const Template = (args) => <ThemeProvider><LandingPage {...args}/></ThemeProvider>;
export const LandingPage1 = Template.bind({})

LandingPage1.args = {
  primary: 'test',
}



