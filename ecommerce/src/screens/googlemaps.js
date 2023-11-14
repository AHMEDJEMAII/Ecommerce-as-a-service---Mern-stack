import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';


class googlemap extends Component{

render(){

return(
    <div className='App'>
        <header className='App-header'></header>
        <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />
 
 <InfoWindow onClose={this.onInfoWindowClose}>
 
 </InfoWindow>
 </Map>
</div>
);
}
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA1InzWtxTjrXZp3aURTrxKsBjuLx23SIs")
  })(googlemap)