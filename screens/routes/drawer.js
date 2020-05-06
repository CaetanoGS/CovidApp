import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import ChartStack from './chartPlotStack';
import CountryStack from './countryStack';
import Country from '../countryPicker';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,

    },

    Global: {
        screen: ChartStack,
    },

    Country:{
        screen: CountryStack,
    }

});

export default createAppContainer(RootDrawerNavigator);

