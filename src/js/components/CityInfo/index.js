import { connect } from 'react-redux';
import CityInfo from './cityInfo';

function mapStoreToProps(store) {
    return {
        cityName : store.search.cityName,
        cityData : store.search.cityData,
    }
}

export default connect(mapStoreToProps)(CityInfo);