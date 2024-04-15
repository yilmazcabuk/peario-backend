import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsService } from './rooms.service';

@WebSocketGateway()
export class RoomsGateway {
  constructor(private readonly roomsService: RoomsService) {}

  @SubscribeMessage('room.create')
  create(@MessageBody() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @SubscribeMessage('findAllRooms')
  findAll() {
    return this.roomsService.findAll();
  }

  @SubscribeMessage('findOneRoom')
  findOne(@MessageBody() id: number) {
    return this.roomsService.findOne(id);
  }

  @SubscribeMessage('updateRoom')
  update(@MessageBody() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(updateRoomDto.id, updateRoomDto);
  }

  @SubscribeMessage('removeRoom')
  remove(@MessageBody() id: number) {
    return this.roomsService.remove(id);
  }

  @SubscribeMessage('room.join')
  handleRoomJoin(client: any, payload: any): string {
    return this.roomsService.handleRoomJoin(client, payload);
  }

  @SubscribeMessage('room.message')
  handleRoomMessage(client: any, payload: any): string {
    return this.roomsService.handleRoomMessage(client, payload);
  }

  @SubscribeMessage('room.updateOwnership')
  handleRoomUpdateOwnership(client: any, payload: any): string {
    return this.roomsService.handleRoomUpdateOwnership(client, payload);
  }

  @SubscribeMessage('player.sync')
  handlePlayerSync(client: any, payload: any): string {
    return this.roomsService.handlePlayerSync(client, payload);
  }
}
