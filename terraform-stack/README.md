# 🚀 Devbox Environment Setup

This project uses [Jetify Devbox](https://www.jetify.com/devbox) to configure a consistent, reproducible, and portable development environment across all platforms.

---

## ✅ Prerequisites

- [Devbox](https://www.jetify.com/devbox) installed

---

## 📦 Packages Included

| Tool              | Version   | Description                                        |
|-------------------|-----------|----------------------------------------------------|
| `terraform`       | 1.11.3    | Infrastructure-as-Code tool by HashiCorp          |
| `terragrunt`      | 0.76.6    | Terraform wrapper with DRY support                |
| `ansible`         | 2.18.3    | Automation tool for configuration management       |
| `ansible-lint`    | 24.12.2   | Linter for Ansible playbooks                      |
| `kubectl`         | 1.32.3    | Kubernetes CLI tool                               |
| `kubernetes-helm` | 3.17.2    | Helm package manager for Kubernetes               |
| `pre-commit`      | 4.0.1     | Git hook manager to enforce checks pre-commit     |
| `terraform-docs`  | 0.19.0    | Generate documentation from Terraform modules     |

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
