import MultipleChoice from "./component/MultipleChoice"
import FillBlank from "./component/FillBlank"

export const QUESTION_TYPE = {
    'multiple-choice':{
      enum:1,
      label:'MultipleChoice',
      components: MultipleChoice 

    } ,
    'fill-in-blank':{
      enum:2,
      label:'Fill in blank',
      components:FillBlank
    }
  }
  