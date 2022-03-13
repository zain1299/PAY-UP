import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';

const LoanDetails = () => {
  return (
    <View style={style.root}>
      <View style={style.Heading}>
        <Text style={style.headingText}>Loan Details</Text>
      </View>
    </View>
  );
};

export default LoanDetails;
