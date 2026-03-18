# Circle Studio

Official promotional website for **Circle Studio** — an independent developer building focused, privacy-first apps.

## Live Site

[chiugastudio.github.io/Circle-Studio](https://chiugastudio.github.io/Circle-Studio/)

## Apps

| App | Description |
|-----|-------------|
| [Barcode Tag & Track](https://chiugastudio.github.io/Record-Your-Love/) | Scan, organize and manage physical items with barcodes. Supports 4 languages. |
| [Did You Smile Today?](https://chiugastudio.github.io/iOS-Did-you-smile-today/) | Daily wellness app with real-time smile detection and a pixel-art aesthetic. |
| [Start Tracking Meals](https://chiugastudio.github.io/Start-Tracking_Meals/) | Nutrition companion with AI food recognition, macro tracking, and water logging. |

## Structure

```
Circle-Studio/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── i18n.js          # EN / 中文 language switcher
    └── images/
        ├── tag-and-track/   # Barcode Tag & Track assets
        ├── smile-today/     # Did You Smile Today assets
        └── tracking-meals/  # Start Tracking Meals assets
```

## Features

- Bilingual — toggle between English and Traditional Chinese (繁體中文)
- Minimal, responsive design
- App screenshots, QR codes, and links to individual app pages
- Language preference persisted via `localStorage`
