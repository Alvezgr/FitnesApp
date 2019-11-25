import { useState, useEffect } from 'react'

const useFetch = url => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchResources = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch(error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResources()     
    }, [url])
    return { data, loading, error }
}

export default useFetch