import prisma from "../prisma/prismaClient";

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comments: true,
      },
    });
    return posts;
  } catch (err) {
    throw new Error("Cannot get posts");
  } finally {
    await prisma.$disconnect();
  }
}

async function getPostById(postId: number) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return post;
  } catch (err) {
    throw new Error("Cannot get post");
  } finally {
    await prisma.$disconnect();
  }
}

async function createPost(title: string, content: string) {
  try {
    await prisma.post.create({
      data: {
        title,
        content,
      },
    });
  } catch (err) {
    throw new Error("Cannot create post");
  } finally {
    await prisma.$disconnect();
  }
}

async function deletePost(id: number) {
  try {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return post;
  } catch (err) {
    throw new Error("Cannot delete post");
  } finally {
    await prisma.$disconnect();
  }
}

export { getPosts, getPostById, createPost, deletePost };
