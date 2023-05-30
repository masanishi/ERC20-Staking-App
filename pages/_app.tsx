import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, DarkMode, ThemeConfig, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import {Binance} from "@thirdweb-dev/chains"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: '#3068C1',
                color: 'white'
            }
        }
    }
 })

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = Binance;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider theme={theme} >
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
