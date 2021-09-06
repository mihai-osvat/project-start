import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { Partner } from '../models/partner';
import { PartnerService } from './partner.service';

@Controller('api/partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get(':id')
  getPartner(@Param('id', ParseIntPipe) partnerId: number): Partner {
    return this.partnerService.findPartner(partnerId);
  }

  @Get()
  getAll(): Partner[] {
    return this.partnerService.getPartners();
  }

  @Post()
  addPartner(@Body() partner: Partner) {
    return this.partnerService.addPartner(partner);
  }

  @Patch(':id')
  patchPartner(
    @Param('id', ParseIntPipe) partnerId: number,
    @Body() partner: Partial<Partner>,
  ) {
    return this.partnerService.patchPartner(partnerId, partner);
  }
}
