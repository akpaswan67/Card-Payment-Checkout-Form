import { CreditCard } from "lucide-react"

export default function PaymentForm() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Complete registration payment</h2>

      {/* Personal details section */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Personal details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block text-sm mb-1">
              Address line
            </label>
            <input type="text" id="address" placeholder="P.O.Box 1234" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm mb-1">
              City
            </label>
            <input type="text" id="city" placeholder="Arusha" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm mb-1">
              State
            </label>
            <input type="text" id="state" placeholder="Arusha, Tanzania" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="postal" className="block text-sm mb-1">
              Postal code
            </label>
            <input type="text" id="postal" placeholder="9090" className="w-full p-2 border rounded" />
          </div>
        </div>
      </div>

      {/* Payment methods section */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Payment methods</h3>
        <div className="flex flex-wrap gap-4">
          <div className="border rounded p-2 w-16 h-10 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
              alt="VISA"
              className="h-6 w-auto"
            />
          </div>
          <div className="border rounded p-2 w-16 h-10 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
              alt="Stripe"
              className="h-6 w-auto"
            />
          </div>
          <div className="border rounded p-2 w-16 h-10 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
              alt="PayPal"
              className="h-6 w-auto"
            />
          </div>
          <div className="border rounded p-2 w-16 h-10 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
              alt="Mastercard"
              className="h-6 w-auto"
            />
          </div>
          <div className="border rounded p-2 w-16 h-10 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
              alt="Google Pay"
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Card details section */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Card details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="cardholder" className="block text-sm mb-1">
              Cardholder's name
            </label>
            <input type="text" id="cardholder" placeholder="Name on your card" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="cardnumber" className="block text-sm mb-1">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardnumber"
                placeholder="0000 0000 0000 0000"
                className="w-full p-2 border rounded"
              />
              <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm mb-1">
                Expiry
              </label>
              <input type="text" id="expiry" placeholder="MM/YY" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm mb-1">
                CVC
              </label>
              <input type="text" id="cvc" placeholder="123" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <button className="w-full bg-[#0f3c30] text-white py-3 rounded-md font-medium">Complete Payment</button>
    </div>
  )
}
