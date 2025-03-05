import { axiosInstance } from "@/lib/axios"
import { useState, useEffect } from "react";


export const usePosts = () => {
    const [posts, setPosts] = useState([]); // menyimpan data response GET /posts
    const [isLoading, setIsLoading] = useState(false)

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            // setTimeout(async () => {
            const postsResponse = await axiosInstance.get("/posts");

            setPosts(postsResponse.data.data);
            setIsLoading(false);
            // }, 1000)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    return {
        data: posts,
        isLoading
    }
}