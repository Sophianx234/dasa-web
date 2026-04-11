import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

export const faqsData = [
  { question: "What is DaSA?", answer: "DaSA stands for the Dagbon Students Association, an organization aimed at supporting Dagbon students at the University of Ghana." },
  { question: "Who can join DaSA?", answer: "DaSA membership is open to all Dagbon students and those interested in learning about Dagbon culture." },
  { question: "What are the benefits of joining DaSA?", answer: "Members gain access to cultural events, networking opportunities, academic support, and a sense of community." },
  { question: "How can I become a member?", answer: "You can sign up on our website or visit our booth during campus events." },
  { question: "Is there a membership fee?", answer: "Yes, there is a small fee to cover association activities and resources. Details on the amount can be found on our website." },
  { question: "What activities does DaSA organize?", answer: "We host cultural events, academic seminars, study groups, workshops, and social gatherings on campus." },
  { question: "How can I find out about upcoming DaSA events?", answer: "Check our website’s events page or follow us on social media for updates." },
  { question: "Are DaSA events open to non-members?", answer: "Some events are open to all, while others may be exclusive to members. Details will be specified for each event." },
  { question: "How can I volunteer or participate in organizing events?", answer: "Reach out to any executive member or send an email to express your interest. Volunteers are always welcome!" },
  { question: "Can DaSA help with academic support?", answer: "Yes, DaSA organizes study groups and workshops, and members often share resources and mentorship." },
  { question: "Does DaSA provide financial assistance or scholarships?", answer: "While DaSA doesn’t directly offer scholarships, we actively share available opportunities and support members through the application process. We also endeavor to secure scholarships and financial aid for members facing financial difficulties." },
  { question: "How can I connect with alumni of DaSA?", answer: "We have an alumni network, and regular events where alumni participate. You can also join our LinkedIn group." },
  { question: "Are there networking opportunities through DaSA?", answer: "Absolutely! DaSA organizes networking events and connects members with alumni and professionals from various fields." },
  { question: "How can I contact DaSA's executive board?", answer: "You can email the executive board or contact us via our social media channels. Or check the about page on this site." },
  { question: "How can I update my membership information?", answer: "Log into your member profile on the DaSA website to update your information, or reach out to the admin if you need help." },
  { question: "Can members promote their businesses through DaSA?", answer: "Yes, we support member businesses. You can showcase your business on the DaSA Market center." },
  { question: "What is the Down Boys group in DaSA?", answer: "Down Boys is a purpose-driven group within DaSA made up of members who believe in turning humble beginnings into powerful futures. They focus on ambition, self-discipline, and supporting one another on the path to personal and academic success." },
];

// --- Custom Accordion Item Component ---
function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <motion.div 
      layout
      className={`border-b transition-colors duration-300 ${
        isOpen ? "border-dasalight" : "border-[#33312e]/10 dark:border-[#fef4e9]/10"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${
          isOpen ? "text-zinc-900" : "text-[#33312e] dark:text-[#fef4e9] group-hover:text-zinc-900"
        }`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${
            isOpen ? "border-dasalight text-dasalight" : "border-[#33312e]/20 text-[#33312e] dark:border-[#fef4e9]/20 dark:text-[#fef4e9]"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#33312e]/70 dark:text-[#fef4e9]/70 font-poppins text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Main List Component ---
function AccordionList() {
  const [searchQuery, setSearchQuery] = useState("");
  // FIX: Track the actual question string, not the array index
  const [openQuestion, setOpenQuestion] = useState(null);

  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FIX: Compare and set based on the question string
  const handleToggle = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="w-full bg-[#fef4e9] dark:bg-[#1a1917] py-20 md:py-32 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#33312e] dark:text-[#fef4e9] mb-6 font-rethink"
          >
            Frequently Asked <span className="text-dasalight">Questions</span>.
          </motion.h2>
          
          {/* Search Input */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-xl mx-auto mt-8"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#33312e]/40 dark:text-[#fef4e9]/40" />
            </div>
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-[#33312e]/20 dark:border-[#fef4e9]/20 text-[#33312e] dark:text-[#fef4e9] placeholder:text-[#33312e]/40 dark:placeholder:text-[#fef4e9]/40 focus:border-dasalight focus:outline-none transition-colors font-poppins"
            />
          </motion.div>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem 
                    faq={faq} 
                    // FIX: Pass down boolean based on question match
                    isOpen={openQuestion === faq.question} 
                    onClick={() => handleToggle(faq.question)} 
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-[#33312e]/60 dark:text-[#fef4e9]/60 font-poppins">
                  No results found for "{searchQuery}".
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default AccordionList;