import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // 진입 파일
  output: [
    {
      file: 'dist/index.cjs.js', // CommonJS 번들 파일
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // ESM 번들 파일
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Node.js 모듈 해석
    commonjs(), // CommonJS -> ESM 변환
    typescript({
      tsconfig: './tsconfig.json',
    }), // TypeScript 지원
  ],
  external: ['react', 'react-dom'], // 번들에서 제외할 외부 의존성
};