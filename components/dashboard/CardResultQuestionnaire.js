import React, { useEffect, useRef } from 'react'
import { Text, View, Image, Animated } from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../constants/Theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Typography from '../../constants/Typography'
import { ButtonCureety } from '../index'
import { Button } from 'react-native-elements'
import Images from '../../constants/Images'
import { styles } from './CardResultQuestionnaireStyle'

export default function CardResultQuestionnaire (props) {
  const { grade, bgColor, msgCHU, onOpenMsg, onCallCHU, nbrMsg, notifReport, nextReport, lastCreatedReport, text1, text2, text3, text4, text5, text6, text7, text8, text9 } = props

  const firstOpacity = useRef(
    new Animated.Value(0)
  ).current

  const secondInterpolation = useRef(
    new Animated.Value(0)
  ).current

  const thirdInterpolation = useRef(
    new Animated.Value(0)
  ).current

  useEffect(() => {
    Animated.stagger(1000,
      [
        Animated.timing(firstOpacity,
          {
            toValue: 1,
            delay: 500,
            duration: 500,
            useNativeDriver: true
          }),
        Animated.timing(secondInterpolation,
          {
            toValue: 20,
            delay: 1000,
            duration: 500,
            useNativeDriver: false
          }),
        Animated.timing(thirdInterpolation,
          {
            toValue: 20,
            delay: 1500,
            duration: 500,
            useNativeDriver: false
          })
      ]).start()
  },
  [])

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.titleContent, Typography.subheading]}>
          {text1}
        </Text>

        <Animated.Image style={[styles.iconContent, { opacity: firstOpacity }]} source={ Images.checkmarkCircle } />
      </View>

      <Animated.Text style={[
        styles.nextQstContent, Typography.body,
        {
          height: secondInterpolation.interpolate(
            {
              inputRange: [0, 100],
              outputRange: [0, 100]
            }
          )
        }
      ]}>

        {text2}

        <Text style={[styles.colorDate, Typography.bodyBold]}>
          {nextReport}
        </Text>
      </Animated.Text>

      <Animated.Text style={[
        styles.nextQstContent, Typography.captionItalic,
        {
          height: thirdInterpolation.interpolate(
            {
              inputRange: [0, 100],
              outputRange: [0, 100]
            }
          )
        }
      ]}>

        {text3}

        <Text style={styles.underText}>
          {notifReport}
        </Text>
      </Animated.Text>

      <View style={[styles.bodyContainer]}>
        {((nbrMsg !== 0 && grade === 2) || grade === 3 || grade === 4) &&
          <Text style={[styles.resultTitle, Typography.captionBold]}>
            {text4}{lastCreatedReport}
          </Text>}

        {(grade === 2) && nbrMsg !== 0 &&
          <View style={styles.consultMsgContainer}>
            <FontAwesome color="black" name="info-circle" size={20}/>

            <Text style={[styles.consultMsgContent, Typography.bodyBold]}>
              {text5}
            </Text>
          </View>}

        {(grade === 3 || grade === 4) &&
          <View style={styles.chuContainer}>
            <View style={styles.callChuContainer}>
              <FontAwesome color="black" name="info-circle" size={20}/>

              <Text style={[styles.callChuTitle, Typography.bodyBold]}>
                {text9}
              </Text>
            </View>

            <Text style={[styles.callChuContent, Typography.body]}>
              {msgCHU}
            </Text>

            {(grade === 2 || grade === 3 || grade === 4) &&
            <Button
              onPress={onCallCHU}
              icon={ <FontAwesome name="phone" size={16} color="white" /> }
              title={text7}
              titleStyle={[Typography.button, styles.titleBtnCall]}
              buttonStyle={styles.btnCallContent}
            />
            }
          </View>}

        {(grade === 2 || grade === 3 || grade === 4) && nbrMsg !== 0 &&
            <Text style={styles.symptomeContent}>
              {nbrMsg}{text6}
            </Text>}

        {(grade === 2) && nbrMsg !== 0 &&
            <ButtonCureety
              onPress={onOpenMsg}
              title={text8}
              bgColor={theme.colors.link}
              buttonStyle={styles.conseilMsg}
            />}

        {(grade === 4 || grade === 3) && nbrMsg !== 0 &&
            <ButtonCureety
              onPress={onOpenMsg}
              titleStyle={{ color: theme.colors.link }}
              title={text8}
              bgColor={'transparent'}
              buttonStyle={styles.conseilMsg}/>}
      </View>
    </View>
  )
}

CardResultQuestionnaire.propTypes = {
  grade: PropTypes.number,
  bgColor: PropTypes.string,
  msgCHU: PropTypes.string,
  onOpenMsg: PropTypes.string,
  onCallCHU: PropTypes.string,
  notifReport: PropTypes.string,
  nextReport: PropTypes.string,
  lastCreatedReport: PropTypes.string
}

CardResultQuestionnaire.defaultProps = {
  bgColor: theme.colors.primary
}
