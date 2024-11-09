import Executive from "./Executive"
const executiveImgs = ["https://i.ibb.co/qpPNS9j/D-10.jpg","https://i.ibb.co/xSwBWpZ/xp-1.jpg","https://i.ibb.co/qrwYLWg/photo-22-2024-10-31-06-52-36.jpg","https://i.ibb.co/HV1gNph/xp-2.jpg"]
function ExecutivesSection() {
    return (
        <div>
            <div>
                <h1 className="text-center text-[#4c4945] font-bold text-lg">Executives</h1>
                <p className="text-center">Meet the dedicated team leading the Dagbon Students Association.</p>
                <div className="space-y-12 ">
                    <Executive imgUrl= {executiveImgs[3]}
                    role="Vice President"
                    name="Damian Parker"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto, aut dolore voluptates praesentium quam magni, delectus numquam corporis tempore enim quas officia consequatur rem facilis minima eos aliquid laborum."

                    />
                    <Executive imgUrl= {executiveImgs[0]}
                    role="Vice President"
                    name="Damian Parker"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto, aut dolore voluptates praesentium quam magni, delectus numquam corporis tempore enim quas officia consequatur rem facilis minima eos aliquid laborum."

                    />
                    <Executive imgUrl= {executiveImgs[1]}
                    role="Vice President"
                    name="Damian Parker"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto, aut dolore voluptates praesentium quam magni, delectus numquam corporis tempore enim quas officia consequatur rem facilis minima eos aliquid laborum."

                    />
                   
                </div>
            </div>
        </div>
    )
}

export default ExecutivesSection
