import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Observable } from 'rxjs';

import { DeleteResult, UpdateResult } from 'typeorm';
import { UserPost } from '../models/user.interface';
import { UserService } from '../services/feed.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userPost: UserPost): Observable<UserPost> {
    return this.userService.createPost(userPost);
  }

  @Get()
  findAll(): Observable<UserPost[]> {
    return this.userService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: UserPost,
  ): Observable<UpdateResult> {
    return this.userService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deletePost(id);
  }
}
