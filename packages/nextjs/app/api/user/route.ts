import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    console.log("🚀 ~ POST ~ body:", body);

    // Destructure the required fields
    const { name, description, daocontract, email, walletAddress } = body;

    // Validate the required fields
    if (!name || !description || !daocontract || !email || !walletAddress) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create the organization in the database
    const newOrganization = await prisma.organization.create({
      data: {
        name,
        description,
        daocontract,
        email,
        walletAddress,
      },
    });

    // Return the newly created organization
    return new Response(
      JSON.stringify({
        message: "Organization created successfully",
        organization: newOrganization,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error creating organization:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
