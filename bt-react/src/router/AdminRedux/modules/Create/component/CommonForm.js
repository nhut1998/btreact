import React from 'react'
import { QUESTION_TYPE } from '../const'

import { useHistory } from 'react-router-dom'

import _ from 'lodash'

export default function CommonForm({ data, setData, submit, title }) {
  console.log(data)
  console.log(setData)


  const history = useHistory()


  const onTypeToggle = type => {
    // setTypeToggle(type)
    setData({ questionType: type })
  }




  return (
    <div className='container'>
      <div className='display-4 mb-5'>{title}</div>
      <div className='ps-5'>
        <div className='d-flex align-items-center mb-3'>
          <label style={{ minWidth: 100 }}>Type</label>
          <div className='d-flex'>
            {
              Object.keys(QUESTION_TYPE).map(key => (
                <div className="form-check ms-3">
                  <input
                    onChange={() => { onTypeToggle(QUESTION_TYPE[key].enum) }}
                    checked={data.questionType === QUESTION_TYPE[key].enum}
                    className="form-check-input"
                    type="radio"
                    name="questionType"
                    id="fill-in-blank"
                  />
                  <label className="form-check-label" htmlFor="fill-in-blank">
                    {QUESTION_TYPE[key].label}
                  </label>
                </div>

              ))
            }

          </div>
        </div>

        <div className='d-flex align-items-center mb-3'>
          <label style={{ minWidth: 100 }}>Content</label>
          <input
            type="text"
            value={data.content}
            onChange={e => { setData({ content: e.target.value }) }}
            className="form-control w-25"
          />
        </div>

        {
          _.map(QUESTION_TYPE, item => data.questionType === item.enum && (
            <item.components
              key={item.enum}
              answersByType={data.answers[item.enum]}
              setAnswerByType={newValue => {
                setData({
                  answers: {
                    ...data.answers,
                    [item.enum]: newValue
                  }
                })
              }}
            />
          ))
        }

      </div>
      <div className='d-flex justify-content-center'>
        <button onClick={history.goBack} className='btn btn-danger'>Cancel</button>
        <button onClick={submit} className='btn btn-success ms-2'>Submit</button>
      </div>
    </div>
  )
}
