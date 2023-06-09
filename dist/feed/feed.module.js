"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controllers/user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const cron_service_1 = require("./cron/cron.service");
const sms_service_1 = require("./services/sms.service");
const sms_entity_1 = require("./models/sms.entity");
const user_entity_1 = require("./models/user.entity");
const feed_service_1 = require("./services/feed.service");
const sms_controller_1 = require("./controllers/sms.controller");
let FeedModule = class FeedModule {
};
FeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserPostEntity]),
            typeorm_1.TypeOrmModule.forFeature([sms_entity_1.SmsEntity]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [feed_service_1.UserService, sms_service_1.SmsService, cron_service_1.CronService],
        controllers: [user_controller_1.UserController, sms_controller_1.SmsController],
    })
], FeedModule);
exports.FeedModule = FeedModule;
//# sourceMappingURL=feed.module.js.map