# Fonts

## License

While this web app is open source, the fonts are not:

- Silka
- Silka Mono
- Salomé

To purchase these fonts, visit the [atipo foundry](https://www.atipofoundry.com/).

## Folder structure

<!-- tree.nathanfriend.io -->

```
.
└── image2svg-client/
    └── public/
        └── static/
            └── fonts/
                └── atipo-font-collection/
                    ├── Silka
                    ├── Silka-Mono
                    └── Salome (no é)
```

## Usage

The `key` prop prevents duplicate code from being generated in the head if the component is included more than once.

```tsx
import Head from "next/head";
import { SilkaBold } from "../fonts";

export default function Page() {
  return (
    <div>
      <Head>
        <SilkaBold key="SilkaBold" />
      </Head>
    </div>
  );
}
```

## Notes

- Guide
  - https://kirazhang.com/posts/nextjs-custom-fonts
  - https://github.com/emotion-js/emotion/issues/2154#issuecomment-737482603
- Unicode file name 404
  - https://stackoverflow.com/q/59621144
  - rename Salomé to Salome, will not work in production
- .vercelignore fails to !ignore folders
  - must delete folders from `atipo-font-collection` instead
- Styled JSX to fix mismatch error
  - https://www.reddit.com/r/webdev/comments/fcff1s/reactnextjs_text_content_did_not_match/
  - https://nextjs.org/blog/styling-next-with-styled-jsx#adding-global-styles
