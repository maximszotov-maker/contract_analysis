import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function OfferPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/">
                    <Button variant="outline" className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        На главную
                    </Button>
                </Link>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                        Публичная оферта
                    </h1>

                    <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">1. Общие положения</h2>
                            <p>
                                Настоящая публичная оферта (далее — «Оферта») является официальным предложением
                                Индивидуального предпринимателя (ИНН: 544511621163) (далее — «Исполнитель»)
                                заключить договор на оказание услуг по анализу юридических документов с использованием
                                искусственного интеллекта (далее — «Услуги») на условиях, изложенных ниже.
                            </p>
                            <p>
                                Акцептом настоящей Оферты является оплата Услуг Заказчиком. Договор считается заключенным
                                с момента оплаты.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">2. Предмет договора</h2>
                            <p>
                                2.1. Исполнитель обязуется оказать Заказчику Услуги по автоматизированному анализу
                                юридических документов (договоров) с использованием технологий искусственного интеллекта,
                                а Заказчик обязуется принять и оплатить эти Услуги.
                            </p>
                            <p>
                                2.2. Услуги предоставляются через Telegram-бот @contract_analysis_bot.
                            </p>
                            <p>
                                2.3. Исполнитель предоставляет два типа анализа:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Базовый анализ</strong> — 1 бесплатный анализ в день на пользователя</li>
                                <li><strong>Продвинутый анализ</strong> — стоимость 300 рублей за 1 анализ</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">3. Стоимость и порядок оплаты</h2>
                            <p>
                                3.1. Стоимость Услуг указана на сайте contract.worksforme.ru и в Telegram-боте.
                            </p>
                            <p>
                                3.2. Оплата производится в российских рублях через платежную систему (YooKassa, Robokassa
                                или другие доступные способы оплаты).
                            </p>
                            <p>
                                3.3. Услуга считается оказанной после предоставления результата анализа в Telegram-боте.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">4. Права и обязанности сторон</h2>

                            <h3 className="text-xl font-semibold text-white mb-2">4.1. Исполнитель обязуется:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Предоставить результат анализа в течение 30-60 секунд после загрузки документа</li>
                                <li>Обеспечить конфиденциальность загруженных документов</li>
                                <li>Не хранить персональные данные и документы Заказчика после завершения анализа</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.2. Заказчик обязуется:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Предоставлять документы в поддерживаемых форматах (PDF, DOCX)</li>
                                <li>Не использовать сервис для незаконных целей</li>
                                <li>Своевременно оплачивать Услуги согласно выбранному тарифу</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">5. Конфиденциальность</h2>
                            <p>
                                5.1. Исполнитель обязуется не разглашать информацию, содержащуюся в анализируемых документах.
                            </p>
                            <p>
                                5.2. Загруженные документы не сохраняются и удаляются сразу после завершения анализа.
                            </p>
                            <p>
                                5.3. Персональные данные пользователей обрабатываются только в рамках функционирования
                                Telegram-бота и не передаются третьим лицам.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">6. Ответственность</h2>
                            <p>
                                6.1. Результаты анализа носят информационно-справочный характер и не могут служить
                                основанием для принятия юридических решений без консультации с квалифицированным юристом.
                            </p>
                            <p>
                                6.2. Исполнитель не несет ответственности за решения, принятые Заказчиком на основании
                                результатов анализа.
                            </p>
                            <p>
                                6.3. Исполнитель не несет ответственности за технические сбои, вызванные действиями
                                третьих сторон (Telegram, платежных систем).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">7. Возврат средств</h2>
                            <p>
                                7.1. Возврат средств возможен в случае технического сбоя, препятствующего оказанию Услуги.
                            </p>
                            <p>
                                7.2. Возврат производится в течение 5 рабочих дней с момента обращения Заказчика.
                            </p>
                            <p>
                                7.3. Для возврата средств необходимо обратиться по электронной почте: worksforme.ru@gmail.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">8. Заключительные положения</h2>
                            <p>
                                8.1. Настоящая Оферта вступает в силу с момента размещения на сайте и действует до момента
                                отзыва Исполнителем.
                            </p>
                            <p>
                                8.2. Исполнитель оставляет за собой право вносить изменения в условия Оферты.
                                Изменения вступают в силу с момента их публикации.
                            </p>
                            <p>
                                8.3. Во всем остальном, что не предусмотрено настоящей Офертой, стороны руководствуются
                                действующим законодательством Российской Федерации.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-3">9. Реквизиты Исполнителя</h2>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-1">
                                <p><strong>Индивидуальный предприниматель</strong></p>
                                <p>ИНН: 544511621163</p>
                                <p>Email: worksforme.ru@gmail.com</p>
                                <p>Телефон: +7 (906) 089-92-30</p>
                            </div>
                        </section>

                        <div className="mt-8 pt-6 border-t border-white/20 text-center text-slate-400 text-sm">
                            <p>Последнее обновление: 12 декабря 2024 года</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
