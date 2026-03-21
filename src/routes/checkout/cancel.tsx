import { createFileRoute } from '@tanstack/react-router'
import { XCircle, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 20,
          padding: 56,
          textAlign: 'center',
          maxWidth: 520,
          width: '100%',
        }}
      >
        <XCircle
          size={64}
          style={{ color: 'var(--color-rose)', marginBottom: 24 }}
        />
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          Checkout Cancelled
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Your payment was cancelled and no charges were made. The domain is still
          available if you'd like to complete your purchase.
        </p>
        <a
          href="/"
          className="btn-primary"
          style={{ fontSize: 15, padding: '14px 32px' }}
        >
          Back to Marketplace <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
