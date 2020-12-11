import React from 'react';
import { Button } from 'react-native';

export type AppButtonPropsType = {
  title: string;
  onPress: () => void;
};

export const AppButton: React.FunctionComponent<AppButtonPropsType> = (
  props: AppButtonPropsType,
) => <Button title={props.title} onPress={props.onPress} />;
