import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const postsResponse = await axiosInstance.post("/posts", body);

            return postsResponse;
        },
        onSuccess
    });
}