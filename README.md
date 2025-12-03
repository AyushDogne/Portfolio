# Portfolio React - Aayush Dogne

This is the React.js version of the portfolio website for Aayush Dogne, a Full Stack MERN Developer.

## Features

- ✅ Fully converted from HTML to React.js
- ✅ All sections: Hero, About, Skills, Portfolio, Resume, Contact
- ✅ Responsive design with Bootstrap
- ✅ Smooth animations with AOS (Animate On Scroll)
- ✅ Interactive portfolio filtering with Isotope
- ✅ Swiper carousels for testimonials
- ✅ Typed.js for animated text
- ✅ Contact form with React state management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Production Build

To create a production build:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy

You can deploy the build folder to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Project Structure

```
portfolio-react/
├── public/
│   ├── assets/
│   │   └── img/          # All images go here
│   └── index.html
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css   # Main stylesheet
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Portfolio.js
│   │   ├── Resume.js
│   │   ├── Contact.js
│   │   ├── Testimonials.js
│   │   ├── ScrollTop.js
│   │   └── Preloader.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Setting Up Images

1. Copy all images from the original `Portfolio/assets/img/` folder to `portfolio-react/public/assets/img/`
2. Copy the profile image from `Portfolio/my pics/ayushPaspot.jpg` to `portfolio-react/public/assets/img/ayushPaspot.jpg`

You can do this manually or use the following command (from the project root):

```bash
# Windows PowerShell
Copy-Item "Portfolio\assets\img\*" "portfolio-react\public\assets\img\" -Recurse
Copy-Item "Portfolio\my pics\ayushPaspot.jpg" "portfolio-react\public\assets\img\ayushPaspot.jpg"
```

## Customization

### Updating Content

- Edit the component files in `src/components/` to update content
- Each section is a separate component for easy maintenance

### Styling

- Main styles are in `src/assets/css/main.css`
- CSS variables are defined at the top for easy theme customization

### Contact Form

The contact form currently uses a simulated submission. To connect it to a real backend:

1. Update `src/components/Contact.js`
2. Replace the setTimeout with an actual API call
3. You can use services like:
   - Formspree
   - EmailJS
   - Your own backend API

## Technologies Used

- React 18
- Bootstrap 5
- AOS (Animate On Scroll)
- Swiper
- Isotope Layout
- Typed.js
- Bootstrap Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is based on the iPortfolio template from BootstrapMade.

## Contact

For questions or issues, contact:
- Email: ayushdogne2002@gmail.com
- Phone: +91 7489048015

