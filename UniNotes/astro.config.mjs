import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時，請將 site 改為 https://<帳號>.github.io，
// base 改為 /<儲存庫名稱>（若使用自訂網域或 <帳號>.github.io 儲存庫，base 請設為 '/'）。
export default defineConfig({
  site: 'https://example.github.io',
  base: '/UniNotes',
});
