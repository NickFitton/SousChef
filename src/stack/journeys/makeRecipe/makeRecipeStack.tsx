import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {MethodScreen} from './screens/Method';
import {MiseEnPlaceScreen} from './screens/MiseEnPlace';
import {MakeRecipeStackParamList} from './types';
import {Header} from '../../../components/Header/Header';

const MakeRecipe = createNativeStackNavigator<MakeRecipeStackParamList>();

export function MakeRecipeStack() {
  const header = (props: NativeStackHeaderProps) => <Header {...props} />;
  return (
    <MakeRecipe.Navigator screenOptions={{header}}>
      <MakeRecipe.Screen
        name="MiseEnPlace"
        component={MiseEnPlaceScreen}
        options={{title: 'Mise En Place'}}
      />
      <MakeRecipe.Screen
        name="Method"
        component={MethodScreen}
        options={{title: 'Method'}}
      />
      {/* TODO: Enjoyment ratings */}
    </MakeRecipe.Navigator>
  );
}
