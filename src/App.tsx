import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./themes/global";
import { defaultTheme } from './themes/theme';
import Invitados2 from "./pages/Invitados2";
import Invitados3 from "./pages/Invitados3";
import Invitados4 from "./pages/Invitados4";

const App = () =>  {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Invitados2 />} />
          <Route path="/2-invitados" element={<Invitados2 />} />
          <Route path="/3-invitados" element={<Invitados3 />} />
          <Route path="/4-invitados" element={<Invitados4 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
