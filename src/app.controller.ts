import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PrismaClient, User } from './generated/client'

@Controller()
export class AppController {
  constructor() {}
}