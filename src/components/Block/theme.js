const theme = {
  plain: {
    color: "var(--syntax-plain-text)",
    backgroundColor: "var(--syntax-background)",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "var(--syntax-delete-text)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "var(--syntax-insert-text)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "var(--syntax-comment-text)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "builtin", "char", "constant", "url"],
      style: {
        color: "var(--syntax-string-text)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "var(--syntax-var-text)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "var(--syntax-number-text)",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "var(--syntax-punctuation-text)",
      },
    },
    {
      types: ["function", "selector", "doctype"],
      style: {
        color: "var(--syntax-function-text)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "var(--syntax-class-text)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "var(--syntax-tag-text)",
      },
    },
    {
      types: ["operator", "property", "keyword", "namespace"],
      style: {
        color: "var(--syntax-operator-text)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "var(--syntax-boolean-text)",
      },
    },
  ],
}
export default theme
