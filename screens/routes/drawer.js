import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import ChartStack from './chartPlotStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,

    },

    Global: {
        screen: ChartStack,
    }
});

export default createAppContainer(RootDrawerNavigator);