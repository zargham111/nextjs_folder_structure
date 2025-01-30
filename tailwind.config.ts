import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration for Next.js
 * =======================================
 * This configuration is structured to ensure best practices when using Tailwind CSS in a Next.js project.
 * 
 * Key Features:
 * - Uses `satisfies Config` for proper TypeScript type validation.
 * - Defines `content` paths to include all essential folders (`pages`, `components`, `app`).
 * - Implements CSS variables (`var(--background)`, `var(--foreground)`) for easy theme customization.
 * - Provides a clean way to extend the Tailwind theme.
 */

const tailwindConfig = {
  // Define the files Tailwind should scan for class usage (ensures tree-shaking works properly)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Supports Next.js `pages` directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans reusable components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Supports Next.js App Router (`app` directory)
  ],

  theme: {
    extend: {
      // Custom color variables for theming (ensures flexibility in design systems)
      colors: {
        background: "var(--background)", // Uses CSS variable for dynamic theming
        foreground: "var(--foreground)",
      },

      // You can extend font families, spacing, breakpoints, etc., if needed
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: Adding a custom font
      },
    },
  },

  // Tailwind Plugins (Add necessary plugins for additional functionality)
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;

export default tailwindConfig;
