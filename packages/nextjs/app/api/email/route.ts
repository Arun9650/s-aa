import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse the incoming request body
    const { email, name, description, ownerWalletAddress, contractAddress, logo } = await request.json();

    // Validate the input
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if the email already exists in the database
    const existingEmail = await prisma.organization.findFirst({
      where: { email },
    });

    if (existingEmail) {
      // Email already exists
      return new Response(JSON.stringify({ message: "Email already exists", exists: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Email does not exist, so store it
    const newEmailEntry = await prisma.organization.create({
      data: {
        email,
        name: name, // Replace or update as needed
        description: description, // Replace or update as needed
        logo: logo, // Replace or update as needed
        daocontract: contractAddress, // Replace or update as needed
        walletAddress: ownerWalletAddress, // Replace or update as needed
      },
    });

    return new Response(
      JSON.stringify({
        message: "Email stored successfully",
        exists: false,
        organization: newEmailEntry,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
