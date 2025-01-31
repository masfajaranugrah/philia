import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../ui/accordion"


const According = () => {
  return (
    <div className=" mt-20 relative ">
                <div className="container mx-auto relative z-10 xl:pb-[50rem] md:pb-[30rem]  pb-[30rem] lg:pb-[50rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[1rem]">

        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>

  
    <div className="absolute -bottom-1 w-full ">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full "
        />
      </div>

    </div>
  )
}

export default According