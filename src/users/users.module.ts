import { Module } from '@nestjs/common';

import { UsersGateway } from './users.gateway';
import { UsersService } from './users.service';

@Module({
  providers: [UsersGateway, UsersService],
})
export class UsersModule {}
