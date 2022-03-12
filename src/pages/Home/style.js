// import {StyleSheet} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from '../../utils/responsive';

// export default StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   Heading: {
//     backgroundColor: '#DACE19',
//     paddingLeft: wp(4),
//     height: hp(7),
//     width: '100%',
//     textAlign: 'center',
//     shadowColor: 'white',
//   },
//   headingText: {
//     fontSize: wp(7.5),
//   },
// });

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'utils/responsive';

export const style = StyleSheet.create({
  root: {
    // height: '100%',
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    height: '95%',
    paddingHorizontal: wp(5),
  },
  itemContainer: {
    marginVertical: hp(3),
  },
  imageHeading: {
    color: 'blue',
    fontWeight: '600',
    fontSize: wp(8),
    textAlign: 'center',
  },
  imageName: {
    color: 'blue',
    fontStyle: 'italic',
  },
});
