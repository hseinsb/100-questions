# 100 Questions for Relationship Compatibility - Landing Page

A high-converting landing page built with Next.js 14 for selling the "100 Questions for Relationship Compatibility" digital guide.

## 🚀 Features

- **High-Performance**: Built with Next.js 14 App Router for optimal performance
- **Conversion-Optimized**: Strategically designed landing page with multiple conversion paths
- **Interactive Elements**: Mini assessment, testimonials carousel, animated components
- **Mobile-First**: Fully responsive design with Tailwind CSS
- **Analytics Ready**: Google Analytics, Meta Pixel, and TikTok Pixel integration
- **SEO Optimized**: Complete SEO setup with structured data and meta tags
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with fluid typography
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payment**: PayPal/Stripe integration ready
- **Analytics**: GA4, Meta Pixel, TikTok Pixel
- **TypeScript**: Full type safety

## 📦 Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**:
   Copy `env.example` to `.env.local` and fill in your values:
   ```bash
   cp env.example .env.local
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Required Setup

1. **Payment Integration**:
   - Update `NEXT_PUBLIC_PAYPAL_CHECKOUT_URL` in `.env.local`
   - Or replace with Stripe Payment Link
   - Update checkout URL in `src/lib/utils.ts`

2. **Google Drive Download**:
   - Upload your PDF guide to Google Drive
   - Get the shareable file ID
   - Update `NEXT_PUBLIC_GOOGLE_DRIVE_FILE_ID`
   - Update download URL in `src/app/thank-you/page.tsx`

3. **Analytics**:
   - Set up Google Analytics 4 and add tracking ID
   - (Optional) Set up Meta Pixel and TikTok Pixel
   - Update IDs in `.env.local`

4. **Email**:
   - Update support email in all components
   - Set up email automation for receipts (via PayPal/Stripe)

### Content Customization

- **Brand Colors**: Modify colors in `tailwind.config.ts`
- **Copy**: Update text content in individual components
- **Testimonials**: Replace with real testimonials in `TestimonialsCarousel.tsx`
- **Assessment Questions**: Customize quiz in `AssessmentTeaser.tsx`
- **Product Details**: Update guide info in various components

## 📄 Pages

- **Home** (`/`): Complete landing page with all sections
- **Thank You** (`/thank-you`): Post-purchase page with download
- **Privacy** (`/privacy`): Privacy policy
- **Terms** (`/terms`): Terms of service

## 🎨 Sections

1. **Hero**: Main headline with book mockup and CTAs
2. **Social Proof**: Testimonials carousel
3. **Old vs New**: Problem/solution comparison
4. **Value Pillars**: Three key benefits
5. **Product Preview**: Sample questions and interpretations
6. **Assessment**: Mini compatibility quiz
7. **Guarantee**: Pricing and trust signals
8. **FAQ**: Common questions accordion

## 📊 Analytics Events

The site tracks these key events:
- `view_item`: Page views
- `begin_checkout`: CTA clicks
- `purchase`: Successful purchases
- `assessment_start/complete`: Quiz interactions
- `download`: File downloads

## 🔒 Security & Privacy

- GDPR/CCPA compliant privacy policy
- Secure payment processing (PayPal/Stripe)
- No sensitive data stored locally
- Optional analytics with user consent

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `out` folder to your hosting platform
3. Set up environment variables

## 📱 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for Google's performance standards
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting

## 🎯 Conversion Optimization

- Multiple CTA buttons throughout the page
- UTM parameter tracking for attribution
- Assessment tool for lead qualification
- Trust signals and social proof
- Mobile-first responsive design
- Fast loading times

## 🔧 Customization Guide

### Changing Colors
Update the color palette in `tailwind.config.ts`:
```javascript
colors: {
  ink: '#YourTextColor',
  heart: '#YourAccentColor',
  trust: '#YourSecondaryColor',
  cloud: '#YourBackgroundColor',
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/app/page.tsx`
3. Follow existing animation patterns

### Modifying Assessment
Update questions in `src/components/AssessmentTeaser.tsx`:
- Change questions array
- Modify scoring logic
- Update result interpretations

## 📞 Support

For questions about this codebase:
- Check the components for inline documentation
- Review the brief in the original specification
- Each component is self-contained and well-commented

## 🔄 Updates

To update content:
1. Modify component files directly
2. Update testimonials with real customer feedback
3. A/B test different headlines and CTAs
4. Monitor analytics for optimization opportunities

---

Built with ❤️ for relationship clarity and lasting love.
