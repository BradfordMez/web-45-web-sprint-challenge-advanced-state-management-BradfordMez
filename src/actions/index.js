import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const fetchSmurfs=()=>{
    return(dispatch)=>{
        dispatch(fetchSmurf());
        axios.get('http://localhost:3333/smurfs')
            .then(res=>{
                console.log('LOOK AT ME!!!', res.data)
                dispatch(fetchSuccess(res.data));
            })
            .catch(err=>{
                dispatch(fetchFail(err))
            })
    }
}
export const SMURF_FETCH="SMURF_FETCH";
export const fetchSmurf=()=>{
    return({type:SMURF_FETCH})
}

export const SMURF_SUCCESS="SMURF_SUCCESS";
export const fetchSuccess = (smurfs) => {
    return({ type: SMURF_SUCCESS, payload: smurfs})
}

export const SMURF_FAIL="SMURF_FAIL";
export const fetchFail=(error)=>{
    return({type:SMURF_FAIL, payload:error})
}

export const SMURF_ADD="SMURF_ADD";
export const fetchAdd=(smurf)=>{
    return({type:SMURF_ADD, payload:smurf})
}

export const SMURF_ERROR="SMURF_ERROR";
export const fetchError=(error)=>{
    return({type:SMURF_ERROR, payload:error})
}
