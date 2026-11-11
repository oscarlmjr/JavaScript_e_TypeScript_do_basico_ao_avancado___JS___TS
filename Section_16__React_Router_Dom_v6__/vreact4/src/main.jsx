import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './templates/App';
import { MyThemeProvider } from './styles/MyThemeProvider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <MyThemeProvider>
        <App>Hello</App>
      </MyThemeProvider>
    </StrictMode>,
  )

//   import React from 'react';
//   import ReactDOM from 'react-dom/client';
//   import { MyThemeProvider } from './styles/MyThemeProvider';
//   import { App } from './templates/App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <MyThemeProvider>
//        <App />
//      </MyThemeProvider>
//   </React.StrictMode>,
// )
