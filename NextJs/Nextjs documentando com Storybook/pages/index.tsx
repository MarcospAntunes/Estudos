import Button from "../src/components/button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <h1>Home Page!</h1>
      <Button>
        Botão
      </Button>
    </ThemeProvider>
  )
}
