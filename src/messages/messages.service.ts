import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'NestJS',
    },
    {
      id: 2,
      text: 'NestJS 2',
    },
  ];

  findAll() {
    return this.messages;
  }
}
