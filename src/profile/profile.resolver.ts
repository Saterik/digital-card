import { Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { ProfileOutput } from './dto/profile.output';

@Resolver(() => ProfileOutput)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileOutput, { nullable: true })
  async profile(): Promise<ProfileOutput | null> {
    return this.profileService.getProfile();
  }
}