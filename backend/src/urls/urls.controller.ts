import { Body, Param, Put, UseGuards } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UpdateUrlDto } from './dto/update-url.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtAuthGuard)
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Put(':urlId')
  async update(@Param('urlId') urlId: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlsService.update(urlId, updateUrlDto);
  }
}
