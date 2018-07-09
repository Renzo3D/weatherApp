import React from 'react';

export default class CityInfo extends React.Component {
    render() {
        const {cityName, cityData} = this.props;
        
        return (
            <div className="card border-info mb-3">
                <div className="card-header text-blue bg-info">City Information</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <h3 htmlFor="city-name text-center" className="text-center" id="cityName"><strong > {cityName.toUpperCase()}</strong></h3>
                            <h6 className="text-center">Lat/Long:{ cityData && cityData.coord.lat }{ cityData && cityData.coord.lon }</h6>
                        </div>
                        <div className="row">
                            <div className="col-4"><center><strong>Temperature (F)</strong></center><div>
                            <samp><center>{ cityData && cityData.main.temp +"F" }</center></samp></div></div>
                            <div className="col-4"><center><strong>Pressure</strong></center><div>
                            <samp><center>{ cityData && cityData.main.pressure }</center></samp></div></div>
                            <div className="col-4"><center><strong>Humidity</strong></center><div>
                            <samp><center>{ cityData && cityData.main.humidity + "%" }</center></samp></div></div>
                        </div>                            
                        <div className="row">
                            <div className="col-4"><center><strong>Lower Temp (F)</strong></center><div>
                            <samp><center>{ cityData && cityData.main.temp_min + "F"}</center></samp></div></div>
                            <div className="col-4"><center><strong>Higer Temp (F)</strong></center><div>
                            <samp><center>{ cityData && cityData.main.temp_max +"F"}</center></samp></div></div>
                            <div className="col-4"><center><strong>Wind Speed</strong></center><div>
                            <samp><center>{ cityData && cityData.wind.speed + "mph" }</center></samp></div></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

