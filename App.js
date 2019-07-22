import Home from './src/screens/home'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const paths = createStackNavigator({
  Home
})


export default createAppContainer(paths);
