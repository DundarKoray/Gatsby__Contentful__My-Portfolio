import React from 'react'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import Testimonials from '..'

const data = [
  {
    id: 1,
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'John Doe',
  },
  {
    id: 2,
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'John Doe',
  },
  {
    id: 3,
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'John Doe',
  },
]

storiesOf('Testimonials', module)
  .addDecorator(jsxDecorator)
  .add('Testimonials', () => (
    <>
      <Testimonials />
    </>
  ))

