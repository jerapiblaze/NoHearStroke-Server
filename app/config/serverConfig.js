import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT: process.env.SERVER_PORT || 8000,
    DEBUG: process.env.SERVER_DEBUG,
    USER_IDLE_TIMEOUT: process.env.USER_IDLE_TIMEOUT,
    SERVER_SECRET: process.env.SERVER_SECRET
};