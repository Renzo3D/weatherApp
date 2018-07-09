import React from 'react';


export default class SearchHistory extends React.Component {

    render() {
        const { lineItems } = this.props;
        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-blue bg-info'>Search History</div>
                <div className='card-body'>
                    <form>
                        <table className='table table-striped'>
                            <thead>
                            </thead>
                            <tbody>
                            {
                                lineItems.map(lineItem => (
                                    <tr>
                                        <td>{ lineItem.cityName.charAt(0).toUpperCase() + lineItem.cityName.substr(1) }</td>
                                        <td style={{ width: 120 }}>{ (lineItem.date.getMonth() +1) + "/" + lineItem.date.getDate() +"/" + lineItem.date.getFullYear() } <br/> {lineItem.date.getHours() +":" + lineItem.date.getMinutes() + ":" + lineItem.date.getSeconds()} </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}


