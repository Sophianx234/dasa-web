import BenefitsList from "./BenefitsList"

function Membership() {
    return (
        <section>
            <h1 className="font-bold text-center">Why join DaSA</h1>
            <BenefitsList/>
            <div className="py-4 px-1">
                <p className="text-xs  text-center">

            Become a part of our community and unlock exclusive benefits designed to help you connect, thrive, and succeed.
                </p>
            </div>
        </section>
    )
}

export default Membership
