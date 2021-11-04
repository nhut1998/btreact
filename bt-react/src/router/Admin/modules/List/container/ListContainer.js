


import React, { useCallback } from 'react'
import List from '../component/List'
import { useFecthQuestion } from 'helpers/hooks'
import api from 'helpers/api'

export default function ListContainer() {
  const [questions, setQuestions, fetchQuestions] = useFecthQuestion ()
  console.log(questions)

  const remove = useCallback(id => {
    api.delete(`questions/${id}`)
      .then(res => {
        console.log(res.data)
        fetchQuestions()
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchQuestions])

  return (
    <>
      <List questions={questions} setQuestions={setQuestions} remove={remove} />
    </>
  )
}


