import { Repository } from 'typeorm';
import { SmsEntity } from '../models/sms.entity';
import { SmsService } from '../services/sms.service';
export declare class CronService {
    private readonly smsRepository;
    private readonly _smsService;
    constructor(smsRepository: Repository<SmsEntity>, _smsService: SmsService);
    syncComments(): Promise<void>;
}
