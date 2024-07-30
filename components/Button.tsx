import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #4285F4;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const Button = ({ onPress, title }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default Button;
