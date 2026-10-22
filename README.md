# RR Premium Living

Responsive marketing and information website for RR Premium Living, a PG and
co-living community serving students and working professionals.

## Website features

- Home page with property highlights, accommodation options, amenities, food,
  house rules, and an application form.
- Living options directory with filters for men's spaces, women's spaces, and
  co-living properties.
- Individual property pages with photos, amenities, nearby places, resident
  testimonials, and food information.
- Online booking preference form with a review step.
- Booking-process guide and static booking policies.
- Property-specific contact information and FAQs.
- Footer with clickable admissions phone and email links.
- Responsive navigation, animated page sections, smooth scrolling, and toast
  notifications.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home page |
| `/locations` | Living options and space filters for one PG |
| `/locations/rr-mens` | Men's living details at the PG |
| `/locations/rr-womens` | Women's living details at the PG |
| `/locations/rr-coliving` | Co-living details at the PG |
| `/booking/online` | Online booking preferences and review |
| `/booking/process` | Booking steps |
| `/booking/policies` | Booking guidelines and policies |
| `/contact` | Admissions contacts and resident grievance form |
| `/faqs` | Frequently asked questions |

The home page uses hash links for its sections, including `/#spaces`,
`/#amenities`, `/#food`, `/#rules`, and `/#apply`.

## Forms and integrations

- **Home page application form:** validates the mobile number and opens WhatsApp
  with the application details pre-filled. The visitor must send the message in
  WhatsApp to deliver it to the admissions team. The form clears after WhatsApp
  opens successfully; the site cannot verify whether the message was sent.
- **Online booking:** collects preferences and displays a review/confirmation
  screen in the browser. Past move-in dates are not accepted. It currently does
  not send or persist booking data.
- **Resident grievance form:** currently displays an in-page confirmation only;
  it is not connected to an email service or backend.

There is no application server or database configured in this project.

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 3
- Framer Motion
- React Fast Marquee
- Lenis smooth scrolling
- Phosphor Icons
- Sonner notifications

## Requirements

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)

## Getting started

Clone the repository:

```bash
git clone https://github.com/leelakalyan-kk/RR-premium-living.git
cd RR-premium-living
```

Install dependencies with npm:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in a browser. Vite
refreshes the page when source files change.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

The project does not currently define a test or lint script.

## Project structure

```text
public/                       Static images and other public assets
src/
  components/
    Amenitied.jsx              Home page amenities section
    ApplyForm.jsx              Home page application form
    BookingPage.jsx            Booking, process, and policies pages
    ContactPage.jsx            Admissions contacts and grievance form
    FaqsPage.jsx               FAQ page
    Food.jsx                   Home page food section
    Footer.jsx                 Site footer
    Header.jsx                 Main navigation
    Hero.jsx                   Home page hero
    LocationDetailPage.jsx     Individual property details
    Locations.jsx              Shared PG overview
    LocationsPage.jsx          Living options and filters
    Marquee.jsx                Home page editorial marquee
    Rules.jsx                  Home page house rules
    SectionHead.jsx            Shared section headings and captions
    Spaces.jsx                 Home page accommodation cards
  constants/
    site.js                    Navigation, images, property and menu content
  App.css                      Application-specific styles
  App.jsx                      Page selection and shared app behavior
  index.css                    Global styles and Tailwind directives
  main.jsx                     React entry point
index.html                     Vite HTML entry point
vite.config.js                 Vite configuration and `@` source alias
tailwind.config.js             Tailwind CSS configuration
postcss.config.js              PostCSS configuration
vercel.json                    Vercel build and output settings
```

Most site text, property details, navigation links, and remote image URLs are
configured in `src/constants/site.js`. Locally supplied static images are kept
in `public/` and referenced from the relevant component or content entry.

## Deployment

The repository includes configuration for Vercel and Render. Both platforms
install dependencies, run `npm run build`, and serve the generated `dist/`
directory. Connect the GitHub repository to either platform to deploy it.

## Contributing

1. Create a feature branch.
2. Install dependencies.
3. Make the change and run `npm run build`.
4. Check the result with `npm run dev`.
5. Do not commit `node_modules/`, credentials, or other secrets.
6. Open a pull request with a clear description.

## License

No license has been specified yet.
