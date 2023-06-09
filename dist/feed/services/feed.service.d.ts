import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';
import { UserPostEntity } from '../models/user.entity';
import { UserPost } from '../models/user.interface';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserPostEntity>);
    createPost(userPost: UserPost): Observable<UserPost>;
    findAllPosts(): Observable<UserPost[]>;
    updatePost(id: number, userPost: UserPost): Observable<UpdateResult>;
    deletePost(id: number): Observable<DeleteResult>;
}
