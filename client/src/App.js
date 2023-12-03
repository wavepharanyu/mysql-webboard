import Header from "./components/Header";
import Home from "./pages/home/Home";
import PostDetail from "./pages/postDetail/PostDetail";
import CreatePost from "./pages/createPost/CreatePost";
import NotFound from "./pages/notFound/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider  } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography: {
     "fontFamily": `"Mali", "vazir"`,   
    }, 
    components: {
     MuiCssBaseline: {
       styleOverrides: `
         @font-face {
           font-family: 'Mali';
           font-style: normal;
           font-display: swap;
           font-weight: 400;
         }
       `,
     },
  }
 })
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/p/:id" exact element={<PostDetail/>} />
          <Route path="/p/new" exact element={<CreatePost/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
