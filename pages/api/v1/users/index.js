import axios from "axios";

export default async (req, res) => {
    try {
        const axiosResponse = await axios.get('http://rem-rest-api.herokuapp.com/api/users', {
            params: {
                limit: 1000
            }
        });
        const users = axiosResponse.data;
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.status(e.status || 404).json({message:'Api Error'});
    }
}
