import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';
import { SmsEntity } from '../models/sms.entity';
import { SmsInterface } from '../models/sms.interface';
export declare class SmsService {
    private readonly smsRepository;
    constructor(smsRepository: Repository<SmsEntity>);
    createPost(smsPost: SmsInterface): Observable<SmsInterface>;
    findAllPosts(): Observable<SmsInterface[]>;
    updatePost(id: number, feedPost: SmsInterface): Observable<UpdateResult>;
    deletePost(id: number): Observable<DeleteResult>;
    sendSms(s: SmsEntity[]): void;
}
