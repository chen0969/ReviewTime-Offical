export const ALL_POSTS_API_URL = "https://reviewtime-dev.onrender.com/api/movie-reviews?populate=*";

export const SINGLE_POST_API_URL = (movieDocId) => {
    return `https://reviewtime-dev.onrender.com/api/movie-reviews/${movieDocId}?populate=*`;
};