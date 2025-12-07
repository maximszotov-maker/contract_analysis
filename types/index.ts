export interface TelegramAuthData {
    id: number
    first_name: string
    username?: string
    photo_url?: string
    auth_date: number
    hash: string
}

export type AnalysisType = 'base' | 'ultra'

export interface UploadResponse {
    analysis_id: string
    status: 'processing'
}

export interface PaymentResponse {
    payment_id: string
    confirmation_url: string
    amount: string
}
