import React from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';

const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
      path
      mimetype
      encoding
    }
  }
`;

const MULTI_UPLOAD = gql`
  mutation multiUpload($files: [Upload!]!) {
    multiUpload(files: $files) {
      id
      filename
      path
      mimetype
      encoding
    }
  }
`;

export const UploadFile = () => {
  const apolloClient = useApolloClient();
  const [mutate] = useMutation(SINGLE_UPLOAD);

  function onChange({ target: { validity, files: [file] } }) {
    if (validity.valid) mutate({ variables: { file } }).then(() => {
      apolloClient.resetStore();
    });
  }

  return <input type="file" required onChange={onChange} />;
}

export const UploadFiles = () => {
  const apolloClient = useApolloClient();
  const [mutate] = useMutation(MULTI_UPLOAD);

  function onChange({ target: { validity, files } }) {
    if (validity.valid) mutate({ variables: { files } }).then(() => {
      apolloClient.resetStore();
    });
  }

  return <input type="file" multiple required onChange={onChange} />;
}
