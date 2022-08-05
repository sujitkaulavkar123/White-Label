
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomAlert from './src/atoms/CustomAlert';
import CustomLoader from './src/atoms/CustomLoader';
import AuthNavigator from './src/components/router';

const App = () => {
  const { isLoading, errorMessage } = useSelector((state: any) => state.auth)

  useEffect(() => {
    errorMessage && CustomAlert("", errorMessage);
  }, [errorMessage]);

  return (
    <>
      <AuthNavigator />
      {isLoading && <CustomLoader />}
    </>
  );
};

export default App;
