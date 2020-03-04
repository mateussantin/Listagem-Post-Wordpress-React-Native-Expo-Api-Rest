import Config from 'react-native-config';

export const fetchApiData = async route => {
  try {
    const response = await fetch(Config.API_URL + route);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};