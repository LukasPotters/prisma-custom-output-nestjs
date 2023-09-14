import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({});
    console.log(users);
  }
}