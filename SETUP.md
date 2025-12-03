# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Images**
   
   You need to copy all images from the original Portfolio folder to the React project:
   
   **Windows PowerShell:**
   ```powershell
   # From the "ad portfolio" directory
   Copy-Item "Portfolio\assets\img\*" "portfolio-react\public\assets\img\" -Recurse
   Copy-Item "Portfolio\my pics\ayushPaspot.jpg" "portfolio-react\public\assets\img\ayushPaspot.jpg"
   ```
   
   **Manual Method:**
   - Copy all files from `Portfolio/assets/img/` to `portfolio-react/public/assets/img/`
   - Copy `Portfolio/my pics/ayushPaspot.jpg` to `portfolio-react/public/assets/img/ayushPaspot.jpg`

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   - Navigate to http://localhost:3000

## Image Files Required

Make sure these images are in `portfolio-react/public/assets/img/`:

- `ayushPaspot.jpg` (profile picture)
- `myHomePic.jpg` (hero background)
- `ayush.details.jpg` (about section)
- `image.png` (Glow-Mart project)
- `portfoliomy.png` (Portfolio project)
- `astropush.png` (Astropush project)
- `Trello-1024x730.png`
- `gitHub.jpg`
- `jira.png`
- `slack.png`
- `skype-logo.width-250.jpg`
- `vs code.jpeg`
- `uraan.jpeg`
- `ncs.webp`

## Troubleshooting

### Images Not Showing
- Make sure all images are copied to `public/assets/img/`
- Check browser console for 404 errors
- Verify image paths in components match file names

### Dependencies Issues
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### Port Already in Use
- Change port: `PORT=3001 npm start`
- Or kill the process using port 3000

## Next Steps

After setup:
1. Customize content in component files
2. Update contact form to use real backend
3. Deploy to hosting service (Vercel, Netlify, etc.)

