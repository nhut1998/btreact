import {useCallback, useState, useEffect } from 'react'
import api from 'helpers/api'
// import axios from 'helpers/axios'


export  function useFecthQuestion() {
    const [questions, setQuestions] = useState([])

    const fetchQuestions = useCallback(() =>{
      api.get('questions')
      .then(res => {
        setQuestions(res.data)
        console.log(res)
      })

    },[])

  useEffect(() => {fetchQuestions() }, [fetchQuestions])



// useEffect(() => {
//    axios({
//        url:'api/v1/questions',
//        method:'GET'
//    })
//    .then(res=>{
//        setQuestions(res.data)
//    })
// }, [])

  return [questions,setQuestions, fetchQuestions]
}

