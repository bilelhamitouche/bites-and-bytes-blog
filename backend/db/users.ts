import prisma from "../prisma/prismaClient";

async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Cannot find user");
  } finally {
    await prisma.$disconnect();
  }
}

async function createUser(username: string, email: string, password: string) {
  try {
    const user = prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Cannot create user");
  } finally {
    await prisma.$disconnect();
  }
}

export { getUserByEmail, createUser };
