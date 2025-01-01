import AccordionBar, { faqsType } from "./Accordion"

function AccordionList() {
    const faqs: faqsType[] = [
        {
          question: "What is DaSA?",
          answer: "DaSA stands for the Dagbon Students Association, an organization aimed at supporting Dagbon students at the University of Ghana."
        },
        {
          question: "Who can join DaSA?",
          answer: "DaSA membership is open to all Dagbon students and those interested in learning about Dagbon culture."
        },
        {
          question: "What are the benefits of joining DaSA?",
          answer: "Members gain access to cultural events, networking opportunities, academic support, and a sense of community."
        },
        {
          question: "How can I become a member?",
          answer: "You can sign up on our website or visit our booth during campus events."
        },
        {
          question: "Is there a membership fee?",
          answer: "Yes, there is a small fee to cover association activities and resources. Details on the amount can be found on our website."
        },
        {
          question: "What activities does DaSA organize?",
          answer: "We host cultural events, academic seminars, study groups, workshops, and social gatherings."
        },
        {
          question: "How can I find out about upcoming DaSA events?",
          answer: "Check our website’s events page or follow us on social media for updates."
        },
        {
          question: "Are DaSA events open to non-members?",
          answer: "Some events are open to all, while others may be exclusive to members. Details will be specified for each event."
        },
        {
          question: "How can I volunteer or participate in organizing events?",
          answer: "Reach out to any executive member or send an email to express your interest. Volunteers are always welcome!"
        },
        {
          question: "Can DaSA help with academic support?",
          answer: "Yes, DaSA organizes study groups and workshops, and members often share resources and mentorship."
        },
        {
          question: "Does DaSA provide financial assistance or scholarships?",
          answer: "While DaSA itself doesn’t offer scholarships, we provide information on available scholarships and resources for students in need."
        },
        {
          question: "How can I connect with alumni of DaSA?",
          answer: "We have an alumni network, and regular events where alumni participate. You can also join our LinkedIn group."
        },
        {
          question: "Are there networking opportunities through DaSA?",
          answer: "Absolutely! DaSA organizes networking events and connects members with alumni and professionals from various fields."
        },
        {
          question: "How can I contact DaSA's executive board?",
          answer: "You can email the executive board or contact us via our social media channels."
        },
        {
          question: "How can I update my membership information?",
          answer: "Log into your member profile on the DaSA website to update your information, or reach out to the admin if you need help."
        },
        {
          question: "Can members promote their businesses through DaSA?",
          answer: "Yes, we support member businesses. You can showcase your business on the DaSA website’s business section."
        },
        {
          question: "What is the Down Boys group in DaSA?",
          answer: "The Down Boys are a group within DaSA with shared goals of striving for significant life changes despite humble beginnings. They focus on ambition, resilience, and community support."
        }
      ]
    return (
        <div className="space-y-3">
            <h1 className="text-center font-semibold">Frequently Asked Questions</h1>
            <div>
                <AccordionBar faqs={faqs }/>
                
            </div>
        </div>
    )
}

export default AccordionList
