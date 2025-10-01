# Mock Data Setup - No MongoDB Required

This project has been modified to work without MongoDB using mock data.

## Changes Made:

1. **Removed MongoDB Dependencies:**
   - `mongodb`
   - `mongoose` 
   - `@next-auth/mongodb-adapter`

2. **Created Mock Data:**
   - `/data/mockData.js` - Contains sample products, categories, users

3. **Updated Files:**
   - `utils/db.js` - Mock database functions
   - `pages/index.tsx` - Uses mock products
   - `pages/api/product/[id].js` - Uses mock data
   - `pages/api/auth/[...nextauth].js` - Removed MongoDB adapter
   - `pages/api/admin/category.js` - Uses mock categories

## To Run:

1. Install dependencies (MongoDB packages removed):
   ```bash
   npm install
   ```

2. Create `.env.local` (optional OAuth):
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_here
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Mock Data Available:

- 2 sample products (Laptop, Nike shoes)
- 3 categories (Electronics, Shoes, Clothing)  
- 1 test user (john@example.com)

The app will load instantly without any database setup!