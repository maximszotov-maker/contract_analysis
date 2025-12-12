import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { XCircle, MessageCircle } from 'lucide-react'

export default function PaymentFailurePage() {
    const botLink = "https://t.me/contract_analysis_bot?start=payment_retry"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <Card className="max-w-lg w-full bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-12 h-12 text-red-400" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Оплата не прошла 😢
                    </h1>

                    <p className="text-slate-300 text-lg mb-3">
                        К сожалению, платеж не был завершен.
                    </p>

                    <p className="text-slate-400 mb-8">
                        Пожалуйста, проверьте данные карты и попробуйте еще раз. Если проблема повторяется, свяжитесь с поддержкой банка.
                    </p>

                    <a href={botLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="text-lg px-8 h-14 bg-blue-600 hover:bg-blue-700 w-full mb-3">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Попробовать снова в Telegram
                        </Button>
                    </a>

                    <Link href="/">
                        <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                            Вернуться на главную
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
