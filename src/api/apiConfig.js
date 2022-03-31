const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "0dbbee5f733aec5889d2733410b5329b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
