import PaymentForm from "@/components/PaymentForm";

// Authorization API

// This API allows us to authenticate and authorize all our API calls to Daraja.
// Endpoint: MPESA_BASE_URL/oauth/v1/generate?grant_type=client_credentials
// Mpesa Express API

// This API allows us to initiate the STK push.
// Endpoint: MPESA_BASE_URL/mpesa/stkpush/v1/processrequest
// STK Query API

// This API allows us to track the real-time status of the STK push interaction from the user.
// Endpoint: MPESA_BASE_URL/mpesa/stkpushquery/v1/query

export default function Home() {
  return (
    <section className="bg-gray-100 max-w-400 h-screen flex justify-center items-center">
      <PaymentForm />
    </section>
  );
}