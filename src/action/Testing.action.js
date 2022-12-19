import data from '../Config/data.json';

export const fetchTemples = () => async(dispatch, getState) => {
    console.log("function initialised")
    return new Promise(async(resolve, reject) => {
        try{
            const Temples = data.templeData
            dispatch({
                type: 'TEMPLES_FETCHED',
                payload: Temples
            })
            console.log(Temples)
        } catch {
            console.log("error")
        }
    })
}