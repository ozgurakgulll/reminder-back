"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const sms_entity_1 = require("../models/sms.entity");
const sms_service_1 = require("../services/sms.service");
let CronService = class CronService {
    constructor(smsRepository, _smsService) {
        this.smsRepository = smsRepository;
        this._smsService = _smsService;
    }
    async syncComments() {
        const startDate = new Date();
        console.log(startDate);
        const lastDate = new Date();
        startDate.setHours(0);
        lastDate.setHours(23);
        const sms = await this.smsRepository.find({
            where: {
                date: (0, typeorm_1.Between)(startDate, lastDate),
            },
        });
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "syncComments", null);
CronService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(sms_entity_1.SmsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        sms_service_1.SmsService])
], CronService);
exports.CronService = CronService;
//# sourceMappingURL=cron.service.js.map