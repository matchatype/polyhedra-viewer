import React from 'react'
import { Link } from 'react-router'
import { css, StyleSheet } from 'aphrodite/no-important'

import Icon from './Icon'
import { transition, resetButton, resetLink } from '../styles/common'

const styles = StyleSheet.create({
  button: resetButton,
  link: resetLink,
  icon: {
    ...transition('color', .25),
    padding: 10,
    color: 'Gray',
    ':hover': {
      color: 'DimGray'
    },
    ':focus': {
      outline: 'none',
      color: 'DarkSlateGray',
    },
  },
})

export const IconButton = ({ name, onClick }) => (
  <button onClick={onClick} className={css(styles.button, styles.icon)}>
    <Icon name={name} size={4} />
  </button>
)

export const IconLink = ({ name, to }) => (
  <Link to={to} className={css(styles.link, styles.icon)}>
    <Icon name={name} size={4} />
  </Link>
)