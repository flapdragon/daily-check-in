import { useState, useEffect } from 'react'
import axios from 'axios'
import MoodChart from '../charts/MoodChart'
import { server, dailyImage, womanInCS } from '../utils/utils'

// TODO: Add more background images (already downloaded)

const Confirmation = () => {
  const [ csWoman, setCSWoman ] = useState(womanInCS)
  const [ moodData, setMoodData ] = useState([])

  // Get daily mood chart data
  useEffect(() => {
    return () => {
      // Get student mood data, one day of data, today's date
      const date = new Date()
      // Format date as YYYY/MM/DD, should I make this a function somewhere?
      const today = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      axios.get(`${server}/responses/moods/${today}`)
        .then(function (response) {
          console.log(response.data)
          // If data
          if (response.data.length > 0) {
            setMoodData(response.data)
          }
          else {
            // Show something else, like Loading...
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={require(`../images/${dailyImage}`)}
        alt=""
        className="opacity-50 brightness-08 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Success!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {new Date().toLocaleString('en-us', { weekday: 'long' })}&nbsp;
            {new Date().toLocaleString('en-us', { month: 'long' })} {new Date().getDate()}, {new Date().getFullYear()}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Your daily check-in was sucesssfully submitted!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">{csWoman.firstName} {csWoman.lastName}: {csWoman.summary}</h3>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Mood</h3>
        {moodData.length > 0 && <MoodChart moodData={moodData} /> }      
      </div>
    </div>
  )
}

export default Confirmation
