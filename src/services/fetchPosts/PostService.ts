import axios from 'axios';
import { PostResponse } from './PostType';

const API_URL = 'http://localhost:8080/api/posts';

export const getPostsForNewsFeed = async (userId: number, pageNum = 0): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/newsfeed?userId=${userId}&pageNum=${pageNum}`);
    return response.data;
};

// Other API methods...
