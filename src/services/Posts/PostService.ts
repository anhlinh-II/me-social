import axios from 'axios';
import { PostResponse } from '../Types/PostType';

const API_URL = 'http://localhost:8080/api/posts';

export const getPostsForNewsFeed = async (userId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/newsfeed?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};


// Other API methods...
