# Advance-Guide website: https://r1sque.github.io/Advance-Guide/

This project was developed as a community-driven initiative to assist users in troubleshooting issues they may encounter while using the software. 
The website was inspired by [LyrdMods](https://lyrdmods.site/), a great creator who built a guide website for Stand in GTA V.
The website is built using HTML, Tailwind CSS, and JavaScript.

## Project Structure

```
Advance-Guide
├── index.html                   # Entry point HTML for the website.
├── guides
│   ├── index.html               # Entry point HTML for the guides section.
│   │
│   ├── tutorial
│   │   └── index.html           # Entry point HTML for the tutorial section.
│   │
│   ├── troubleshooting
│   │   ├── index.html           # Entry point HTML for the troubleshooting section.
│   │   ├── ERROR-1-KML1
│   │   │   └── index.html       # HTML for the ERROR-1-KML1 troubleshooting guide.
│   │   ├── ERROR-1-KML4
│   │   │   └── index.html       # HTML for the ERROR-1-KML4 troubleshooting guide.
│   │   ├── Injection-Softlock
│   │   │   └── index.html       # HTML for the Injection-Softlock troubleshooting guide.
│   │   ├── Functionalities
│   │   │   └── index.html       # HTML for the Functionalities troubleshooting guide.
│   │   └──Miscellaneous
│   │       └── index.html       # HTML for the Miscellaneous troubleshooting guide.
│   │   
│   └── tools
│       └── index.html           # Entry point HTML for the tools section.
│
├── credits
│   └── index.html               # HTML for the credits section.
│
├── src
│   ├── input.css                # Tailwind CSS source file (custom styles).
│   └── output.css               # Compiled CSS file for styling the app.
│
├── package.json                 # npm configuration file containing dependencies and scripts.
└── README.md                    # Project documentation, including setup instructions and features.
```

## ToDo:

- [x] Main design
- [x] Add Tailwind CSS for styling
- [x] Make the other pages
- [x] Fixe page links
- [ ] Make search input work
- [ ] Add previous and next button to all the guide page for easier navigation
- [ ] Add phone support

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/r1sque/Advance-Guide.git
   ```

2. Navigate to the project directory:
   ```
   cd Advance-Guide
   ```

3. Install the dependencies:
   ```
   npm i tailwindcss @tailwindcss/cli
   ```

4. Run the application:
   ```
   npm run build:css
   ```