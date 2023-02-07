import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'components/Api/FetchApi';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { uniqueBy } from 'components/helpers/uniqueBy';
import { Section } from 'components/Section/Section';

import PropTypes from 'prop-types';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getMovieCast = async id => {
      try {
        const data = await fetchMovieCredits(id, {
          signal: controller.signal,
        });
        setMovieCast(uniqueBy(data.cast, 'id'));
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast(id);
    return () => controller.abort();
  }, [id]);

  return (
    <Section title={'Cast'}>
      {<CastList casts={movieCast} />}
      {isLoading && <Loader />}
    </Section>
  );
};

Cast.propTypes = {
  isLoading: PropTypes.bool,
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      known_for_department: PropTypes.string,
      profile_path: PropTypes.string,
      popularity: PropTypes.number,
    })
  ),
};

export default Cast;
