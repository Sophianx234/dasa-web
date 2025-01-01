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

function AccordionBar({ faqs }:accordionBarProps) {
  return (
    <div className="max-w-72 mx-auto pb-24">
      {faqs.map((item) => (
        <Accordion key={item.question} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionBar;
