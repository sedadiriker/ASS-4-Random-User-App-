import axios from "axios"

export const getUser = async () => {
    const URL = "https://randomuser.me/api/"

    try {
        const {data} = await axios(URL)
        return data.results
    } catch (error) {
        console.log(error)
    }
}