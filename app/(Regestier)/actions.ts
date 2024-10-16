"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "@/db/prisma";
import { Prisma } from "@prisma/client";
export const signUp = async (formData: FormData) => {
  const user = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const hashedPassword = await bcrypt.hash(user.password, 8);
  let createdUser;
  try {
    createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code == "P2002") {
        return console.log("Email Already Exist");
      }
    }
  }
};
