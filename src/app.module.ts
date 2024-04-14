import { Module } from '@nestjs/common';

import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
