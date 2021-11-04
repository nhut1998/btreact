import React, { useCallback, useState } from 'react'
import CommonForm from '../component/CommonForm'
import { QUESTION_TYPE } from '../const'
import { v4 as uuidv4 } from 'uuid'
import api from 'helpers/api'
import { useHistory } from 'react-router'


export  function Create() {

  const history = useHistory()

  const [data, setData] = useState({
    questionType: QUESTION_TYPE['multiple-choice'].enum,
    content: '',
    answers: {
    [QUESTION_TYPE['multiple-choice'].enum]: Array(4).fill().map(() => ({ id: uuidv4(), content: '', exact: false })),
    [QUESTION_TYPE['fill-in-blank'].enum]: [{ id: uuidv4(), content: '', exact: null }]
    }
  })

  const submit = useCallback(() => {

    const mapping = {
      questionType:data.questionType,
      content:data.content,
      answers:data.answers[data.questionType]
    }


    api.post('questions', mapping)
      .then(res => {
        console.log(res)
        history.push('/admin/list')
      })
      .catch(res => {
        console.log(res)
      })
  }, [data, history])


  return (
    <>
      <CommonForm
        title='Create'
        data={data}
        setData={newData => { setData({ ...data, ...newData }) }}
        submit={submit}
      />
    </>
  )
}


