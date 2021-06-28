import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountryThunk } from '../actions/weatherActions'

const Country = ({nameCountry}) => {
    const country = useSelector(state => state.country)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountryThunk(nameCountry))
    }, [dispatch])
    return (
        <div>
            City
        </div>
    )
}

export default Country
