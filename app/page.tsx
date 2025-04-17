export default function CheckoutPage() {
  return (
    <div className="relative bg-[#0f3c30] min-h-[100vh] flex flex-col">
      {/* Header */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Card payment</h1>
        <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Checkout form</h2>
      </div>

      {/* Main content area with fixed white section */}
      <div className="flex-grow relative">
        <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row h-[70vh]">
            {/* Fixed payment gateway section */}
            <div className="md:w-1/3 p-8 flex flex-col items-center justify-center bg-white rounded-tl-3xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path d="M48 0L0 48L48 96L96 48L48 0ZM48 19.2L76.8 48L48 76.8L19.2 48L48 19.2Z" fill="#0f3c30" />
                  </svg>
                </div>
                <h3 className="text-[#0f3c30] text-xl font-bold mb-2">Payment gateway</h3>
                <p className="text-gray-500 text-sm">Enter school location details</p>
              </div>
            </div>

            {/* Scrollable form section */}
            <div className="md:w-2/3 overflow-y-auto h-full">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import PaymentForm from "@/components/payment-form"
