import BenefitsList from "./BenefitsList"

function Membership() {
    return (
        <section className="space-y-3">
            <h1 className="font-bold text-center font-mulish">Why join DaSA</h1>
            <BenefitsList/>
            <div className="py-4 px-6 pb-10">
                <p className="text-xs  text-center pt-5">

            Become a part of our community and unlock exclusive benefits designed to help you connect, thrive, and succeed.
                </p>
            </div>
        </section>
    )
}

export default Membership
