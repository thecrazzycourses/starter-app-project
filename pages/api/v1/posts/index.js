// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async (req, res) => {
    try {
        const axiosResponse = await axios.get("http://localhost:8081/api/starter/v1/posts");
        const posts = axiosResponse.data;
        res.status(200).json(posts);
    } catch (e) {
        console.log(e);
        res.status(e.status || 404).json({message:'Api Error'});
    }
}
