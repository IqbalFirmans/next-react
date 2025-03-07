import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const formData = new FormData();
            
            formData.append('title', body.title)
            formData.append('price', body.price)
            formData.append('content', body.content)
            formData.append('image', body.image)

            console.log(body)

            const postsResponse = await axiosInstance.post("/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return postsResponse;
        },
        onSuccess
    });
}