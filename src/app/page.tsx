import { Hero } from '@/components/Hero'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { OldNewSection } from '@/components/OldNewSection'
import { ValuePillars } from '@/components/ValuePillars'
import { ProductPreview } from '@/components/ProductPreview'
import { AssessmentTeaser } from '@/components/AssessmentTeaser'
import { GuaranteeBlock } from '@/components/GuaranteeBlock'
import { FAQAccordion } from '@/components/FAQAccordion'

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsCarousel />
      <OldNewSection />
      <ValuePillars />
      <ProductPreview />
      <AssessmentTeaser />
      <GuaranteeBlock />
      <FAQAccordion />
    </>
  )
}
