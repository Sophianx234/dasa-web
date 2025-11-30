import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type accordionBarProps = {
  faqs: faqsType[];
};
export type faqsType = {
  question: string;
  answer: string;
};

function AccordionBar({ faqs }: accordionBarProps) {
  return (
    // ✨ Key Changes:
    // 1. **w-full**: Ensures it takes up 100% width on all screen sizes (default).
    // 2. **max-w-4xl**: Sets a maximum width (e.g., 56rem or 896px) for large screens. You can adjust this (e.g., max-w-5xl, max-w-6xl).
    // 3. **lg:max-w-5xl**: Optionally, increase the max-width even more at the 'large' breakpoint for a better fit on very large screens.
    // 4. **mx-auto**: Centers the container when the max-width is applied.
    // 5. **px-4**: Adds horizontal padding for small screens to prevent content from touching the edges.
    <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-4 pb-24">
      {faqs.map((item) => (
        // The Accordion component itself is now constrained by the parent div's width
        <Accordion key={item.question} type="single" collapsible>
          <AccordionItem value={item.question.slice(0, 20)}> {/* Changed value for unique items */}
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionBar;