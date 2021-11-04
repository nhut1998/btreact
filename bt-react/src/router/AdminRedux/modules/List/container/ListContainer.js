


import React, { useEffect,useCallback } from 'react'
import List from '../component/List'
import { useDispatch, useSelector } from 'react-redux'


import { fetchList, deleteId } from 'router/AdminRedux/redux/actions'


export default function ListContainer() {
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions.list)


  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  
  const remove = useCallback(
    (id) => {
      dispatch( deleteId(id))
    },
    [dispatch],
  )

  return (
    <>
      <List questions={questions} remove={remove} />
    </>
  )
}




// const mapDispatchToProps  = dispatch => {
//   return {
//     remove: id => {
//       dispatch(deleteId(id))
//     }
//   }
// }


// export default connect(mapDispatchToProps )(ListContainer)



