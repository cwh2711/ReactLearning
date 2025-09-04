my-app/
├── node_modules/         ← 所有安裝的套件（自動產生）
├── public/               ← 靜態資源（用不多）
├── src/                  ← ✅ 你主要寫程式的地方
│   ├── App.jsx           ← 主元件（你會從這開始寫）
│   └── main.jsx          ← 專案進入點（React 導入）
├── index.html            ← 頁面外殼（根據這裡注入）
├── package.json          ← 套件清單 + 腳本
├── package-lock.json     ← 實際安裝紀錄（鎖定版本）
├── vite.config.js        ← Vite 設定檔（先不改）
