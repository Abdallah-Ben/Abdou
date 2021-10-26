import { StyleSheet } from 'react-native'
import { width } from '../../constants/Layout'

const WIDTH_RATIO = 0.3

export const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: width * WIDTH_RATIO,
    elevation: 0,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    shadowColor: 'rgba(86, 209, 200, 0.2)',
    shadowOffset: {
      height: 16,
      width: 0
    },
    shadowOpacity: 1,
    shadowRadius: 26,
    minWidth: width * WIDTH_RATIO
  }
})
