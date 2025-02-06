import prisma from "../prisma/prismaClient";

async function getStats() {
  try {
    const [users, posts, comments] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
      prisma.comment.count(),
    ]);
    return { users, posts, comments };
  } catch (err) {
    throw new Error("Cannot get stats");
  } finally {
    await prisma.$disconnect();
  }
}

export { getStats };
