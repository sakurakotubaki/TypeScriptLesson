# TypeScriptの環境構築

## Introduction 
- TypeScriptの学習要件
  - ESLintを導入する.
    - コーディングルールの訓練が目的.
  - 簡単な設定でいいので導入する.
    - ;をつけるルールを導入.
    - ""をつけるルールを導入.

1. package.jsonを生成する.
```
npm init -y
```

2. TypeScriptをinstallする.
```
npm install -g typescript
```

3. 雛形を作成する.
```
tsc --init
```

4. TypeScriptをトランスパイルする.
```
tsc
```

5. ESLintの設定を導入
;と""の設定を追加しただけ!
https://zenn.dev/joo_hashi/articles/bc49be646833dc

6. 複数業のエラーを無効化する方法
/* eslint-disable */を追加する。
```ts
/* eslint-disable */
let text:string = "Hi!";
let phone:number = 123456789;
const arr:(string|number)[] = ["Taro", 25];
```
