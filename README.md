# remix-defer

## Get Start

```bash
$ pnpm install
$ pnpm run dev
```

## 复现步骤

-   访问 http://localhost:3000/streaming-ssr-route1-one-api-call 即可看到控制台报错
-   修改`app/root.tsx`文件，移除`TUXProvider`，报错消失
