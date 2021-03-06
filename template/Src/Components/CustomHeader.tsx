import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ColorValue,
} from 'react-native';
import BackIcon from '../Assets/Svgs/Icons/back.svg';
import MenuIcon from '../Assets/Svgs/Icons/menu.svg';
import NotificationsIcon from '../Assets/Svgs/Icons/notifications.svg';
import {COLORS, WINDOW_WIDTH} from '../Utilities/Constants';

interface HeaderProps {
  title?: string;
  navigation?: NativeStackNavigationProp<ParamListBase>;
  bgColor?: ColorValue;
  setModal?: (isOpen: boolean) => void;
  isModal?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  enableMenu?: boolean;
  enableNotification?: boolean;
  handleBackInside?: boolean;
  enableBack?: boolean;
  enableTextButton?: boolean;
  buttonText?: string;
  onPressMenu?: () => void;
  onPressNotification?: () => void;
  onPressTextButton?: () => void;
  onPressBackButton?: () => void;
  titleColor?: ColorValue;
  buttonTextSize?: number;
  buttonTextColor?: ColorValue;
}

const CustomHeader = ({
  title = '',
  navigation,
  bgColor = COLORS.white,
  setModal,
  isModal = false,
  paddingHorizontal = 0,
  paddingVertical = 10,
  enableMenu = false,
  enableNotification = false,
  handleBackInside = true,
  enableBack = true,
  enableTextButton = false,
  buttonText = '',
  onPressMenu,
  onPressNotification,
  onPressTextButton,
  onPressBackButton,
  titleColor = COLORS.black,
  buttonTextSize = 12,
  buttonTextColor = COLORS.black,
}: HeaderProps) => {
  return (
    <>
      <View
        style={[
          styles.header,
          {
            backgroundColor: bgColor,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
          },
        ]}>
        <View style={styles.BackButton}>
          {enableBack && (
            <TouchableOpacity
              onPress={() =>
                handleBackInside
                  ? isModal
                    ? setModal && setModal(false)
                    : navigation && navigation.goBack()
                  : onPressBackButton && onPressBackButton()
              }>
              <BackIcon height={20} width={20} />
            </TouchableOpacity>
          )}
          {enableMenu && (
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={onPressMenu}>
              <MenuIcon height={24} width={24} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.headerTitleContainer}>
          <Text
            style={[
              styles.headerTitle,
              {color: titleColor, textAlign: 'center'},
            ]}>
            {title}
          </Text>
        </View>
        <View style={styles.headerButtons}>
          {enableNotification && (
            <TouchableOpacity onPress={onPressNotification}>
              <NotificationsIcon style={{marginHorizontal: 10}} />
            </TouchableOpacity>
          )}

          {enableTextButton && (
            <TouchableOpacity
              style={{paddingTop: 3, alignItems: 'flex-end'}}
              onPress={onPressTextButton}>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'right',
                    fontSize: buttonTextSize,
                    color: buttonTextColor,
                  },
                ]}>
                {buttonText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BackButton: {
    width: (WINDOW_WIDTH - 50) / 3 - 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  headerTitleContainer: {
    width: (WINDOW_WIDTH - 50) / 3 + 100,
    alignItems: 'center',
    paddingVertical: 5,
  },
  headerButtons: {
    width: (WINDOW_WIDTH - 50) / 3 - 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerTitle: {fontSize: 17},
  text: {
    width: 92,
  },
});
