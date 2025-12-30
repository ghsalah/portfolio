# Troubleshooting Guide

## If the app is not running, try these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Clear Cache and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. Check for TypeScript Errors
```bash
npm run build
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Common Issues:

#### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port.

#### Browser Console Errors
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

#### Missing Dependencies
If you see "Module not found" errors, run:
```bash
npm install
```

### 6. Verify Files Exist
Make sure these files exist:
- `src/utils/animations.ts`
- `src/utils/constants.ts`
- All components in `src/components/`
- All UI components in `src/components/ui/`

### 7. Check Browser Compatibility
Make sure you're using a modern browser (Chrome, Firefox, Edge, Safari)

