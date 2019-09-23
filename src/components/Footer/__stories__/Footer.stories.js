import React from 'react'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import Footer from '..'

storiesOf('Footer', module)
  .addDecorator(jsxDecorator)
  .add('Our beautiful footer', () => <Footer />)
