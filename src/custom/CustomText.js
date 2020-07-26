import React from 'react';
import { Text } from 'react-native';

const CustomText = props => {
  const setFontType = type => {
    switch (type) {
      case 'black':
        return 'raleway-black';
      case 'bold':
        return 'raleway-bold';
      case 'italic':
        return 'raleway-italic';
      case 'medium':
        return 'raleway-medium';
      case 'light':
        return 'raleway-light';
      case 'semibold':
        return 'raleway-semibold';
      case 'extra-bold':
        return 'raleway-extra-bold';
      case 'extra-light':
        return 'raleway-extra-light';
      case 'thin':
        return 'raleway-thin';
      case 'thin-italic':
        return 'raleway-thin-italic';
      case 'bold-italic':
        return 'raleway-bold-italic';
      case 'extra-bold-italic':
        return 'raleway-extra-bold-italic';
      default:
        return 'raleway-regular';
    }
  };
  const font = setFontType(props.type ? props.type : 'normal');
  const style = [{ fontFamily: font }, props.style || {}];
  return <Text style={style}>{props.children}</Text>;
};

export default CustomText;
