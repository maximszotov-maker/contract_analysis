import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Zap, CheckCircle2, MessageCircle, Clock, Wallet, TrendingUp, UserCheck, Lock, Share2 } from 'lucide-react'

export default function LandingPage() {
  const botLink = "https://t.me/contract_analysis_bot?start=docs_site"

  // Share links
  const shareUrl = 'https://contract.worksforme.ru'
  const shareText = encodeURIComponent('Проверка договоров с помощью ИИ за 60 секунд! 1 бесплатный анализ каждый день')
  const shareTitle = encodeURIComponent('Contract Analysis - Анализ договоров')

  const shareLinks = {
    telegram: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`,
    vk: `https://vk.com/share.php?url=${shareUrl}&title=${shareTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4" />
              Анализ прямо в Telegram
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Проверьте договор<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                за 60 секунд
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Просто отправьте договор в Telegram-бот. Искусственный интеллект найдёт риски,
              ошибки и недостающие пункты.
            </p>

            <p className="text-lg text-blue-300 font-semibold mb-10">
              ⚡ Быстро • 💬 Удобно • 💰 Доступно
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={botLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 h-14 bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Открыть Telegram-бот
                </Button>
              </a>
            </div>

            <p className="text-sm text-slate-400 mt-6">
              🎁 1 бесплатный базовый анализ каждый день • 1 продвинутый анализ в подарок
            </p>
          </div>
        </div>
      </div>

      {/* Why Telegram Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Моментально</h3>
              <p className="text-slate-300">
                Результат через 30-60 секунд после отправки. Никаких ожиданий.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Просто и удобно</h3>
              <p className="text-slate-300">
                Работает прямо в Telegram. Отправили файл — получили отчёт. Всё на одном экране.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Дёшево</h3>
              <p className="text-slate-300">
                1 бесплатная проверка каждый день. Продвинутый анализ всего 250₽.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Безопасно</h3>
              <p className="text-slate-300">
                Не храним ваши документы и персональные данные. Полная конфиденциальность.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Без регистрации</h3>
              <p className="text-slate-300">
                Просто откройте бот и начните работать. Никаких форм и аккаунтов.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Что проверяет бот?
          </h2>
          <p className="text-slate-300 text-lg">
            ИИ на базе самых современных нейросетей анализирует договор как опытный юрист
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Риски и угрозы</h3>
              <p className="text-slate-300">
                Скрытые пункты, которые могут обернуться проблемами. С оценкой серьёзности каждого риска.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Недостающие условия</h3>
              <p className="text-slate-300">
                Какие важные пункты отсутствуют в договоре и как их правильно сформулировать.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Рекомендации</h3>
              <p className="text-slate-300">
                Конкретные советы по улучшению договора для защиты ваших интересов.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How it Works */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Как это работает?
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Откройте бот в Telegram</h3>
              <p className="text-slate-300">
                Нажмите кнопку ниже или найдите <span className="text-blue-400">@contract_analysis_bot</span> в Telegram
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Отправьте договор</h3>
              <p className="text-slate-300">
                Просто прикрепите файл в формате PDF или DOCX (не скан, до 10MB)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Получите отчёт</h3>
              <p className="text-slate-300">
                Через 30-60 секунд бот пришлёт подробный анализ с рисками, рекомендациями и оценкой
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href={botLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-12 h-14 bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="w-5 h-5 mr-2" />
              Попробовать сейчас
            </Button>
          </a>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Прозрачные цены
          </h2>
          <p className="text-slate-300 text-lg">
            Начните бесплатно, платите только за продвинутый анализ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Базовый</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Бесплатно</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  1 проверка в день
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  Основные риски
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  Общие рекомендации
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  Результат за 30-60 сек
                </li>
              </ul>
              <a href={botLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Начать бесплатно
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                  Рекомендуем
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Продвинутый</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">250₽</span>
                <span className="text-slate-300"> / анализ</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Всё из Базового +
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Юридическая квалификация
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Ссылки на статьи законов
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Недостающие пункты с примерами
                </li>
              </ul>
              <a href={botLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Попробовать (1 бесплатно)
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Share2 className="w-7 h-7 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Расскажите друзьям
          </h2>
          <p className="text-slate-300 text-lg">
            Поделитесь с теми, кому может пригодиться
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href={shareLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-white font-semibold text-sm">Telegram</p>
              </CardContent>
            </Card>
          </a>

          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-all">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-white font-semibold text-sm">WhatsApp</p>
              </CardContent>
            </Card>
          </a>

          <a
            href={shareLinks.vk}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-500/20 transition-all">
                  <Share2 className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-white font-semibold text-sm">VK</p>
              </CardContent>
            </Card>
          </a>

          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500/20 transition-all">
                  <Share2 className="w-6 h-6 text-sky-400" />
                </div>
                <p className="text-white font-semibold text-sm">Twitter</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Готовы проверить договор?
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          Откройте бот в Telegram и отправьте файл. Результат через минуту.
        </p>
        <a href={botLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-lg px-12 h-14 bg-blue-600 hover:bg-blue-700">
            <MessageCircle className="w-5 h-5 mr-2" />
            Начать прямо сейчас
          </Button>
        </a>
        <p className="text-sm text-slate-400 mt-6">
          Или найдите <span className="text-blue-400 font-semibold">@contract_analysis_bot</span> в Telegram
        </p>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-400 text-sm">
            © 2024 Contract Analysis. Анализ договоров на базе ИИ • {' '}
            <a href={botLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Telegram-бот
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
