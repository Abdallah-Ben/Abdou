import React from 'react'
import { styles } from './ButtonCureetyStyle'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import Theme from '../../constants/Theme'
import Typography from '../../constants/Typography'

export default function ButtonCureety (props) {
  const { titleColor, bgColor, title, disabled } = props

  return (
    <Button
      {...props}
      title={title}
      titleStyle={{ ...Typography.button, color: titleColor, ...props.titleStyle }}
      buttonStyle={{ ...styles.buttonStyle, backgroundColor: bgColor, ...props.buttonStyle }}
      disabled={disabled}
    />
  )
}

ButtonCureety.propTypes = {
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string
}

ButtonCureety.defaultProps = {
  titleColor: Theme.colors.white,
  bgColor: Theme.colors.primary,
  disabled: false
}
