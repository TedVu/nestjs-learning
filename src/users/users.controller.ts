import { Controller, Get, Param } from '@nestjs/common';

// controller's routes need to be implemented in waterfall manner
@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
