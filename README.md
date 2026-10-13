# RR Premium Living

Responsive marketing and information website for RR Premium Living, a PG and
co-living brand serving students and working professionals in Hyderabad and
Bangalore.

## Website features

- Home page with property highlights, accommodation options, amenities, food,
  house rules, and an application form.
- Locations directory with filters for men's spaces, women's spaces, and
  co-living properties.
- Individual property pages with photos, amenities, nearby places, resident
  testimonials, and food information.
- Online booking preference form with a review step.
- Booking-process guide and static booking policies.
- Property-specific contact information, FAQs, and app-download information.
- Responsive navigation, animated page sections, smooth scrolling, and toast
  notifications.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home page |
| `/locations` | Property directory and space filters |
| `/locations/rr-gachibowli` | RR Gachibowli Heights property details |
| `/locations/rr-madhapur` | RR Madhapur Living property details |
| `/locations/rr-whitefield` | RR Whitefield House property details |
| `/booking/online` | Online booking preferences and review |
| `/booking/process` | Booking steps |
| `/booking/policies` | Booking guidelines and policies |
| `/contact` | Property admissions contacts and resident grievance form |
| `/faqs` | Frequently asked questions |
| `/app-download` | iOS and Android app information |

The home page uses hash links for its sections, including `/#spaces`,
`/#amenities`, `/#food`, `/#rules`, and `/#apply`.

## Forms and integrations

- **Home page application form:** validates the mobile number and opens WhatsApp
  with the application details pre-filled. The visitor must send the message in
  WhatsApp to deliver it to the admissions team.
- **Online booking:** collects preferences and displays a review/confirmation
  screen in the browser. It currently does not send or persist booking data.
- **Resident grievance form:** currently displays an in-page confirmation only;
  it is not connected to an email service or backend.
- **App downloads:** store links are not configured yet; the page is marked
  “Coming soon.”

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
- npm (included with Node.js), or Corepack/Yarn

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

Or use the committed Yarn lockfile:

```bash
corepack enable
yarn install
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
    AppDownloadPage.jsx        App download information
    ApplyForm.jsx              Home page application form
    BookingPage.jsx            Booking, process, and policies pages
    ContactPage.jsx            Admissions contacts and grievance form
    FaqsPage.jsx               FAQ page
    Food.jsx                   Home page food section
    Footer.jsx                 Site footer
    Header.jsx                 Main navigation
    Hero.jsx                   Home page hero
    LocationDetailPage.jsx     Individual property details
    Locations.jsx              Home page location highlights
    LocationsPage.jsx          Property directory and filters
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

The repository includes a Vercel configuration. Vercel installs dependencies
with `npm install`, runs `npm run build`, and serves the generated `dist/`
directory.

## VS Code Bedrock task

The repository also includes a VS Code task for calling the configured Amazon
Bedrock inference profile. AWS credentials are not stored in the repository.
To use it:

1. Install and authenticate the AWS CLI:

   ```powershell
   aws configure
   aws sts get-caller-identity
   ```

2. Ensure the authenticated AWS identity can call `bedrock:Converse` in
   `ap-south-1`.
3. In VS Code, select **Terminal > Run Task > Bedrock: Converse with Claude
   Opus 5.5** and enter a prompt.

The response appears in the task terminal. This task does not change the model
used by GitHub Copilot Chat.

## Contributing

1. Create a feature branch.
2. Install dependencies.
3. Make the change and run `npm run build`.
4. Check the result with `npm run dev`.
5. Do not commit `node_modules/`, credentials, or other secrets.
6. Open a pull request with a clear description.

## License

No license has been specified yet.
