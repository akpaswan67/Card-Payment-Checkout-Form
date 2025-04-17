import Image from "next/image"

export default function PaymentGatewayLogo() {
  return (
    <div className="w-20 h-20 relative">
      <Image src="/placeholder.svg?height=80&width=80" alt="Payment Gateway Logo" fill className="object-contain" />
    </div>
  )
}
