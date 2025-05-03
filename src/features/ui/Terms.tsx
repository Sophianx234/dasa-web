import { IoCloseOutline } from "react-icons/io5"
import TermsList from "./TermsList"
import { Dispatch, SetStateAction } from "react"


type termsProps = {
  handleClose?: Dispatch<SetStateAction<boolean>>
}
function Terms({handleClose}:termsProps) {
  return (
    <div className="fixed mb-4 inset-0 rounded-xl bg-white mx-2 my-2 ">
      <div className=" overflow-scroll relative flex justify-center items-center   h-full">

<div className={`  rounded-full  top-1 right-1 ${'absolute p-1'} bg-white shadow-sm border z-20`}>
                            <IoCloseOutline onClick={()=>handleClose?.(false)} className="size-6  stroke-red-400  "/>
                                </div>
      <div className=" absolute overflow-y-scroll h-[36rem]   px-4 ">

          <h1 className="text-lg font-bold text-center  text-[#33312e] pb-3 pt-2">Dagbon Students Association <br />Terms of Service   </h1>

          
<p className="track-wide text-justify">Welcome to <strong>DasaPage</strong>, the official platform of the Dagbon Students Association (DaSA) at the University of Ghana. By accessing or using this website and its services, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, please refrain from using the platform.</p>


          <h1 className="text-lg font-bold text-center  text-[#33312e] py-1 pt-3">Acceptance of Terms</h1>
          <p className="track-wide text-justify">These Terms govern your use of the DasaPage website and its associated features, including but not limited to account creation, messaging, event updates, business listings, anonymous contributions, and member dashboards. Your continued use of the site constitutes acceptance of these terms.</p>
 
<h1 className="text-lg font-bold text-center  text-[#33312e] py-1 pt-3">Eligibility</h1>

<p className="track-wide text-justify">You must be a current or past member of the Dagbon Students Association, a recognized affiliate, or an invited guest to access and use specific features of the platform.</p>



<TermsList
  title="User Accounts"
  listItems={[
    "You are responsible for maintaining the confidentiality of your account information.",
    "You agree to provide accurate, current, and complete information during registration.",
    "You may not impersonate another person or use false identity information.",
    "You are fully responsible for all activities under your account.",
]}
/>

<TermsList
  title="Community Guidelines and Code of Conduct"
  sub="By engaging with DasaPage, you agree to:"
  listItems={[
    "Treat all users with respect, kindness, and professionalism.",
    "Avoid using language or content that is discriminatory, threatening, or harassing.",
    "Refrain from posting illegal content or violating the intellectual property of others.",
    "Use the platform only for educational, social, and community growth purposes.",
]}
/>

<TermsList
  title="Content Ownership and Rights"
  listItems={[
    "You retain rights to the content you create and post.",
    "By posting on DasaPage, you grant DaSA a non-exclusive, royalty-free, worldwide license to use, distribute, and publicly display the content for community and promotional purposes.",
    "We reserve the right to remove or edit content that violates our policies.",
]}
/>

<TermsList
  title="Business Listings"
  sub="Members may create and share their business profiles."
  listItems={[
    "Listings must be accurate and updated.",
    "DasaPage is not liable for transactions or communications resulting from these listings.",
]}
/>



<TermsList
  title="Anonymous Features"
  listItems={[
    "Anonymous messages and feedback tools are moderated.",
    "We reserve the right to disable anonymous submissions in the case of abuse.",
  ]}
/>

<TermsList
  title="Event and Announcement Submissions"
  listItems={[
    "Members may submit events or announcements for publication.",
    "All submissions are subject to review and approval by the admins.",
  ]}
/>

<TermsList
  title="Termination"
  sub="We may suspend or permanently terminate access if:"
  listItems={[
    "You violate these Terms.",
    "You engage in unlawful behavior.",
    "Your actions harm the community or platform integrity.",
  ]}
/>

<TermsList
  title="Modifications to Terms"
  listItems={[
    "DasaPage reserves the right to modify these Terms of Service at any time.",
    "Changes will be communicated via email or announcements on the platform.",
    "Your continued use signifies acceptance.",
  ]}
/>

<TermsList
  title="Contact Us"
  listItems={[
    "For questions or concerns, contact us at: dasaug@gmail.com",
  ]}
/>




          </div>
    </div>
  </div>
  )
}

export default Terms
