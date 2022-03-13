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
  textInput: {
    // flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#000',
    backgroundColor: '#f3e980',
    margin: '3%',
  },
  action: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  imageHeading: {
    color: 'black',
    fontWeight: '600',
    fontSize: wp(8),
    marginLeft: wp(2),
    // textAlign: 'center',
  },
  textChild: {
    fontSize: wp(4),
    marginLeft: wp(2),
  },
  tenure: {
    width: wp('90%'),
    marginLeft: wp('2.5%'),
    marginTop: wp('1.5%'),
  },
  button: {
    marginTop: '20%',
    marginBottom: '5%',
    marginLeft: wp('2.5%'),
    marginRight: wp('2.5%'),
  },
});
