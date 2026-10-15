FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm ci

# Копируем исходный код
COPY . .

# Генерируем Prisma клиент
RUN npx prisma generate

# Собираем проект
RUN npm run build

# Финальный образ
FROM node:20-alpine

WORKDIR /app

# Копируем собранный код и зависимости
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env ./.env

EXPOSE 4000

CMD ["npm", "run", "start:prod"]