import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PROFILES_BY_NAMES } from '../../queries';
import Find from '../../components/Find';
import ProfilesBoard from '../../components/ProfilesBoard';
import Loading from '../../components/Loading';
import { Alert } from 'antd';

export default () => {
  const [getProfilesID, { loading, data, error }] = useLazyQuery(
    SEARCH_PROFILES_BY_NAMES,
    {}
  );

  const handleFindSingle = (names: Array<string>) => {
    console.log('Trick with: ', names);
    getProfilesID({
      variables: { names },
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    console.log('loading: ', loading);
    console.log('data: ', data);
    console.log('error: ', error?.name);
    console.log('error: ', error?.message);
  }, [loading]);

  return (
    <>
      <Find findSingle={handleFindSingle} />

      {loading && <Loading />}

      {error && (
        <Alert
          message='Error'
          description={error?.message}
          type='error'
          showIcon
          closable
        />
      )}

      {data && <ProfilesBoard profiles={data?.searchProfilesByNames} />}
    </>
  );
};
