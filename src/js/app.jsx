import React from 'react';
import Search from './components/Search';
import SearchHistory from './components/SearchHistory';
import CityInfo from './components/CityInfo';
import CityBar from './components/cityBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-3 text-left">Origin Weather Application</h1>
          <br />
          <h4 className="display-8 text-left">Always know if you will need an umbrella</h4>
        </div>

        
        <div className="row">
          <div className="col-12 col-md-12 mb-12">
            <CityBar />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 mb-12">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <CityInfo />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <SearchHistory />
          </div>

        </div>
      </div>
    );
  }
}
