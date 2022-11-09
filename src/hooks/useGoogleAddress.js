import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useGoogleAddress = (address) => {
    const [map, setMap] = useState({});

    const API_KEY = process.env.GOOGLE_API_KEY
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}A&key=${API_KEY}`

    useEffect(async () => {
        const response = await axios(API);
        console.log('geo data response', response);
        setMap(response.data.results[0].geometry.location)
    }, [])

    return {
        map
    }
}

export { useGoogleAddress }