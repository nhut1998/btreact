import { FETCH_LIST } from './types'
import api from 'helpers/api'


export const fetchList = () => {
  return dispatch => {
    api.get('questions')
      .then(res => {
        console.log(res)
        dispatch(actFetchList(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchList = list => ({
  type: FETCH_LIST,
  payload: list
})

export const deleteId = (id) =>{
    return dispatch =>{
        api.delete(`questions/${id}`)
        .then(res=>{
           
            dispatch(fetchList())
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

