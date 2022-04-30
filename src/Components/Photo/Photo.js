import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Helper/Error';
import PhotoContent from '../Photo/PhotoContent';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
        {id}
      </section>
    );
  else return null;
};

export default Photo;
