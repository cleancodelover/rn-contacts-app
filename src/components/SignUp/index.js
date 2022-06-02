import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
const RegisterComponent = ({
  loading,
  error,
  onSubmit,
  onChange,
  form,
  errors,
}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {
                console.log('Hello world');
              }}
              onDismiss={() => {}}
              danger
              message={error?.error}
            />
          )}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter username"
            error={errors.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter first name"
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
          />
          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter last name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />
          <Input
            icon={<Text>Show</Text>}
            label="Password"
            // error={'NONSENSE! This field is required.'}
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            primary
            loading={loading}
            title="Submit"
            onPress={onSubmit}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
