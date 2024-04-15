import { Injectable } from '@nestjs/common';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import type { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private rooms = new Map<string, Room>();

  create(createRoomDto: CreateRoomDto) {
    const room = {
      ...createRoomDto,
      id: Math.random().toString(36).substr(2, 9),
    };
    this.rooms.set(room.id, room);
    return room;
  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: string) {
    this.rooms.get(id);
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const room = this.rooms.get(id);
    if (!room) {
      return null;
    }
    const updatedRoom = {
      ...room,
      ...updateRoomDto,
    };
    this.rooms.set(id, updatedRoom);
  }

  remove(id: string) {
    this.rooms.delete(id);
  }
}
