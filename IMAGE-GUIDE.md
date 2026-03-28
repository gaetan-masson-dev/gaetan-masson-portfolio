# Image Guide for Portfolio

## Overview

The home page now displays case study images in an alternating left-right layout. Each case study needs a hero/preview image.

## Required Images

Add these images to display them on the home page:

### 1. Campaigns App

**Path:** `public/images/campaigns-app/campaign-builder.png`

- Best choice: A screenshot of the campaign builder interface
- Recommended size: 1200x900px (4:3 aspect ratio)

### 2. Single Source of Truth

**Path:** `public/images/single-source-of-truth/component-library.png`

- Best choice: A screenshot of the component library or file structure
- Recommended size: 1200x900px (4:3 aspect ratio)

### 3. Suppliers Search Tool

**Path:** `public/images/suppliers-search-tool/search-interface.png`

- Best choice: A screenshot of the search interface
- Recommended size: 1200x900px (4:3 aspect ratio)

### 4. Product Checkout

**Path:** `public/images/product-checkout/checkout-flow.png`

- Best choice: A screenshot of the checkout flow
- Recommended size: 1200x900px (4:3 aspect ratio)

### 5. Settings and Configurations

**Path:** `public/images/settings-configurations/settings-navigation.png`

- Best choice: A screenshot of the settings navigation
- Recommended size: 1200x900px (4:3 aspect ratio)

### 6. Tiers Up and Down

**Path:** `public/images/tiers-up-down/upgrade-flow.png`

- Best choice: A screenshot of the upgrade flow or pricing comparison
- Recommended size: 1200x900px (4:3 aspect ratio)

## Layout Behavior

- **Even-indexed case studies (0, 2, 4):** Image on the right, content on the left
- **Odd-indexed case studies (1, 3, 5):** Image on the left, content on the right
- **Mobile:** Images stack above content on all screens
- **Hover effect:** Images scale slightly (1.05x) on hover

## Image Best Practices

1. **Format:** Use WebP for best performance, PNG/JPG also work
2. **Size:** 1200-1600px wide for hi-DPI displays
3. **Aspect Ratio:** 4:3 (e.g., 1200x900px) works best with the layout
4. **Naming:** Use kebab-case (lowercase with hyphens)
5. **Optimization:** Compress images before adding (Next.js will optimize further)

## Adding Images

### Option 1: Copy Files

```bash
# Example for campaigns-app
cp ~/path/to/your/image.png public/images/campaigns-app/campaign-builder.png
```

### Option 2: Drag and Drop

1. Open `public/images/campaigns-app/` in Finder
2. Drag your image file into the folder
3. Rename it to `campaign-builder.png`

## Testing

After adding images:

1. The dev server will hot-reload automatically
2. Visit http://localhost:3001 to see the changes
3. Images will display in an alternating left-right layout

## If Images Don't Appear

- Check the file path matches exactly (case-sensitive)
- Ensure the file extension is correct (.png, .jpg, .webp)
- Check browser console for any image loading errors
- Refresh the page (Cmd+R / Ctrl+R)
