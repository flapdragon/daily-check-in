import { useState, useEffect } from 'react'
import axios from 'axios'
import MoodChart from '../charts/MoodChart'

const Results = () => {
  const [moodData, setMoodData] = useState([])

  // Hard code that server! Yeah!
  const server = "http://localhost:8888"

  useEffect(() => {
    return () => {
      // Get student mood data, one day of data, today's date
      const date = new Date()
      // Format date as YYYY/MM/DD, should I make this a function somewhere?
      const today = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      axios.get(`${server}/responses/moods/${today}`)
        .then(function (response) {
          console.log(response)
          // If data
          if (response.data.length > 0) {
            setMoodData(response.data)
          }
          else {
            // Show something else, like no Data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  return (
    <div>
      List of Charts
      {moodData.length > 0 && <MoodChart moodData={moodData} /> }
    </div>
  )
}

export default Results
