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
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  itemContainer: {
    marginVertical: hp(3),
  },
  imageHeading: {
    color: 'black',
    fontWeight: '600',
    fontSize: wp(8),
    // textAlign: 'center',
  },
  imageName: {
    color: 'blue',
    fontStyle: 'italic',
  },
  button: {
    marginTop: '20%',
    marginBottom: '5%',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: '#f3e980',
    textDecorationColor: 'white',
  },
  action: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
});
