import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUrlDto } from './dto/update-url.dto';

@Injectable()
export class UrlsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return `This action returns all urls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} url`;
  }

  async update(id, updateUrlDto: UpdateUrlDto) {
    return this.prismaService.url.update({
      where: { id },
      data: updateUrlDto,
    });
  }
}
