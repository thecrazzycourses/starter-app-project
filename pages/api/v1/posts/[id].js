import axios from "axios";

export default async (req, res) => {
    try {
        const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`); // Here id as file name[id]
        const post = axiosResponse.data;
        res.status(200).json(post);
    } catch (e) {
        console.log(e);
        res.status(e.status || 404).json({message:'Api Error'});
    }
}
