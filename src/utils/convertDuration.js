const convertDuration = (movie) => {
  const time = movie.duration / 60;
  const hours = Math.floor(time);
  const minutes = movie.duration - hours * 60;

  if (hours && minutes) {
    return `${hours}ч ${minutes}м`;
  } else {
    return hours ? `${hours}ч` : `${minutes}м`;
  }
}

export default convertDuration;