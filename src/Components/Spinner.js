import React from 'react'
import loading from './loading.gif'

const Spinner = () =>{

    return (
      <div className="text-center">
        <img className="my-3" style={{height: "30px"}} src={loading} alt="Loading"></img>
      </div>
    )
}

export default Spinner
