import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
function Maps({ data }) {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const mapStyles = {
        height: '58vh',
        width: "168%"
    }

    const defaultCenter = {
        // lat: 19.4267261,
        // lng: -99.1718796
        lat: data.lat || 19.4267261,
        lng: data.lng || -99.1718796
    }

    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    MapStyle={mapStyles}
                    zoom={9}
                    center={defaultCenter}
                >
                    <Marker position={defaultCenter} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Maps;