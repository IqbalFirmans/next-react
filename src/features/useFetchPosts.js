import { axiosInstance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query";


export const useFetchPosts = ({ onError }) => {
  return useQuery({
    queryKey: ['fetch.posts'],
    queryFn: async () => {
      const postsResponse = await axiosInstance.get("/posts");
      return postsResponse.data;
    },
    onError,
  });
}