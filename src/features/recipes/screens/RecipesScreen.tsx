import {NavigationProp} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {useRecipeStorage} from '../recipeHooks';

export const RecipesScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const {createRecipe: create, recipes} = useRecipeStorage();

  // const createRecipe = () => {
  //   const recipe: Recipe = {
  //     name: 'Pasta alio et olio',
  //     description: 'Pasta with garlic and olive oil',
  //     servings: 2,
  //     ingredients: [
  //       '100g pasta',
  //       '2 cloves of garlic',
  //       '2tbsp extra virgin olive oil',
  //     ],
  //     method: [
  //       'Heat pan with oil on medium-high heat.',
  //       'Dice the garlic.',
  //       'Fry the garlic in the pan',
  //       'add pasta',
  //     ],
  //     prepTimeMinutes: 0,
  //     cookTimeMinutes: 10,
  //   };
  //   create(recipe)
  //     .then(id => {
  //       console.log(id);
  //     })
  //     .catch(console.error);
  // };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Scan Name')} title="New" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{padding: 24}}>
      {recipes.map(recipe => {
        return (
          <View
            key={JSON.stringify(recipe._id)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 4,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              padding: 8,
              marginBottom: 16,
            }}>
            <Text>{recipe.name}</Text>
            <Text>{recipe.description}</Text>
          </View>
        );
      })}
    </View>
  );
};
