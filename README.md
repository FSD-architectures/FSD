# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


mudular-structure-v2/
├── 📄 package.json          # إعدادات المشروع والمكتبات
├── 📄 package-lock.json      
├── 📄 bun.lock               # ملف قفل الإصدارات الخاص بـ Bun
├── 📄 vite.config.ts         # إعدادات Vite (المشغل)
├── 📄 tsconfig.json          # إعدادات TypeScript الرئيسية
├── 📄 index.html             # نقطة الدخول لملف الـ HTML
├── 📄 components.json        # إعدادات مخصصة (غالباً لـ shadcn/ui)
├── 📄 eslint.config.js       # إعدادات أداة فحص الكود ESLint
├── 📁 public/                # الملفات العامة والموارد الثابتة ( كالصور والأيقونات)
└── 📁 src/                   # المجلد الرئيسي للكود المصدري
    ├── 📄 main.tsx           # نقطة الدخول الرئيسية لـ React (Entry Point)
    │
    ├── 📁 app/               # طبقة التطبيق (App Layer) الإعدادات العامة للمشروع
    │   ├── 📄 App.tsx
    │   ├── 📁 providers/     # مزودي الخدمات (مثل Context Providers و Axios interceptors)
    │   ├── 📁 routing/       # إعدادات مسارات التطبيق (Auth و Dashboard) و الـ Guards
    │   └── 📁 styles/        # ملفات التصميم الأساسية (index.css)
    │
    ├── 📁 pages/             # طبقة الصفحات (Pages Layer): التجميع النهائي للمكونات
    │   ├── 📁 authentication/# صفحات تسجيل الدخول والتحقق
    │   │   ├── 📄 login.tsx
    │   │   ├── 📄 email-checker.tsx
    │   │   ├── 📄 otp-chercker.tsx
    │   │   └── 📄 new-password.tsx
    │   └── 📁 dashboard/     # صفحات لوحة التحكم (الدخل، والمستخدمين...)
    │
    ├── 📁 widgets/           # طبقة الكتل المستقلة المجمعة (Widgets Layer)
    │   ├── 📄 dashboard-header.tsx
    │   ├── 📄 sidebar.tsx
    │   └── 📄 index.ts
    │
    ├── 📁 features/          # طبقة الميزات (Features Layer): العمليات المنطقية للمستخدم
    │   ├── 📁 authentication/
    │   └── 📁 dashboard/
    │
    ├── 📁 entities/          # طبقة الكيانات (Entities Layer): البيانات الخاصة بكيانات العمليات
    │   ├── 📁 income/        # قسم المداخيل (API، hooks، نماذج)
    │   └── 📁 user/          # قسم المستخدمين (API، hooks، نماذج)
    │
    ├── 📁 shared/            # طبقة العناصر المشتركة (Shared Layer): يمكن استخدامها في أي مكان
    │   ├── 📁 config/        # إعدادات عامة (مثل env.ts)
    │   ├── 📁 lib/           # دوال برمجية مساعدة (مثل utils.ts)
    │   ├── 📁 ui/            # عناصر واجهة المستخدم البسيطة (مثل input, label)
    │   └── 📁 types/         # الأنواع والإسنادات (Types) لـ TypeScript
    │
    └── 📁 assets/            # الملحقات الثابتة داخل مصدر الكود كالأيقونات والخطوط المحلية
