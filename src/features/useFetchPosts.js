import { axiosInstance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query";


export const useFetchPosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
          const postsResponse = await axiosInstance.get("/posts");
          return postsResponse.data;
        },
      })
}