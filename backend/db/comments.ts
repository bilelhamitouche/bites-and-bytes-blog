import prisma from "../prisma/prismaClient";

async function getComments() {
  try {
    const comments = await prisma.comment.findMany();
    return comments;
  } catch (err) {
    throw new Error("Cannot get comments");
  } finally {
    await prisma.$disconnect();
  }
}

async function getCommentsByPost(postId: number) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
    });
    return comments;
  } catch (err) {
    throw new Error("Cannot get comments");
  } finally {
    await prisma.$disconnect();
  }
}

async function createComment(content: string, authorId: number) {
  try {
    await prisma.comment.create({
      data: {
        content,
        authorId,
      },
    });
  } catch (err) {
    throw new Error("Cannot create comment");
  } finally {
    await prisma.$disconnect();
  }
}

async function deleteComment(id: number) {
  try {
    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });
    return comment;
  } catch (err) {
    throw new Error("Cannot delete comment");
  } finally {
    await prisma.$disconnect();
  }
}

export { getComments, getCommentsByPost, createComment, deleteComment };
