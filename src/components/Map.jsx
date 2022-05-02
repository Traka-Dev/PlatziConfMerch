import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import config from '../config'

export const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%",
    }
    const defaultCenter = { lat: data.lat, lng: data.lng }

    return (
        <LoadScript googleMapsApiKey={config.googleApiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}