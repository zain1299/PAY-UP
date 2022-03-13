import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'utils/responsive';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  Heading: {
    backgroundColor: '#aa833d',
    paddingLeft: wp(4),
    height: hp(7),
    width: '100%',
    textAlign: 'center',
  },
  headingText: {
    fontSize: wp(7.5),
    color: '#fff',
    textAlign: 'center',
  },
});
