
import { connect } from 'react-redux';
import Search from './search';

function mapStoreToProps(store) {
return {
    cityName : store.search.cityName,
    cityData: store.search.cityData,
    }
}

export default connect(mapStoreToProps)(Search);