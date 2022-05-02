import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config'

export const useGoogleAddress = address => {

    const [map, setMap] = useState({ lat: 0, lng: 0 })
    const URL_API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleApiKey}`

    useEffect(() => {
        (async () => {
            console.log("useEffect")
            const resp = await axios(URL_API)
            console.log("API CALL")
            console.dir(resp)
            setMap({
                lat: 19.4267261,
                lng: -99.1718796
            })
        })()
    }, [])

    return map
}