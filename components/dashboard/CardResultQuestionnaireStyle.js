import { StyleSheet } from 'react-native'
import { width } from '../../constants/Layout'
import theme from '../../constants/Theme'

export const styles = StyleSheet.create({
  iconContent: {
    height: 25,
    resizeMode: 'contain',
  },
  container: {
    minHeight: 145,
    width: width * 0.9,
    alignItems: 'center',
    borderRadius: 10,
    // justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '90%',
  },
  titleContent: {
    textTransform: 'uppercase',
    color: theme.colors.white,
    flex: 1,
  },
  nextQstContent: {
    color: theme.colors.white,
    width: '90%',
    marginTop: 5,
    marginBottom: 5,
  },
  colorDate: {
    color: theme.colors.white,
  },
  underText: {
    textDecorationLine: 'underline',
  },
  bodyContainer: {
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '95%',
    marginTop: 15,
    marginBottom: 15,
  },
  resultTitle: {
    marginTop: 20,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    color: theme.colors.primary,
  },
  consultMsgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  consultMsgContent: {
    color: theme.colors.default,
    marginLeft: 5,
    marginRight: 5,
  },
  chuContainer: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
    marginTop: 15,
    marginBottom: 15,
    width: '95%',
  },
  callChuContainer: {
    marginBottom: 5,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  callChuTitle: {
    marginLeft: 10,
    color: theme.colors.default,
  },
  callChuContent: {
    marginBottom: 5,
    marginTop: 5,
    color: theme.colors.default,
    width: '90%',
  },
  titleBtnCall: {
    marginLeft: 10,
    minWidth: '20%',
  },
  btnCallContent: {
    backgroundColor: theme.colors.link,
    marginBottom: 14,
    marginTop: 5,
    borderRadius: 6,
  },
  symptomeContent: {
    marginTop: 10,
    color: theme.colors.label,
  },
  conseilMsg: {
    margin: 15,
    borderRadius: 6,
  },
})
