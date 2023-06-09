import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserPostEntity } from '../models/user.entity';
import { UserPost } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userRepository: Repository<UserPostEntity>,
  ) {}

  createPost(userPost: UserPost): Observable<UserPost> {
    return from(this.userRepository.save(userPost));
  }

  findAllPosts(): Observable<UserPost[]> {
    return from(this.userRepository.find());
  }

  updatePost(id: number, userPost: UserPost): Observable<UpdateResult> {
    return from(this.userRepository.update(id, userPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }
}
