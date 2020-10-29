import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PROFILES_BY_NAMES } from '../../queries';
import Find from '../../components/Find';
import ProfilesBoard from '../../components/ProfilesBoard';
import Loading from '../../components/Loading';
import { Alert } from 'antd';

export default () => {
  const [getProfilesByNames, { loading, data, error }] = useLazyQuery(
    SEARCH_PROFILES_BY_NAMES,
    {}
  );

  const handleFindSingle = (names: Array<string>) => {
    getProfilesByNames({
      variables: { names },
    });
  };

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
