# 🚀 No_Gas_Labs™ Matrix - Quick Reference

## Essential URLs

- **Live Site:** https://no-gas-labs-official.github.io/nogas-matrix-2026
- **Repository:** https://github.com/No-Gas-Labs-Official/nogas-matrix-2026
- **Actions:** https://github.com/No-Gas-Labs-Official/nogas-matrix-2026/actions
- **Issues:** https://github.com/No-Gas-Labs-Official/nogas-matrix-2026/issues

---

## Common Tasks

### Update App List

1. Edit `index.html` (find the `apps` object in the JavaScript section)
2. Add or modify app entries in the appropriate category
3. Commit changes:
   ```bash
   git add index.html
   git commit -m "feat: Add [AppName]"
   git push origin main
   ```
4. GitHub Actions will auto-deploy in ~60 seconds

### Accept Submissions

1. Review the issue in GitHub Issues
2. Verify the app is gasless and operates on Base/Farcaster
3. Add the app to `index.html` in the appropriate category
4. Close the issue with a comment linking to the commit
5. Apply the "new-app" label if approved

### Regenerate Service Worker Cache

1. Edit `sw.js` and update the `CACHE_NAME` constant:
   ```javascript
   const CACHE_NAME = 'ngl-matrix-v2026-scout-XX'; // Increment version
   ```
2. Commit and push:
   ```bash
   git add sw.js
   git commit -m "chore: Bump cache version"
   git push origin main
   ```
3. Clear cache in browser DevTools if needed

### Emergency Rollback

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to previous commit (use with caution)
git reset --hard HEAD~1
git push -f origin main
```

---

## Monitoring

### Check Deployment Status

1. Go to: https://github.com/No-Gas-Labs-Official/nogas-matrix-2026/actions
2. Look for the "Deploy to GitHub Pages" workflow
3. Green checkmark = successful deployment
4. Red X = deployment failed (check logs)

### Test Site Functionality

1. **Basic Access:** Visit the live site URL
2. **PWA Test:** Open Chrome DevTools → Application
   - Verify service worker registered
   - Check manifest loads
   - Test "Install app" prompt
3. **Frame Test:** Use [Frame Validator](https://warpcast.com/~/developers/frames)
4. **Offline Test:** Enable offline mode in DevTools
5. **Progress Test:** Mark an app as visited, refresh page, verify persistence

---

## Troubleshooting

### Site Not Loading

1. Check GitHub Actions workflow for errors
2. Verify repository is public
3. Clear browser cache
4. Try accessing via different browser

### Service Worker Not Updating

1. Force refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Unregister service worker in DevTools
3. Increment CACHE_VERSION in sw.js
4. Clear site data in browser settings

### Frame Not Rendering in Farcaster

1. Verify all meta tags are present and correct
2. Check image URL is accessible and valid
3. Use Frame Validator tool
4. Ensure URLs use HTTPS

### Progress Not Saving

1. Check if localStorage is enabled in browser
2. Verify browser is not in private/incognito mode
3. Check browser console for errors

---

## Development

### Local Development

```bash
# Clone repository
git clone https://github.com/No-Gas-Labs-Official/nogas-matrix-2026.git
cd nogas-matrix-2026

# Start local server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

---

## Contact & Support

### For Technical Issues
- **GitHub Issues:** https://github.com/No-Gas-Labs-Official/nogas-matrix-2026/issues

### For Community Engagement
- **Twitter:** [@NoGasLabs](https://twitter.com/NoGasLabs)
- **Farcaster:** [@nogaslabs](https://warpcast.com/nogaslabs)

---

**#00ff99 | The Neon Pulse awaits**

*Built with ❤️ for the gasless future*