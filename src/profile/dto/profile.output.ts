import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SkillOutput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class ExperienceOutput {
  @Field()
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field()
  achievements: string;
}

@ObjectType()
export class ProjectOutput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  repository?: string;
}

@ObjectType()
export class ProfileOutput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  githubUrl?: string;

  @Field({ nullable: true })
  linkedinUrl?: string;

  @Field(() => [SkillOutput])
  skills: SkillOutput[];

  @Field(() => [ExperienceOutput])
  experience: ExperienceOutput[];

  @Field(() => [ProjectOutput])
  projects: ProjectOutput[];
}