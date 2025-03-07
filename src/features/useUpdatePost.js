import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePost = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {

            const formData = new FormData();
            formData.append("_method", "PUT");
            formData.append('title', body.title)
            formData.append('price', body.price)
            formData.append('content', body.content)
            if (body.image) {
                formData.append("image", body.image);
            }
            
            const postResponse = await axiosInstance.post(`/posts/${body.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });


            return postResponse;
        },
        onSuccess
    });
}