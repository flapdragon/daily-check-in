import { useState, useEffect, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { womanInCS } from './womenInCS'

const CheckIn = () => {
  // TODO: MAYBE - Have some sort of logic to only show during course days? I could literally just not fire up the server until those days. Not sure yet.
  // TODO: Follow-up to above - automate that process? pm2? Node? Some gross Windows thing?
  // TODO: Add number of responses to each field
  // TODO: Add clickable element or easter egg to show more info on women in cs
  // TODO: What to do once the form is submitted?

  const [ question, setQuestion ] = useState("")
  const [ placeHolder, setPlaceHolder ] = useState({})
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ grateful, setGrateful ] = useState("")
  const [ silly, setSilly ] = useState("")
  const [ mood, setMood ] = useState("1")
  const [ concerns, setConcerns ] = useState("")

  const moodSelectId = useId()

  const navigate = useNavigate()

  // Hard code that server! Yeah!
  const server = "http://localhost:8888"
  // const server = "http://192.168.0.33:8888"

  // OnLoad
  useEffect(() => {
    return () => {
      // Check if user has already submitted daily check-in
      axios.get(`${server}/responses/check-submitted`)
      .then(function (response) {
        console.log(response.data)
        // If user has already submitted daily check-in
        if (response.data.submitted) {
          navigate("/confirmation")
        }
      })
      .catch(function (error) {
        console.log(error)
      })

      // Get women in CS placeholder person
      setPlaceHolder(womanInCS)
      // Get daily question
      axios.get(`${server}/questions/daily`)
        .then(function (response) {
          console.log(response)
          setQuestion(response.data.question)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      (!firstName || firstName.length === 0) ||
      (!lastName || lastName.length === 0)
    ) {
      // TODO: Add validation/warning
    }
    else {
      // Build student daily check-in response
      const studentResponse = { firstName, lastName, grateful, silly, mood, concerns }
      console.log(studentResponse)
      // Submit student response
      axios.post(`${server}/responses`, studentResponse)
        .then(function (response) {
          // On submit success navigate to confirmation page
          navigate("/confirmation")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="opacity-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
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
                  <input
                    id="grid-first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                    type="text"
                    placeholder={placeHolder.firstName} />
                  <p className="text-pink-600 text-sm italic">Please fill out the first name.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input
                    id="grid-last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-200"
                    type="text"
                    placeholder={placeHolder.lastName} />
                  <p className="text-pink-600 text-sm italic mt-3">Please fill out the last name.</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="grateful">
                    What is something you are grateful for today?
                  </label>
                  <textarea
                    id="grateful"
                    value={grateful}
                    onChange={(e) => setGrateful(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-100 bg-gray-700 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-200"
                    placeholder="What is something you are grateful for today?"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="silly">
                    {question}
                  </label>
                  <input
                    id="silly"
                    value={silly}
                    onChange={(e) => setSilly(e.target.value)}
                    className="appearance-none block w-full bg-gray-700 text-gray-100 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                    type="text"
                    placeholder={question} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-200 text-sm font-bold mb-2" htmlFor="mood">
                    Which mood do you relate to the most today? 1 Being the highest/best and 9 being the lowest.
                  </label>
                  {/* <div className="tracking-wide text-gray-400 text-xs font-bold mb-2">9 responses</div> */}
                  <div className="relative">
                    <select
                      id={mood}
                      onChange={(e) => setMood(e.target.value)}
                      className="block w-1/5 appearance-none bg-gray-700 border border-gray-700 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-200">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-16 flex items-center px-2 text-purple-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
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
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
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
    </div>
  );
}

export default CheckIn
