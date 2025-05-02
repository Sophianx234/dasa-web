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
                    role="President"
                    name="Damian Parker"
                    desc="As students and future leaders, we carry the dreams of Dagbon in our hearts. Our unity, resilience, and dedication today will shape a brighter tomorrow. I encourage every member of DaSA to rise with pride, to lead with compassion, and to never lose sight of the power we hold to make a difference. Together, we are stronger, and together, we will build a Dagbon we can all be proud of."

                    />
                    <Executive imgUrl= {executiveImgs[0]}
                    role="Vice President"
                    name="Damian Parker"
                    desc="True leadership is found not just in standing at the front, but in lifting others as we move forward. As Vice-President, I urge each of us to believe in the strength of community and collaboration. Let’s nurture friendships, share knowledge, and push one another to reach higher heights. Every step you take today brings Dagbon closer to a future filled with hope, innovation, and unity"

                    />
                    <Executive imgUrl= {executiveImgs[1]}
                    role="Financial Secretary"
                    name="Damian Parker"
                    desc="Financial wisdom is at the heart of growth, not just for individuals but for communities. At DaSA, we believe that careful planning, transparency, and collective responsibility are key to building lasting impact. I encourage all members to cultivate a spirit of discipline, generosity, and vision — because every wise investment we make today, whether in education, service, or leadership, paves the way for a prosperous Dagbon tomorrow."

                    />
                   
                </div>
            </div>
        </div>
    )
}

export default ExecutivesSection
