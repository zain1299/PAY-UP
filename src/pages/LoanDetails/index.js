import React, {useState} from 'react';
import {set, useForm} from 'react-hook-form';
import {View, Text, TextInput, Alert} from 'react-native';
import {Button, Dropdown} from '../../common';
import {style} from './style';

const LoanDetails = ({navigation}) => {
  const [amount, setAmount] = useState();
  const [isLoading, setLoading] = useState(false);

  var inst = null;

  const {control, handleSubmit, formState} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const {errors} = formState;

  const tenure = [
    {name: '3 Months', id: 1},
    {name: '6 Months', id: 2},
  ];

  const submit = val => {
    if (amount >= 2000 && amount <= 50000) {
      if (val.tenure === 1) {
        inst = (parseInt(amount) + parseInt(amount) * 0.15) / 3;
      } else {
        inst = (parseInt(amount) + parseInt(amount) * 0.2) / 6;
      }

      Alert.alert('Success', `Your monthly installment is ${inst.toFixed(2)}`, [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert('Error occured', `Enter Amount between 2,000 to 50,000`, [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <View style={style.root}>
      <View style={style.Heading}>
        <Text style={style.headingText}>Loan Details</Text>
      </View>

      <Text style={style.imageHeading}>Loan Amount</Text>
      <Text style={style.textChild}>
        Amount should be between 2,000 - 50,000
      </Text>

      <View style={style.action}>
        <TextInput
          placeholder="Amount"
          style={style.textInput}
          keyboardType="numeric"
          onChangeText={e => setAmount(e)}
        />
      </View>

      <Text style={style.imageHeading}>Loan Tenure</Text>
      <Text style={style.textChild}>
        Amount should be between 2,000 - 50,000
      </Text>

      <View style={style.tenure}>
        <Dropdown
          control={control}
          name="tenure"
          error={!!errors?.activity_id}
          message={errors?.activity_id?.message}
          containerStyles={style.tenure}
          items={tenure}
        />
      </View>

      <View style={style.button}>
        <Button
          label={!isLoading && 'Submit'}
          primary={formState.isValid}
          icon={
            isLoading && (
              <ActivityIndicator
                style={{position: 'absolute', left: wp('36')}}
              />
            )
          }
          onPress={handleSubmit(submit)}
          containerStyles={style.btn}
          active={amount}
        />
      </View>
    </View>
  );
};

export default LoanDetails;
