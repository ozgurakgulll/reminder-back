import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Observable } from 'rxjs';

import { DeleteResult, UpdateResult } from 'typeorm';
import { SmsInterface } from '../models/sms.interface';
import { SmsService } from '../services/sms.service';

@Controller('sms')
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Post()
  create(@Body() SmsInterface: SmsInterface): Observable<SmsInterface> {
    return this.smsService.createPost(SmsInterface);
  }

  @Get()
  findAll(): Observable<SmsInterface[]> {
    return this.smsService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() SmsInterface: SmsInterface,
  ): Observable<UpdateResult> {
    return this.smsService.updatePost(id, SmsInterface);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.smsService.deletePost(id);
  }
}
