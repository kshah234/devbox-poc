# 🚀 Devbox Environment Setup

This project uses [Jetify Devbox](https://www.jetify.com/devbox) to configure a consistent, reproducible, and portable development environment across all platforms.

---

## ✅ Prerequisites

- [Devbox](https://www.jetify.com/devbox) installed

---

## 📦 Packages Included

| Tool              | Version  | Description                                         |
|-------------------|----------|-----------------------------------------------------|
| `go`              | 1.24.1   | Go programming language                            |
| `golangci-lint`   | 2.0.0    | Aggregated linter for Go                           |
| `goreleaser`      | 2.8.1    | Release automation for Go projects                 |
| `terraform`       | 1.11.3   | Infrastructure-as-code tool                        |
| `terraform-docs`  | 0.19.0   | Generate docs from Terraform modules               |
| `pre-commit`      | 4.0.1    | Git hook manager to run checks before commits      |

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
