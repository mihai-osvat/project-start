import { Injectable } from '@nestjs/common';
import { Partner } from 'src/models/partner';

const partners: Partner[] = [
  { id: 1, name: 'First partner', description: 'First description' },
  { id: 2, name: 'Second partner', description: 'Second description' },
];

@Injectable()
export class PartnerService {
  getPartners(): Partner[] {
    return partners;
  }

  findPartner(partnerId: number): Partner {
    return partners.find((p) => p.id === partnerId);
  }

  addPartner(partner: Partner): void {
    partners.push(partner);
  }

  patchPartner(partnerId: number, partner: Partial<Partner>) {
    const index = partners.findIndex((part) => part.id === partnerId);

    if (index) {
      const patchedPartner = {
        ...partners[index],
        ...partner,
      };

      partners[index] = patchedPartner;
    }
  }
}
