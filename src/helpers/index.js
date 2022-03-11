import {Alert} from 'react-native';

export const parseError = error => {
  Alert.alert('Error occured', `Failed to submit data ${error}`, [
    {text: 'OK'},
  ]);
};

export const numberValidation = number => {
  const numberLength = number;
  try {
    if (numberLength.length) {
      if (numberLength?.slice(0, 2) === '03') {
        if (numberLength?.length === 11) {
          return {
            number: {numberLength},
          };
        } else {
          throw new Error('Number should be 11 digits long');
        }
      } else {
        throw new Error('First 2 digit should be 03');
      }
    } else {
      return {valid: false};
    }
  } catch (error) {
    parseError(error);
  }
};
