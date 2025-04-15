import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './components/Accordion';
import './'

export default function App() {
  return (
    <Accordion allowMultiple={true} >
      <AccordionItem value="item-1" disabled>
        <AccordionTrigger value="item-1">Section 1</AccordionTrigger>
        <AccordionContent value="item-1">Content for section 1</AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">Section 2</AccordionTrigger>
        <AccordionContent value="item-2">Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}