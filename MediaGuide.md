# How to "Upload" Your Content

Since this is a high-performance web portfolio, "uploading" means adding your files to the project folder and updating the registry. Follow these 3 easy steps:

---

### Phase 1: Adding Physical Files
To add a new image (like a new profile photo or brand logo):
1.  **Open the project folder** on your computer.
2.  Navigate to: `c:/Users/shwet/OneDrive/Desktop/insta/public/assets/`
3.  **Copy and paste** your new image into this `assets` folder.
    *   *Tip: Use simple names like `my_photo.jpg` or `nike_logo.png`.*

---

### Phase 2: Updating the Registry
Now that your file is in the folder, you need to tell the website to show it.
1.  Open the file: `src/constants/assets.js`
2.  Find the `INFLUENCER_DATA` section.
3.  **For Images**: Change the path to match your new file:
    ```javascript
    headshot: "/assets/my_photo.jpg",
    ```
4.  **For Reels (Videos)**: Paste your Instagram Reel link directly:
    ```javascript
    {
      id: 3,
      title: 'New Collaboration',
      brand: 'Gucci',
      views: '20k',
      likes: '1.2k',
      link: 'PASTE_YOUR_REEL_LINK_HERE'
    }
    ```

---

### Phase 3: Updating Stats & Socials
In the same `assets.js` file, you can update your follower count, views, or social media handles.
*   **Followers**: Update `followers: "120k+"`
*   **Email**: Update `email: "your-new-email@gmail.com"`

---

**✨ PRO TIP**: After you save the `assets.js` file, the website will update **instantly** without you having to re-design any sections!
