import { Controller, Get, Header, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', 'http://localhost:3001')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @Header('Access-Control-Allow-Origin', 'http://localhost:3001')
  @Header('Content-Type', 'application/json')
  postHello() {
    return 'POST';
  }
}
