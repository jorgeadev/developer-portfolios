# Developer Portfolios

A curated collection of open-source developer portfolio templates built with modern web technologies. Choose a template, customize it with your own data, and deploy your professional portfolio in minutes.

---

## Table of Contents :scroll:

- [Portfolios](#portfolios-bookmark)
- [Getting Started](#getting-started-dart)
- [Contributing](#contributing-handshake)
- [Security](#security-lock)
- [License](#license-page_with_curl)

---

## Portfolios :bookmark:

### 1. [developer-portfolio](./developer-portfolio)

A professional, fully-featured portfolio template with contact form support, reCAPTCHA protection, and dev.to blog integration.

| Property         | Details                                                             |
| :--------------- | :------------------------------------------------------------------ |
| **Framework**    | Next.js 16 + React 19                                               |
| **Styling**      | Tailwind CSS 4                                                      |
| **Key Features** | Hero, About, Experience, Skills, Projects, Education, Blog, Contact |
| **Email**        | EmailJS (200 free emails/month)                                     |
| **Security**     | Google reCAPTCHA on contact form                                    |
| **README**       | [View →](./developer-portfolio/README.md)                           |

---

### 2. [developer-portfolio-2](./developer-portfolio-2)

A React-based portfolio template offering **8 color themes** (Green, Black/White, Blue, Red, Orange, Purple, Pink, Yellow), each with light and dark mode variants.

| Property         | Details                                                    |
| :--------------- | :--------------------------------------------------------- |
| **Framework**    | React 19                                                   |
| **Styling**      | Material-UI v4 + Tailwind CSS                              |
| **Key Features** | Home, About, Resume, Services, Testimonials, Blog, Contact |
| **Themes**       | 8 themes × 2 modes (light/dark) = 16 variants              |
| **Contact Form** | SheetDB API (Google Sheets integration)                    |
| **README**       | [View →](./developer-portfolio-2/README.md)                |

---

### 3. [github-portfolio](./github-portfolio)

A Next.js portfolio that **automatically fetches and displays your GitHub profile data** using the GitHub API, with optional dev.to blog integration.

| Property         | Details                                                            |
| :--------------- | :----------------------------------------------------------------- |
| **Framework**    | Next.js 15 + React 19                                              |
| **Styling**      | Tailwind CSS 4                                                     |
| **Key Features** | GitHub profile, repositories, contributions calendar, dev.to blogs |
| **Data Source**  | GitHub API (no manual data entry needed)                           |
| **README**       | [View →](./github-portfolio/README.md)                             |

---

### 4. [Tedydev-Portfolio](./Tedydev-Portfolio)

A Next.js portfolio with smooth animations, a marquee ticker, Lottie animations, and an integrated email contact form.

| Property         | Details                                                   |
| :--------------- | :-------------------------------------------------------- |
| **Framework**    | Next.js 15 + React 19                                     |
| **Styling**      | Tailwind CSS + SASS                                       |
| **Key Features** | Lottie animations, marquee, email contact, resume section |
| **Email**        | EmailJS                                                   |
| **Animations**   | Lottie, WowJS, Animate.css                                |
| **README**       | [View →](./Tedydev-Portfolio/README.md)                   |

---

### 5. [vivekneupane-portfolio](./vivekneupane-portfolio)

A Next.js portfolio template featuring a YouTube integration alongside the standard email contact form and smooth animations.

| Property         | Details                                                 |
| :--------------- | :------------------------------------------------------ |
| **Framework**    | Next.js 16 + React                                      |
| **Styling**      | Tailwind CSS + SASS                                     |
| **Key Features** | Hero, About, Skills, Projects, Contact, YouTube section |
| **Email**        | EmailJS                                                 |
| **Special**      | YouTube video integration                               |
| **README**       | [View →](./vivekneupane-portfolio/README.md)            |

---

## Getting Started :dart:

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)

Verify your versions:

```bash
node --version
git --version
```

### Quick Start

1. **Fork** this repository by clicking the **Fork** button at the top right of the page.

2. **Clone** your fork:

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolios.git
cd developer-portfolios
```

3. **Navigate** into the portfolio template you want to use:

```bash
# Example — use the developer-portfolio template
cd developer-portfolio
```

4. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

5. **Configure environment variables** — copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

6. **Customize your data** — update the data files (usually in `utils/data/` or `src/data/`) with your personal information.

7. **Start the development server**:

```bash
npm run dev
# or
yarn dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Tip:** Each portfolio has its own detailed README with specific setup and customization instructions. Refer to the individual README linked in the table above.

---

## Contributing :handshake:

Contributions are welcome! If you would like to add a new portfolio template or improve an existing one, please:

1. Fork the repository
2. Create a new branch for your changes
3. Follow the existing code style and conventions
4. Open a pull request with a clear description of your changes

---

## Security :lock:

This repository has been security-audited. Please review [SECURITY.md](./SECURITY.md) for:

- Audit results for each portfolio
- Security best practices (environment variables, input sanitization, CAPTCHA)
- A checklist to follow before deploying your portfolio

**Never commit your `.env` file or any API keys to source control.**

---

## License :page_with_curl:

This project is released under the [CC0 1.0 Universal](./LICENSE) license — it is dedicated to the public domain. You are free to use, modify, and distribute any template in this collection for any purpose, including commercial use, without restriction.
