"use server";
import { db } from "@/lib/db";

export const deleteUser = async (id: string) => {
  try {
    await db.user.delete({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};
