import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { SmsInterface } from '../models/sms.interface';
import { SmsService } from '../services/sms.service';
export declare class SmsController {
    private smsService;
    constructor(smsService: SmsService);
    create(SmsInterface: SmsInterface): Observable<SmsInterface>;
    findAll(): Observable<SmsInterface[]>;
    update(id: number, SmsInterface: SmsInterface): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
