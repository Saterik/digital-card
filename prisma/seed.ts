import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Начинаем заполнение базы данных...');

  // Очищаем существующие данные
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  // Создаем профиль
  const profile = await prisma.profile.create({
    data: {
      name: 'SWILL Way',
      description: 'Backend-разработчик с опытом работы в современных веб-технологиях. Специализируюсь на создании качественных и масштабируемых серверных приложений.',
      githubUrl: 'https://github.com/swill-way',
      linkedinUrl: 'https://linkedin.com/in/swill-way',
      
      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'Node.js' },
          { name: 'NestJS' },
          { name: 'GraphQL' },
          { name: 'Prisma' },
          { name: 'Docker' },
          { name: 'Git' },
          { name: 'PostgreSQL' },
          { name: 'REST API' },
          { name: 'Microservices' },
        ],
      },
      
      experience: {
        create: [
          {
            company: 'Tech Company A',
            position: 'Senior Backend Developer',
            startDate: '2023-01',
            endDate: null,
            achievements: 'Разработка микросервисной архитектуры, оптимизация производительности API на 40%',
          },
          {
            company: 'Startup B',
            position: 'Backend Developer',
            startDate: '2021-06',
            endDate: '2022-12',
            achievements: 'Создание GraphQL API, внедрение CI/CD процессов',
          },
          {
            company: 'Company C',
            position: 'Junior Developer',
            startDate: '2020-01',
            endDate: '2021-05',
            achievements: 'Разработка REST API, работа с базами данных',
          },
        ],
      },
      
      projects: {
        create: [
          {
            name: 'Digital Card API',
            description: 'Backend-приложение для презентации профессионального портфолио',
            url: 'https://digital-card.example.com',
            repository: 'https://github.com/swill-way/digital-card',
          },
          {
            name: 'E-commerce Platform',
            description: 'Платформа электронной коммерции с микросервисной архитектурой',
            url: 'https://ecommerce.example.com',
            repository: 'https://github.com/swill-way/ecommerce',
          },
          {
            name: 'Real-time Chat Service',
            description: 'Сервис обмена сообщениями в реальном времени',
            url: null,
            repository: 'https://github.com/swill-way/chat-service',
          },
        ],
      },
    },
    include: {
      skills: true,
      experience: true,
      projects: true,
    },
  });

  console.log('Профиль создан:', profile.name);
  console.log('Навыки:', profile.skills.length);
  console.log('Опыт работы:', profile.experience.length);
  console.log('Проекты:', profile.projects.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });