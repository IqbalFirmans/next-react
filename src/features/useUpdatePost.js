import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePost = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const postResponse = await axiosInstance.post(`/posts/${body.id}`, body)

            return postResponse;
        },
        onSuccess
    });
}