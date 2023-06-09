import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';
import { SmsService } from './services/sms.service';
import { SmsEntity } from './models/sms.entity';
import { UserPostEntity } from './models/user.entity';
import { UserService } from './services/feed.service';
import { SmsController } from './controllers/sms.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserPostEntity]),
    TypeOrmModule.forFeature([SmsEntity]),
    ScheduleModule.forRoot(),
  ],
  providers: [UserService, SmsService, CronService],
  controllers: [UserController, SmsController],
})
export class FeedModule {}
