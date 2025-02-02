"use client";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { cookieStorage, createConfig } from "@alchemy/aa-alchemy/config";
import { AlchemyAccountProvider } from "@alchemy/aa-alchemy/react";
import { sepolia } from "@alchemy/aa-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
// import { Toaster } from "react-hot-toast";
// import { Footer } from "~~/components/Footer";
// import { Header } from "~~/components/header/Header";
// import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const alchemyAccountConfig = createConfig({
  rpcUrl: "/api/rpc/chain/" + sepolia.id,
  signerConnection: {
    rpcUrl: "/api/rpc/",
  },
  ssr: true,
  chain: sepolia,
  storage: cookieStorage,
});

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* <ProgressBar /> */}
        <AlchemyAccountProvider config={alchemyAccountConfig} queryClient={queryClient}>
          <ScaffoldEthApp>{children}</ScaffoldEthApp>
        </AlchemyAccountProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
