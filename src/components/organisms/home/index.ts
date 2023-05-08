import React from 'react';
import useHome from './hooks';
import HomeView from './view';

export default function HomePage() {
  const props = useHome();
  return React.createElement(HomeView, props);
}
