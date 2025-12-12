import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, MessageCircle } from 'lucide-react'

export default function PaymentSuccessPage() {
    const botLink = "https://t.me/contract_analysis_bot?start=payment_success"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <Card className="max-w-lg w-full bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Оплата прошла успешно!
                    </h1>

                    <p className="text-slate-300 text-lg mb-8">
                        Спасибо за покупку продвинутого анализа. Вернитесь в Telegram и загрузите документ для проверки.
                    </p>

                    <a href={botLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="text-lg px-8 h-14 bg-emerald-600 hover:bg-emerald-700 w-full">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Вернуться в Telegram
                        </Button>
                    </a>

                    <p className="text-slate-400 text-sm mt-6">
                        Продвинутый анализ готов к использованию
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
