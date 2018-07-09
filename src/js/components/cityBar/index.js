import { connect } from 'react-redux';
import CityBar from './cityBar';

function mapStoreToProps(store) {
    return {
        cityName : store.search.cityName,
    }
}

export default connect(mapStoreToProps)(CityBar);