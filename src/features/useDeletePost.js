import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeletePost = ({ onSuccess }) => {
    return useMutation ({
        mutationFn: async (id) => {
            const postResponse = await axiosInstance.delete(`/posts/${id}`);

            return postResponse;
        },
        onSuccess,
    });
}