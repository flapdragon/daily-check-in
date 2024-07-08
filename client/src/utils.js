// Get server from Node process.env or default localhost
export const server = process.env.REACT_APP_SERVER_URL ? `http://${process.env.REACT_APP_SERVER_URL}:8888` : "http://localhost:8888"