

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (  
    <ThemeProvider disableTransitionOnChange defaultTheme="light-zinc">
      {children}
    </ThemeProvider>
  );
}
