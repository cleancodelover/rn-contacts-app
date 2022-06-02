import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';
export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    paddingVertical: 11,
    borderRadius: 4,
  },
  loaderSection: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
