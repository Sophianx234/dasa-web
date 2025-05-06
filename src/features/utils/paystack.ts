export const getPayStackConfig = (amount:string) =>{
  const publicKey = import.meta.env.PAYSTACK_PUBLIC_KEY
  if(!publicKey) throw new Error('Missing public key')
  return {

    reference: new Date().getTime().toString(), // Always unique
    email: "dx4336969@gmail.com",
    amount: +amount * 100, // Amount is in Kobo (₦200)
    currency: 'GHS',
    publicKey
  }
}