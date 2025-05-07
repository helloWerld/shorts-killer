# Shorts Killer

A Chrome extension to help you avoid the endless scroll of short-form content. When you click on a short-form video (like YouTube Shorts, Instagram Reels, etc.), the extension redirects you to a more productive destination.

## Features

- 🎯 **Multi-Platform Support**

  - YouTube Shorts
  - Facebook Reels
  - Instagram Shorts
  - TikTok
  - Twitter/X
  - Snapchat Spotlight
  - LinkedIn Feed
  - Pinterest Idea Pins
  - Reddit Shorts

- ⚙️ **Customizable Settings**

  - Enable/disable blocking for specific platforms
  - Set your own custom redirect URL
  - Return to previous page with one click

- 🎨 **Modern UI**
  - Clean, minimalist design
  - Dark mode interface
  - Smooth animations
  - Intuitive settings panel

## Installation

1. Clone this repository or download the ZIP file

```bash
git clone https://github.com/hellowerld/shorts-killer.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

## Usage

1. **Enable/Disable Platforms**

   - Click the extension icon
   - Go to Settings (⚙️)
   - Toggle platforms on/off as needed

2. **Custom Redirect**

   - Enter your preferred redirect URL in settings
   - Test the URL before saving
   - Default redirect: Rick Astley's "Never Gonna Give You Up" 😉

3. **Return to Previous Page**
   - After being redirected, click "Go back to the last site"
   - Returns you to the page you were on before the short-form content

## Development

The extension is built with vanilla JavaScript and uses Chrome's Extension APIs. Key files:

- `manifest.json` - Extension configuration
- `background.js` - Core redirect logic
- `popup.js` - Extension popup functionality
- `settings.js` - Settings management
- `styles.css` - Unified styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Privacy

This extension:

- Does not collect any user data
- Does not track browsing history
- Only accesses URLs to check for short-form content
- Stores settings locally in Chrome storage

## License

MIT License - feel free to modify and use as needed!

## Credits

- Design inspiration from modern UI trends
- Color scheme: Cyan (#0ff1ce) and Deep Teal (#025b4e)
- Icons and assets from [source]

## Roadmap

- [ ] Block screen with countdown timer
- [ ] Time-based blocking (work hours only)
- [ ] Location-based blocking
- [ ] Usage statistics dashboard
- [ ] Export/import settings
- [ ] Cross-browser support

## Support

Found a bug or have a feature request? [Open an issue](https://github.com/username/shorts-killer/issues)
