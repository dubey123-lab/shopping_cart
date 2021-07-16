import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from '../../Context/Login'

const Protected = (props) => {
    console.log("props data is", props);
    const [isLoading, _setIsLoading] = useState(true);
    let Home = props.Home
    const history = useHistory();
    const context = useContext(LoginContext);

    useEffect(() => {
        if (!context.userData) {
            history.push("/")
        }
        _setIsLoading(false);

    }, [])

    if (isLoading)
        return <h1>Loading .....</h1>
    return (
        <div>
            <Home />
        </div>
    )
}

export default Protected
