Hi, I'm Ivan Zulfikar. Please see the deployed app at [https://serene-jalebi-84f68c.netlify.app](https://serene-jalebi-84f68c.netlify.app)

The app is built using React, Vite, and TailwindCSS. Vite for dev environment and build, Tailwind for convenience on padding, margin and normalizer. The rest is just CSS and TypeScript.

I tried to minimalize the rerender so the app only rerender when submit button clicked by using uncontrolled form instead of controlled form.

The only state used is the output of the form.

Actually re-render is not required at all if I just log the result in console instead of  pretty print in DOM. But I kept it printed to make the output more visible for reviewer.
