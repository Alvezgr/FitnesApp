import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButtom from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from '../pages/500'
import useFetch from '../hooks/useFech'
import url from '../config'

const Exercises = () => {
    const { data, loading, error } = useFetch(`${url}/exercises`)   

    if(loading)
        return <Loading />
    if(error)
        return <FatalError />
    return(
        <React.Fragment>
            <Welcome 
                username="Gerardo"
            />
            <ExerciseList 
                exercises={data}
            />
            <AddButtom />
        </React.Fragment>
    )
}
export default Exercises