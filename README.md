# Tu'do Sanctuary Builder

# Website Generation Prompt — Tu'do Restaurant

Copy everything below into Lovable / v0 / Bolt / similar AI website builder.

---

Build a modern, production-ready restaurant website for **"Tu'do Restaurant"** (styled tụ'do — Vietnamese for "freedom"), a pan-Asian fusion restaurant and café in Banani, Dhaka, Bangladesh.

## Brand identity
- **Concept**: "A curation of timeless classics from across East & South-East Asia, located in a peaceful sanctuary where food, art and nature meet."
- **Vibe**: calm, upscale, garden-sanctuary feel — not loud or flashy. Think warm wood tones, deep greens, soft natural light, editorial photography, generous whitespace.
- **Tone of voice**: quiet confidence, sensory, understated luxury — avoid generic "best food in town" clichés.

## Tech & structure
- Stack: React + Tailwind CSS (or the builder's default modern stack), fully responsive, mobile-first.
- Smooth scroll, subtle fade/slide-in animations on scroll (nothing gimmicky).
- Fast-loading, clean semantic HTML, accessible (proper alt text, contrast, focus states).
- Sticky/minimal navbar that becomes solid on scroll.

## Pages / sections

1. **Home**
   - Full-viewport hero with a high-quality food/interior image, restaurant name, one-line concept tagline, and two CTAs: "Reserve a Table" and "View Menu"
   - Short "Our Story" section (freedom/tụ'do meaning, East & South-East Asian influence, art + nature + food philosophy)
   - Signature dishes carousel/grid (image + name + short description)
   - Ambience/gallery teaser (3–4 photos linking to full gallery)
   - Hours & location strip (Restaurant vs Café hours shown separately)
   - Instagram feed teaser / social proof
   - Footer with contact, socials, map embed

2. **Menu**
   - Tabbed or segmented layout: **Food Menu**, **Cafe Menu**, **Drink Menu** (three separate menus, matching the real restaurant's structure)
   - Categorized dish listings (Starters, Mains, Noodles/Rice, Desserts, etc.) with name, short description, price
   - Option to mark chef's specials / spicy / vegetarian with subtle icons
   - Downloadable PDF menu button (optional)

3. **Reservations**
   - Clean reservation form: name, phone, email, date, time, party size, special requests
   - Show restaurant vs café operating hours clearly
   - Confirmation state/message after submit (placeholder logic is fine)
   - Contact phone number prominently displayed as an alternative to booking

4. **Gallery**
   - Masonry or grid layout of food, interior, and ambience photography
   - Lightbox on click

5. **About / Concept**
   - Deeper storytelling: the meaning of "tụ'do," design philosophy (art + nature + food), chef/kitchen philosophy if applicable

6. **Contact**
   - Address: House 59, Road 7, Block F, Banani, Dhaka 1213
   - Phone: +880 1329-673193
   - Embedded Google Map
   - Social links (Instagram, Facebook)
   - Restaurant hours: 5:00 PM – 11:30 PM
   - Café hours: 12:00 PM – 10:30 PM

## Design system
- **Colors**: deep charcoal/forest green + warm neutral (cream/sand) + one accent (muted gold or terracotta) — avoid bright primary colors
- **Typography**: elegant serif for headings (e.g., Playfair Display / Fraunces), clean sans-serif for body (e.g., Inter / Manrope)
- **Imagery**: large, high-quality, moody food and interior photography as the visual anchor throughout — use placeholder images with realistic restaurant/food content until real photos are supplied
- **Buttons/CTAs**: minimal, rounded or sharp per a cohesive style, consistent hover states

## Functionality requirements
- Responsive navbar with mobile hamburger menu
- Reservation form with client-side validation
- Menu tabs/filtering (Food / Cafe / Drinks)
- Image gallery with lightbox
- Footer with quick links, hours, socials, and map
- SEO-friendly meta tags (title, description) per page
- Smooth section anchors from the navbar (Home, Menu, Reservations, Gallery, About, Contact)

## What to avoid
- Generic stock "restaurant template" clichés (red/yellow color schemes, cursive script overload, cluttered layouts)
- Overly busy animations or auto-playing video/audio
- Placeholder Lorem Ipsum — use realistic restaurant copy instead

---

**Restaurant details to use throughout the site:**
- Name: Tu'do Restaurant
- Address: House 59, Road 7, Block F, Banani, Dhaka 1213, Bangladesh
- Phone: +880 1329-673193
- Restaurant hours: 5:00 PM – 11:30 PM
- Café hours: 12:00 PM – 10:30 PM
- Instagram: @tudo_restaurantdhk
- Cuisine: Pan-Asian (East & South-East Asian) fusion


website url https://tudodhaka.com

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tudodhaka.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cfd25150-17ce-4d4c-8a93-e34fe790c200).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
