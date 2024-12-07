"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthenticate, useSignerStatus } from "@alchemy/aa-alchemy/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string(),
  description: z.string(),
  ownerWalletAddress: z.string(),
  contractAddress: z.string(),
  logo: z.instanceof(File),
});

const Login = () => {
  const { authenticate } = useAuthenticate();
  const { status } = useSignerStatus();
  const isAwaitingEmail = status === "AWAITING_EMAIL_AUTH";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      description: "",
      ownerWalletAddress: "",
      contractAddress: "",
      // logo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const base64image = await fileToBase64(values.logo);

    const formData = new FormData();
    formData.append("file", values.logo);

    const uploadrequest = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      },
      body: formData,
    });

    const uploadResponse = await uploadrequest.json();
    console.log(uploadResponse);

    await axios.post("/api/email", {
      email: values.email,
      name: values.name,
      description: values.description,
      logo: uploadResponse.IpfsHash,
      ownerWalletAddress: values.ownerWalletAddress,
      contractAddress: values.contractAddress,
    });

    // Authenticate user
    authenticate({ type: "email", email: values.email });
  }

  return (
    <Card className="w-[90%] mx-auto">
      <CardHeader>
        <CardTitle>{isAwaitingEmail ? "Waiting..." : "Login now"}</CardTitle>
        <CardDescription>
          {isAwaitingEmail ? "We have sent you an email to authenticate." : "Experience the Embedded Accounts!"}
        </CardDescription>
      </CardHeader>
      <CardContent className="border h-full">
        {isAwaitingEmail ? (
          <div className="flex flex-col items-center space-y-6">
            <Image src={"/email.svg"} alt="Email" width={100} height={100} className="w-40" />
            <Link href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank">
              <Button>Check mail</Button>
            </Link>
          </div>
        ) : (
          
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full space-y-14" >
                     <div className="grid grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@email.xyz" {...field} />
                    </FormControl>
                    <FormDescription>We&apos;ll send you an email to authenticate.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="john.xyz" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="write a description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input type="file" accept="image/*" onChange={e => field.onChange(e.target.files?.[0])} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ownerWalletAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wallet Address</FormLabel>
                    <FormControl>
                      <Input placeholder="0x1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contractAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Address</FormLabel>
                    <FormControl>
                      <Input placeholder="0x1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
        </div>
              <Button className="w-full py-6 " type="submit">Submit</Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default Login;
