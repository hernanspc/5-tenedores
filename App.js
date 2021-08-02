import React from 'react';
import Navigations from './app/navigations/Navigations';
import { firebaseApp } from './app/utils/firebase';
import { LogBox } from 'react-native';
// import { decode, encode } from "base-64";

// if (!global.btoa) global.btoa = encode;
// if (!global.atob) global.atob = decode;
// useEffect(() => {
//   LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
// }, [])
LogBox.ignoreAllLogs(true);
export default function App() {
    return <Navigations />;
}
