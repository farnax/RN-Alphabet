import * as Font from 'expo-font';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'source-regular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
      'source-bold': require('../assets/fonts/SourceSansPro-Bold.ttf')
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};