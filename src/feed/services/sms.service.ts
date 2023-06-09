import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { SmsEntity } from '../models/sms.entity';
import { SmsInterface } from '../models/sms.interface';

@Injectable()
export class SmsService {
  constructor(
    @InjectRepository(SmsEntity)
    private readonly smsRepository: Repository<SmsEntity>,
  ) {}

  createPost(smsPost: SmsInterface): Observable<SmsInterface> {
    console.log(smsPost);
    return from(this.smsRepository.save(smsPost));
  }

  findAllPosts(): Observable<SmsInterface[]> {
    return from(this.smsRepository.find());
  }

  updatePost(id: number, feedPost: SmsInterface): Observable<UpdateResult> {
    return from(this.smsRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.smsRepository.delete(id));
  }

  sendSms(s: SmsEntity[]) {
    console.log(s)
    return console.log('sms');
  }
}
