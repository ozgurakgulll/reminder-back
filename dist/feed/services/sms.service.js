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
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
const sms_entity_1 = require("../models/sms.entity");
let SmsService = class SmsService {
    constructor(smsRepository) {
        this.smsRepository = smsRepository;
    }
    createPost(smsPost) {
        console.log(smsPost);
        return (0, rxjs_1.from)(this.smsRepository.save(smsPost));
    }
    findAllPosts() {
        return (0, rxjs_1.from)(this.smsRepository.find());
    }
    updatePost(id, feedPost) {
        return (0, rxjs_1.from)(this.smsRepository.update(id, feedPost));
    }
    deletePost(id) {
        return (0, rxjs_1.from)(this.smsRepository.delete(id));
    }
    sendSms(s) {
        console.log(s);
        return console.log('sms');
    }
};
SmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sms_entity_1.SmsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SmsService);
exports.SmsService = SmsService;
//# sourceMappingURL=sms.service.js.map