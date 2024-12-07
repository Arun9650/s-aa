"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSignerStatus } from "@alchemy/aa-alchemy/react";
import MoonLoader from "react-spinners/MoonLoader";
import Login from "~~/components/cards/Login";
import { Grid } from "~~/components/cards/Profile";

const Home = () => {
  // loading - waiting for a request to resolve
  // connected - the user signed in with an email tied to a smart account
  // unconnected - we need to provide a login UI for the user to sign in
  const { isInitializing, isAuthenticating, isConnected, status } = useSignerStatus();
  // const [formValues, setFormValues] = useState(null);
  const isLoading = isInitializing || (isAuthenticating && status !== "AWAITING_EMAIL_AUTH");

  // const handleFormSubmit = (values) => {
  //   setFormValues(values);
  // };

  // useEffect(() => {
  //   if (isConnected && formValues) {
  //     const he = async (formValues) => {
  //       try {
  //         if (isConnected) {
  //           const response = await fetch("/api/user", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(formValues.formValues),
  //           });

  //           if (response.ok) {
  //             const data = await response.json();
  //             console.log("Organization created:", data);
  //           } else {
  //             console.error("Failed to create organization:", response.statusText);
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Error during submission:", error);
  //       }
  //     };

  //   }
  // }, [isConnected, formValues]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {isLoading ? (
        <MoonLoader size={26} color={"#E2E2E2"} />
      ) : isConnected ? ( // modify this line
        <Grid />
      ) : (
        <Login />
      )}
      {/* <Link href="/somedynamicpage">
      somedynamic
      </Link>
      <Link href={"/explore"}>
      explore
      </Link> */}
    </div>
  );
};

export default Home;
