import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle, Globe, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
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
        <CheckCircle
          size={64}
          style={{ color: 'var(--color-emerald)', marginBottom: 24 }}
        />
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          Domain Acquired!
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Your purchase was successful. Our team will initiate the domain transfer
          process and you'll receive transfer instructions via email within 2 hours.
        </p>
        <a
          href="/"
          className="btn-primary"
          style={{ fontSize: 15, padding: '14px 32px' }}
        >
          <Globe size={18} /> Browse More Domains <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
