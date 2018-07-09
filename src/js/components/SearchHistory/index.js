import { connect } from 'react-redux';
import SearchHistory from './searchHistory';




function mapStoreToProps(store) {
    return {
        lineItems : store.search.lineItems,
    };
}

export default connect(mapStoreToProps)(SearchHistory);