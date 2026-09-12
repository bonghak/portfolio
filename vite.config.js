import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages base path 설정
 *
 * 1. 프로젝트 페이지 (https://<username>.github.io/<repo>/) 로 배포하는 경우
 *    → .env.production 의 VITE_BASE_PATH 를 '/<repo>/' 로 설정하세요.
 *    → 또는 빌드 시 직접 지정: VITE_BASE_PATH=/my-repo/ npm run build
 *
 * 2. 사용자 페이지 (https://<username>.github.io/) 또는 커스텀 도메인인 경우
 *    → VITE_BASE_PATH 를 '/' 로 두거나 비워두면 됩니다.
 *
 * 개발 서버(npm run dev)에서는 항상 '/' 를 사용합니다.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = mode === 'production' ? env.VITE_BASE_PATH || '/' : '/'
  return {
    base,
    plugins: [react()],
  }
})
