"use server";
import { db } from "@/lib/db";

export const deleteUser = async (user: any) => {
  try {
    await db.user.delete({ where: { id: user.id } });
  } catch (error) {
    console.log(error);
  }
};
