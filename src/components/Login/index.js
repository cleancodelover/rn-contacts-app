import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Messages';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
const LoginComponent = ({error, onChange, loading, onSubmit}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Please login here</Text>
      <View style={styles.form}>
        {error && !error?.error && (
          <Message retry danger message="Something went wrong" />
        )}
        <Input
          label="Username"
          placeholder="Enter username"
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
