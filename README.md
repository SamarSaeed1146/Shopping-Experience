## Wix

```
npm i @tanstack/react-query @wix/sdk @wix/ecom @wix/media @wix/members @wix/redirects @wix/reviews @wix/stores date-fns js-cookie ky next-themes react-medium-image-zoom @t3-oss/env-nextjs --legacy-peer-deps --no-optional
```

## Wix devDependencies

```
npm i -D @tailwindcss/typography @tanstack/react-query-devtools @tanstack/eslint-plugin-query @types/js-cookie prettier eslint-config-prettier prettier-plugin-tailwindcss --legacy-peer-deps
```

### Note

```
--legacy-peer-deps
```

#### This is just for Next js 15 release command if you are using relese version of Next js use it, Otherwise don't use it.

## Shadcn UI Installation After Above Steps:

```
npx shadcn@latest init
```

```
npx shadcn@latest init -d

```

```
npx shadcn@latest add accordion button checkbox dialog dropdown-menu form input label navigation-menu pagination select sheet skeleton textarea toast tooltip
```

# Make a file : prettier.config.js

```
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
};
```

## Add this code to eslintrc.json

```
{
  "extends": [
    "next/core-web-vitals",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ]
}
```

# Make a file : {env.ts} file in src folder

```
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_WIX_CLIENT_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_WIX_CLIENT_ID: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
  },
});
```
https://manage.wix.com/dashboard/5cf8344a-0776-4dab-a125-19b385570b90/oauth-apps-settings