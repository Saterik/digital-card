import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProfileOutput } from './dto/profile.output';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(): Promise<ProfileOutput | null> {
    const profile = await this.prisma.profile.findFirst({
      include: {
        skills: true,
        experience: {
          orderBy: {
            startDate: 'desc',
          },
        },
        projects: true,
      },
    });

    return profile;
  }
}