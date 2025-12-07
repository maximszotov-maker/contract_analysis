# Docker Deployment Guide

## Быстрый старт

```bash
cd /var/www/contract/web-app
./deploy.sh
```

## Команды управления

### Развертывание
```bash
# Первое развертывание или обновление
./deploy.sh

# Или вручную:
docker-compose build
docker-compose up -d
```

### Просмотр логов
```bash
docker-compose logs -f
```

### Перезапуск
```bash
docker-compose restart
```

### Остановка
```bash
docker-compose down
```

### Полная пересборка
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Структура

**Dockerfile** - Multi-stage build:
- Stage 1: Dependencies (production only)
- Stage 2: Builder (build Next.js)
- Stage 3: Runner (minimal production image)

**docker-compose.yml** - Конфигурация:
- Порт 3011 → контейнер
- Auto-restart
- Изолированная сеть

**next.config.ts** - Standalone mode для Docker

## Автозапуск при перезагрузке сервера

Docker Compose уже настроен с `restart: unless-stopped`, поэтому контейнер автоматически запустится при перезагрузке сервера.

## Nginx конфигурация

Nginx уже настроен на проксирование порта 3011. Ничего менять не нужно.

## Обновление приложения

1. Вносите изменения в код
2. Запускаете `./deploy.sh`
3. Готово!

## Troubleshooting

**Порт занят:**
```bash
lsof -i :3011
docker-compose down
```

**Очистка старых образов:**
```bash
docker system prune -a
```

**Проверка статуса:**
```bash
docker-compose ps
docker-compose logs --tail=50
```
