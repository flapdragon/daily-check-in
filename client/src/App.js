import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import './App.css'

function App() {
  // TODO: post student form submission to database
  // TODO: Silly question generator - Need like ... I don't know 52 * 5 at the most
  //     Needs to be one a day and need to keep track of what has been asked
  //     Have 15, need more

  const [ question, setQuestion ] = useState({})

  // Get daily question
  useEffect(() => {
    return () => {
      let server = "http://localhost:8888"
      axios.get(`${server}/questions/daily`)
        .then(function (response) {
          console.log(response)
          setQuestion(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do stuff
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Daily Check-in</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {new Date().toLocaleString('en-us', { weekday: 'long' })}&nbsp;
            {new Date().toLocaleString('en-us', { month: 'long' })} {new Date().getDate()}, {new Date().getFullYear()}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Please submit by 8:05am
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200" id="grid-first-name" type="text" placeholder="Jane" />
                  <p className="text-red-500 text-sm italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-200" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="grateful">
                    What is something you are grateful for today?
                  </label>
                  <textarea
                    id="grateful"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-100 bg-gray-700 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-200"
                    placeholder="What is something you are grateful for today?"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="silly">
                    {question.question}
                  </label>
                  <input
                    id="silly"
                    className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                    type="text"
                    placeholder={question.question} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="mood">
                    Which mood do you relate to the most today? 1 Being the highest/best and 9 being the lowest.
                  </label>
                  <div className="tracking-wide text-gray-400 text-xs font-bold mb-2">9 responses</div>
                  <div className="relative">
                    <select
                      id="mood"
                      className="block appearance-none w-1/4 bg-gray-700 border border-gray-700 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-200">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </select>
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="concerns">
                    Anything I can do for you today? Any concerns or comments or questions?
                  </label>
                  <textarea
                    id="concerns"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-100 bg-gray-700 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-200"
                    placeholder="Anything I can do for you today? Any concerns or comments or questions?"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                <div className="w-full px-3"></div>
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
          </form>
        </dl>
      </div>
    </div>
    </div >
  )
}

export default App
