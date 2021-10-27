import React, { useEffect, useRef } from 'react'
import {
  Text,
  View,
  Image,
  Animated,
  UIManager,
  LayoutAnimation,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../constants/Theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Typography from '../../constants/Typography'
import { ButtonCureety } from '../index'
import { Button } from 'react-native-elements'
import Images from '../../constants/Images'
import { styles } from './CardResultQuestionnaireStyle'
import { useState } from 'react'
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
export default function CardResultQuestionnaire({
  grade,
  bgColor,
  msgCHU,
  onOpenMsg,
  onCallCHU,
  nbrMsg,
  notifReport,
  nextReport,
  lastCreatedReport,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}) {
  const [first1Value, setFirst1Value] = useState(false)
  const [firstValue, setFirstValue] = useState(false)
  const [secondValue, setSecondValue] = useState(false)
  const [thirdValue, setThirdValue] = useState(false)
  setTimeout(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setFirst1Value(true)
  }, 1000)
  setTimeout(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setFirstValue(true)
  }, 2000)
  setTimeout(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setSecondValue(true)
  }, 3000)
  setTimeout(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    setThirdValue(true)
  }, 4000)
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.titleContent, Typography.subheading]}>
          {text1}
        </Text>

        <Image
          style={[styles.iconContent, { opacity: first1Value ? 1 : 0 }]}
          source={Images.checkmarkCircle}
        />
      </View>

      {firstValue && (
        <Text style={[styles.nextQstContent, Typography.body]}>
          {text2}

          <Text style={[styles.colorDate, Typography.bodyBold]}>
            {nextReport}
          </Text>
        </Text>
      )}

      {secondValue && (
        <Text style={[styles.nextQstContent, Typography.captionItalic]}>
          {text3}

          <Text style={styles.underText}>{notifReport}</Text>
        </Text>
      )}

      {thirdValue && (
        <View style={[styles.bodyContainer]}>
          {((nbrMsg !== 0 && grade === 2) || grade === 3 || grade === 4) && (
            <Text style={[styles.resultTitle, Typography.captionBold]}>
              {text4}
              {lastCreatedReport}
            </Text>
          )}

          {grade === 2 && nbrMsg !== 0 && (
            <View style={styles.consultMsgContainer}>
              <FontAwesome color='black' name='info-circle' size={20} />

              <Text style={[styles.consultMsgContent, Typography.bodyBold]}>
                {text5}
              </Text>
            </View>
          )}

          {(grade === 3 || grade === 4) && (
            <View style={styles.chuContainer}>
              <View style={styles.callChuContainer}>
                <FontAwesome color='black' name='info-circle' size={20} />

                <Text style={[styles.callChuTitle, Typography.bodyBold]}>
                  {text9}
                </Text>
              </View>

              <Text style={[styles.callChuContent, Typography.body]}>
                {msgCHU}
              </Text>

              {(grade === 2 || grade === 3 || grade === 4) && (
                <Button
                  onPress={onCallCHU}
                  icon={<FontAwesome name='phone' size={16} color='white' />}
                  title={text7}
                  titleStyle={[Typography.button, styles.titleBtnCall]}
                  buttonStyle={styles.btnCallContent}
                />
              )}
            </View>
          )}

          {(grade === 2 || grade === 3 || grade === 4) && nbrMsg !== 0 && (
            <Text style={styles.symptomeContent}>
              {nbrMsg}
              {text6}
            </Text>
          )}

          {grade === 2 && nbrMsg !== 0 && (
            <ButtonCureety
              onPress={onOpenMsg}
              title={text8}
              bgColor={theme.colors.link}
              buttonStyle={styles.conseilMsg}
            />
          )}

          {(grade === 4 || grade === 3) && nbrMsg !== 0 && (
            <ButtonCureety
              onPress={onOpenMsg}
              titleStyle={{ color: theme.colors.link }}
              title={text8}
              bgColor={'transparent'}
              buttonStyle={styles.conseilMsg}
            />
          )}
        </View>
      )}
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
  lastCreatedReport: PropTypes.string,
}

CardResultQuestionnaire.defaultProps = {
  bgColor: theme.colors.primary,
}
