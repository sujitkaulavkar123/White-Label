
import React from 'react';
import { useSelector } from 'react-redux';
import CustomLoader from './src/atoms/CustomLoader';
import AuthNavigator from './src/components/router';

const App = () => {
  const { isLoading } = useSelector((state: any) => state.loader)

  return (
    <>
      <AuthNavigator />
      {isLoading && <CustomLoader />}
    </>
  );
};

export default App;
