export default defineEventHandler((event) => {
    return {
        'serverName': process.env.service_name
    }
})