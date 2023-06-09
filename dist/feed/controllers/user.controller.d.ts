import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserPost } from '../models/user.interface';
import { UserService } from '../services/feed.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userPost: UserPost): Observable<UserPost>;
    findAll(): Observable<UserPost[]>;
    update(id: number, feedPost: UserPost): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
