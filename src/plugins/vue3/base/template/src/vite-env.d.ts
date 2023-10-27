/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE: string;
  readonly VITE_API_ENV: string;
  readonly VITE_MOCK: boolean;
  readonly VITE_PERMISSION: boolean;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
