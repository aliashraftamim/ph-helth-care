import { PrismaClient, USER_ROLE } from "../../../generated/prisma";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  data.password = bcrypt.hashSync(data.password, 10);

  const user = {
    name: data.admin.name,
    email: data.admin.email,
    password: data.password,
    role: USER_ROLE.ADMIN,
  };
  console.log("🚀 ~ createAdmin ~ user:", user);
  const admin = {
    name: data.admin.name,
    email: data.admin.email,
    contactNumber: data.admin.contactNumber,
  };
  console.log("🚀 ~ createAdmin ~ admin:", admin);

  const result = prisma.$transaction(async (tx: any) => {
    const userResult = await tx.user.create({ data: user });
    const adminResult = await tx.admin.create({ data: admin });
    return { user: userResult, admin: adminResult };
  });

  return result;
};

export const user_service = {
  createAdmin,
};
