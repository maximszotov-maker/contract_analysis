# Contract Analysis Web Application

Веб-приложение для анализа договоров на базе ИИ (GPT-4), разработанное на Next.js 14 с использованием n8n для обработки и Supabase в качестве базы данных.

## 🚀 Особенности

- ✅ **Telegram аутентификация** - безопасный вход через Telegram Login Widget
- ✅ **Два типа анализа:**
  - **Базовый** - быстрая проверка основных рисков (3 бесплатных анализа в день)
  - **Продвинутый** - глубокий анализ с ссылками на законы (300₽ за анализ)
- ✅ **Drag & Drop загрузка** - поддержка PDF и DOCX файлов (до 10MB)
- ✅ **Real-time статус** - отслеживание процесса анализа с polling
- ✅ **Детальные отчеты** - красиво оформленные результаты с рисками и рекомендациями
- ✅ **Интеграция YooKassa** - прием платежей за продвинутый анализ

## 📋 Технологический стек

### Frontend
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** для стилизации
- **React Dropzone** для загрузки файлов
- **Framer Motion** для анимаций
- **Lucide React** для иконок

### Backend & Infrastructure
- **n8n** - обработка workflow и интеграция с OpenAI
- **Supabase** - PostgreSQL база данных
- **OpenAI GPT-4/GPT-4o-mini** - анализ договоров
- **YooKassa** - платежная система

## 🛠 Установка и запуск

### Предварительные требования

- Node.js 18+ 
- npm или yarn
- Аккаунт Supabase
- n8n instance (облачный или self-hosted)
- Telegram Bot Token (от @BotFather)
- OpenAI API Key
- YooKassa аккаунт (опционально, для платежей)

### 1. Клонирование и установка зависимостей

```bash
cd /var/www/contract/web-app
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` на основе `env-template.txt`:

```bash
cp env-template.txt .env.local
```

Заполните переменные:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Telegram
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=contract_analysis_bot
TELEGRAM_BOT_TOKEN=your_bot_token

# n8n
N8N_WEBHOOK_URL=https://your-n8n.com/webhook/web-contract-analysis

# YooKassa (опционально)
YOOKASSA_SHOP_ID=your_shop_id
YOOKASSA_SECRET_KEY=your_secret_key

# App
NEXT_PUBLIC_APP_URL=https://contract.worksforme.ru
JWT_SECRET=your_random_secret_key_change_in_production
```

### 3. Настройка Supabase

Убедитесь, что в вашей Supabase БД созданы таблицы:

**tg_contract_users:**
```sql
CREATE TABLE tg_contract_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_id BIGINT UNIQUE NOT NULL,
  username TEXT,
  first_name TEXT,
  selected_analysis TEXT,
  last_active TIMESTAMP,
  free_ultra_checks INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**tg_contract_checks_limits:**
```sql
CREATE TABLE tg_contract_checks_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES tg_contract_users(id),
  base_checks_today INT DEFAULT 3,
  checks_total INT DEFAULT 0,
  last_base_check_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**tg_contract_contracts_analysis:**
```sql
CREATE TABLE tg_contract_contracts_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES tg_contract_users(id),
  analysis_json JSONB,
  file_type TEXT CHECK (file_type IN ('pdf', 'docx')),
  original_filename TEXT,
  status TEXT CHECK (status IN ('processing', 'completed', 'failed')) DEFAULT 'processing',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Настройка n8n Workflow

Следуйте инструкциям в файле `n8n-workflow-guide.md` в artifacts для создания n8n workflow.

Основные шаги:
1. Создать новый workflow в n8n
2. Добавить Webhook trigger с path `web-contract-analysis`
3. Скопировать логику обработки из существующего Telegram workflow
4. Скопировать URL webhook в `.env.local`

### 5. Запуск приложения

#### Development:
```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

#### Production:
```bash
npm run build
npm start
```

## 📁 Структура проекта

```
web-app/
├── app/
│   ├── (auth)/
│   │   └── login/              # Страница входа
│   ├── (dashboard)/
│   │   ├── dashboard/          # Главный дашборд
│   │   └── analysis/[id]/      # Страница результатов анализа
│   ├── api/
│   │   ├── auth/telegram/      # Telegram auth endpoint
│   │   ├── upload/             # Загрузка файлов
│   │   ├── analysis/[id]/status/  # Polling endpoint
│   │   └── payment/webhook/    # YooKassa webhook
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/
│   ├── ui/                     # UI компоненты (Button, Card, Badge)
│   ├── auth/                   # Telegram auth компоненты
│   ├── dashboard/              # Dashboard компоненты
│   └── analysis/               # Report viewer
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── telegram-auth.ts        # Telegram auth validation
│   ├── n8n-client.ts           # n8n webhook client
│   ├── session.ts              # Session management
│   └── utils.ts                # Утилиты
├── types/
│   ├── database.ts             # Database types
│   └── index.ts                # General types
└── public/                     # Статические файлы
```

## 🔄 Workflow процесса анализа

1. **Пользователь загружает файл** через FileUploader компонент
2. **Frontend проверяет лимиты** (базовые/продвинутые)
3. **POST /api/upload** - файл сохраняется локально
4. **Создается запись в БД** со статусом `processing`
5. **Вызывается n8n webhook** с file_url и параметрами
6. **n8n скачивает файл**, парсит, и отправляет на анализ в GPT-4
7. **n8n сохраняет результат** в Supabase и обновляет статус на `completed`
8. **Frontend polling** каждые 3 секунды проверяет статус через `/api/analysis/[id]/status`
9. **Отображение результатов** через ReportViewer компонент

## 🎨 Дизайн

Приложение использует современный, премиальный дизайн:
- 🌙 Темная тема на landing page с градиентами
- 🔵 Акцентные цвета blue-500/purple-500
- 🎯 Минималистичный dashboard в стиле Linear/Notion
- ✨ Плавные анимации и микро-интеракции
- 📱 Полностью адаптивный дизайн

## 🔐 Безопасность

- ✅ Telegram auth проверяется через HMAC-SHA256
- ✅ JWT сессии с HTTP-only cookies
- ✅ Server-side проверка лимитов
- ✅ Валидация файлов (тип и размер)
- ✅ Проверка ownership при доступе к анализам

## 📝 TODO / Улучшения

- [ ] Интеграция YooKassa payment flow
- [ ] Email уведомления о завершении анализа
- [ ] Export отчета в PDF
- [ ] Админ панель для управления пользователями
- [ ] Статистика и аналитика использования
- [ ] WebSocket для real-time updates (вместо polling)
- [ ] Кэширование результатов анализа
- [ ] Multi-language support

## 🤝 Поддержка

Для вопросов и сообщений об ошибках, обращайтесь к разработчику.

## 📄 Лицензия

Proprietary - All rights reserved

---

**Разработано с ❤️ используя Next.js, n8n и GPT-4**
