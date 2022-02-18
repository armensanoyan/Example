import "bootstrap/dist/css/bootstrap.css";
import { ApolloProvider } from "@apollo/client";
import client from "../components/apollo-client";

export default function MyApp(props:any) {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      );
    </ApolloProvider>
  );
}
