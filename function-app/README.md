# 🚀 Devbox Environment Setup

This project uses [Jetify Devbox](https://www.jetify.com/devbox) to configure a consistent, reproducible, and portable development environment across all platforms.

---

## ✅ Prerequisites

- [Devbox](https://www.jetify.com/devbox) installed

---

## 📦 Packages Included

| Tool                          | Version | Description                                |
|-------------------------------|---------|--------------------------------------------|
| `colima`                      | 0.8.1   | Lightweight Docker runtime for macOS/Linux |
| `docker`                      | 27.5.1  | Container platform                         |
| `docker-compose`              | 2.34.0  | Multi-container orchestration              |
| `python`                      | 3.13.2  | Python programming language                |
| `nodejs`                      | 23.10.0 | JavaScript runtime                         |
| `ruff`                        | 0.11.2  | Fast Python linter                         |
| `pre-commit`                  | 4.0.1   | Git hook manager                           |
| `azure-functions-core-tools`  | 4.x     | CLI for Azure Functions development        |   

---

## Getting Started with Devbox

### 1. Initialize Devbox (if not already)

To create a new `devbox.json` in your project:

```bash
devbox init
```

### 2. Start the Devbox Shell

```bash
devbox shell
```

This launches your isolated environment with all tools ready.
You'll see this on shell start:

```css
Welcome to Devbox
```

It will also run:

```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

to install Azure Functions Core Tools globally inside the shell.

### Add a Tool

```bash
devbox add <package>@<version>
```

### Remove a Tool

```bash
devbox rm <package>
```
