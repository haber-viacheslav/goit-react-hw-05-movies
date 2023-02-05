import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'components/Api/FetchApi';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { uniqueBy } from 'components/helpers/uniqueBy';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getMovieCast = async id => {
      try {
        const data = await fetchMovieCredits(id);
        setMovieCast(uniqueBy(data.cast, 'id'));
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast(id);
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>
      {<CastList casts={movieCast} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Cast;
