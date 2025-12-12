import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Building2, ArrowLeft } from 'lucide-react'

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Link href="/">
                    <Button variant="outline" className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        На главную
                    </Button>
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Контакты
                    </h1>
                    <p className="text-slate-300 text-lg">
                        Свяжитесь с нами по любым вопросам
                    </p>
                </div>

                <div className="grid gap-6">
                    <Card className="bg-white/5 border-white/10 backdrop-blur">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Электронная почта</h3>
                                    <a href="mailto:worksforme.ru@gmail.com" className="text-blue-400 hover:text-blue-300 text-lg">
                                        worksforme.ru@gmail.com
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 backdrop-blur">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
                                    <a href="tel:+79060899230" className="text-emerald-400 hover:text-emerald-300 text-lg">
                                        +7 (906) 089-92-30
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 backdrop-blur">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Реквизиты</h3>
                                    <p className="text-slate-300 text-lg">
                                        <span className="text-slate-400">ИНН:</span> 544511621163
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-400">
                        Индивидуальный предприниматель
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Мы работаем с понедельника по воскресенье
                    </p>
                </div>
            </div>
        </div>
    )
}
