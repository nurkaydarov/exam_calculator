import { useState } from 'react';
const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms))
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


  const submit = async (data) => {
    setLoading(true);
    const {rd, ex, hasGrant} = data;
    const grade = Math.round((rd * 0.6) + (ex * 0.4));
    try{
      await wait(2000)
      let result = null;
      if(grade >= 95){
        result = {grade: grade,letterGrade: "A", gradePoints: 4.00, description: "Excellent"}
      }
      if(grade >= 90 && grade <= 94){
        result = {grade: grade,letterGrade: "A-", gradePoints: 3.67, description: "Excellent"}
      }
      if(grade >= 87 && grade <= 89){
        result = {grade: grade,letterGrade: "B-", gradePoints: 3.33, description: "Excellent"}
      }
      if(grade >= 83 && grade <= 86){
        result ={grade: grade,letterGrade: "B", gradePoints: 3.00, description: "Good"}
      }
      if(grade >= 80 && grade <= 82){
        result = {grade: grade,letterGrade: "B-", gradePoints: 2.67, description: "Good"}
      }
      if(grade >= 77 && grade <= 79){
        result = {grade: grade,letterGrade: "C+", gradePoints: 2.33, description: "Good"}
      }
      if(grade >= 73 && grade <= 76){
        result = {grade: grade,letterGrade: "C", gradePoints: 2.00, description: "Satisfactory"}
      }
      if(grade >= 70 && grade <= 72){
        result = {grade: grade,letterGrade: "C-", gradePoints: 1.67, description: "Satisfactory"}
      }
      if(grade >= 60 && grade <= 69) {
        result = {grade: grade,letterGrade: "C-", gradePoints: 1.67, description: "Satisfactory",}

      }

      if(grade >= 50 && grade <= 59){
        result = {grade: grade,letterGrade: "D-", gradePoints: 0.50, description: "Academic fail"}
      }
      setResponse(result);
    }
    finally {
      setLoading(false);
    }
  }
  return {isLoading, response, submit}

}

export default useSubmit;