# 🚀 CRUD Signals App

A modern, scalable **Angular 19** application built using **Signals** and deployed on **Vercel**.

---

## 🌐 Live Demo

👉 https://crud-signals.vercel.app

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge\&logo=vercel)](https://crud-signals.vercel.app)

---

## 📌 Overview

This project demonstrates how to build a **high-performance, CRUD Angular application** using:

* ⚡ Angular Signals for reactive state management
* 🔄 CRUD operations with clean state handling
* 🌍 Deployment using Vercel

---

## ✨ Features

* ✅ Create, Read, Update, Delete (CRUD)
* ⚡ Signal-based state management (no RxJS overload)
* 🔁 Reactive forms & dynamic components
* 📦 Optimized production build
* 🌐 Deployed with CI/CD via Vercel
* 📱 Responsive UI

---

## 🛠 Tech Stack

| Technology      | Description                     |
| --------------- | ------------------------------- |
| Angular 19      | Frontend framework              |
| Signals         | Reactive state management       |
| TypeScript      | Strong typing                   |
| Vercel          | Deployment platform             |
| Bootstrap / CSS | UI styling                      |

---

## 📂 Project Structure

```bash
apps/
  └── crud-signals/
  └── core/
       └── constants/
       └── models/
       └── services/
       └── shared/
```

* **apps/** → Main application
* **apps/core/** → Shared modules, UI components, utilities

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shilpaakhilraj-dev/crud-signals.git
cd crud-signals
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Locally

```bash
ng serve
```

App will run at:
👉 http://localhost:4200

---

## 🏗 Build for Production

```bash
ng build --configuration production
```

Output will be generated in:

```bash
dist/crud-signals
```

---

## 🚀 Deployment (Vercel)

This project is deployed using **Vercel**.

### Steps:

1. Connect GitHub repo to Vercel
2. Configure:

   * Build Command: `ng build`
   * Output Directory: `dist/crud-signals`
3. Add `vercel.json`:

```json
{
  "routes": [
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

---

## 🔄 CI/CD

* ✅ Automatic deployment on every Git push
* 🌿 Preview deployments for branches
* 🚀 Production deployment from `main` branch

---

## 📸 Screenshots

LISTING
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ecbe193a-2619-4c71-8925-eb98c8e0bcf5" />

ADD / EDIT
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/69fa24ae-850c-44e0-8cf4-42dc06105672" />

DELETE
<img width="1458" height="42" alt="image" src="https://github.com/user-attachments/assets/e7392839-4a24-4392-84d9-4cd4de699873" />


---

## 🧠 Key Learnings

* Implementing **Signals vs RxJS**
* Managing state in **large-scale Angular apps**
* Handling deployment issues in **Vercel**
* Optimizing performance & bundle size

---

