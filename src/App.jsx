import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Services from "./Components/Services";
import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: { main: "#02041b" },
    secondary: { main: colors.orange[700] },
    background: { default: "#111223" },
    contrastText: "#dad9fa",
  },
  typography: {
    fontFamily: "nunito",
  },
});
function App() {
  const brandName = "Graniola";

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home brandName={brandName} />
      <About />
      <Menu />
      <Services />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
