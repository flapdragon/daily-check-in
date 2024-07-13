// Get server from Node process.env or default localhost
export const server = process.env.REACT_APP_SERVER_URL ? `http://${process.env.REACT_APP_SERVER_URL}:8888` : "http://localhost:8888"

// Get random image, 1 per day
const today = new Date()
const dayOfWeek = today.getDay()
// If weekday, set i ndex to day of week - 1, otherwise default to 0 for weekends
const dayIndex = dayOfWeek > 0 && dayOfWeek < 6 ? dayOfWeek - 1 : 0
// Array of /images
const images = [ "thisisengineering-64YrPKiguAE-unsplash.jpg", "mimi-thian--VHQ0cw2euA-unsplash.jpg", "mimi-thian-8kdA2IJsjcU-unsplash.jpg", "s-o-c-i-a-l-c-u-t-KdKm4xWOggk-unsplash.jpg", "s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg" ]
export const dailyImage = images[dayIndex]