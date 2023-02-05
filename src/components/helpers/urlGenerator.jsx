export const urlGenerator = path => {
  // if (path.startsWith('http')) {
  //   return path;
  // }
  if (!path) {
    return 'https://placeholder.pics/svg/300/7050FF-2716FF/FFFFFF/Not%20found';
  }

  return path.startsWith('/https')
    ? path.slice(1)
    : `https://image.tmdb.org/t/p/w500/${path}`;
};
