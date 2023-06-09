import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SmsEntity } from '../models/sms.entity';
import { SmsService } from '../services/sms.service';
@Injectable()
export class CronService {
  constructor(
    @InjectRepository(SmsEntity)
    private readonly smsRepository: Repository<SmsEntity>,
    private readonly _smsService: SmsService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async syncComments() {
    const startDate = new Date();
    console.log(startDate);
    const lastDate = new Date();
    startDate.setHours(0);
    lastDate.setHours(23);

    const sms = await this.smsRepository.find({
      where: {
        date: Between(startDate, lastDate),
      },
    });
    // this._smsService.sendSms(sms);
    // sms.forEach((a) => {
    //   this._smsService.deletePost(a.id);
    // });
  }
}
