import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  allCats(): string {
    return 'This action returns all cats';
  }

  @Get('breed')
  allBreeds(): string {
    return 'This action returns all cats breeds';
  }
}
