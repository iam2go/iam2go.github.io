import React from "react"
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `ko` })
  setPreBodyComponents([
    React.createElement("script", {
      key: "darkmode",
      dangerouslySetInnerHTML: {
        __html: `(function() { 
            window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                    window.__theme = newTheme;
                    preferredTheme = newTheme;
                    document.body.className = newTheme;
                    window.__onThemeChange(newTheme);
                }

                let preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));

    })();`,
      },
    }),
  ])
}
