declare global {
  namespace JSX {
    interface IntrinsicElements {
      shadow: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
