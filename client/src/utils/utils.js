import { womenInCS } from '../data/women-in-cs'

// Get server from Node import.meta.env or default localhost
export const server = import.meta.env.VITE_SERVER_URL ? `http://${import.meta.env.VITE_SERVER_URL}:8888` : "http://localhost:8888"

// Get random image, 1 per day
const today = new Date()
const dayOfWeek = today.getDay()
// If weekday, set i ndex to day of week - 1, otherwise default to 0 for weekends
const dayIndex = dayOfWeek > 0 && dayOfWeek < 6 ? dayOfWeek - 1 : 0
// Array of /images
const images = [ "thisisengineering-64YrPKiguAE-unsplash.jpg", "mimi-thian--VHQ0cw2euA-unsplash.jpg", "mimi-thian-8kdA2IJsjcU-unsplash.jpg", "s-o-c-i-a-l-c-u-t-KdKm4xWOggk-unsplash.jpg", "s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg" ]
export const dailyImage = images[dayIndex]

// Get women in CS placeholder person, ignore weekends, need a dataset of length 23 for most possible weekdays per month
const date = new Date()
const dayOfMonth = date.getDate()
const csDayOfWeek = date.getDay()
// Check for weekday, otherwise default to 0, records will be skipped on holidays
const dayOfWeekday = csDayOfWeek > 0 && csDayOfWeek < 6 ? csDayOfWeek - 1 : 0  // Ignore Sundays so that records don't get skipped, so - 1
const weekOfMonth = Math.ceil((dayOfMonth - 1 - csDayOfWeek) / 7) // 0 based
const index = (weekOfMonth * 5) + dayOfWeekday
// console.log(dayOfWeekday, weekOfMonth, index)
export const womanInCS = womenInCS[index]