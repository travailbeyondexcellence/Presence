# Testing with Bun - Quick Guide

## ✅ All Setup Complete!

The testing infrastructure is fully configured to work with **Bun**. All tests are passing! 🎉

## 🚀 Running Tests

### Unit & Integration Tests (Vitest + React Testing Library)

```bash
# Run all tests once
bun run test

# Watch mode (automatically re-run on changes)
bun run test:watch

# Visual UI mode
bun run test:ui

# Generate coverage report
bun run test:coverage
```

> **Important:** Always use `bun run test` (not `bun test`). The `run` keyword ensures it uses the npm script which properly invokes Vitest.

### End-to-End Tests (Playwright)

```bash
# First time setup - install browsers (only once)
bun run playwright:install

# Run E2E tests
bun run test:e2e

# Run with UI mode (interactive)
bun run test:e2e:ui

# Run with visible browser
bun run test:e2e:headed

# Debug mode (step-by-step)
bun run test:e2e:debug
```

## 📊 Current Test Status

**All tests passing!**

```
✓ tests/unit/theme-utils.test.ts (5 tests)
✓ tests/integration/ThemeSelector.test.tsx (8 tests)

Test Files  2 passed (2)
Tests       13 passed (13)
```

## 🎯 Quick Start for New Developers

1. **Install Playwright browsers** (first time only):
   ```bash
   bun run playwright:install
   ```

2. **Run tests in watch mode while developing**:
   ```bash
   bun run test:watch
   ```

3. **Before committing code**:
   ```bash
   bun run test && bun run test:e2e
   ```

## 📁 Test Structure

```
tests/
├── unit/                         # Vitest unit tests
│   └── theme-utils.test.ts       # Example: utility function tests
├── integration/                  # React Testing Library tests
│   └── ThemeSelector.test.tsx    # Example: component tests
└── e2e/                          # Playwright E2E tests
    ├── home.spec.ts              # Example: full user flow tests
    └── screenshots/              # Test screenshots (auto-generated)
```

## 💡 Important Notes for Bun Users

### Why `bunx --bun vitest`?

The test scripts use `bunx --bun vitest` instead of just `bun test` because:

1. **Bun has a built-in test runner** that conflicts with Vitest
2. `bunx --bun vitest` ensures we use **Vitest** with proper configuration
3. This gives us access to Vitest features like:
   - jsdom environment for React component testing
   - Coverage reports
   - UI mode
   - Better React Testing Library integration

### Script Explanation

```json
{
  "test": "bunx --bun vitest run",        // ✓ Uses Vitest with bun
  "test:e2e": "bunx playwright test"      // ✓ Uses Playwright
}
```

## 📚 Writing Tests

### Unit Test Example

```typescript
// tests/unit/my-utility.test.ts
import { describe, it, expect } from 'vitest';
import { myFunction } from '@/lib/my-utility';

describe('myFunction', () => {
  it('should return correct value', () => {
    expect(myFunction(5)).toBe(10);
  });
});
```

### Component Test Example

```typescript
// tests/integration/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '@/components/MyComponent';

test('should handle click', async () => {
  render(<MyComponent />);

  const button = screen.getByRole('button', { name: /click me/i });
  await userEvent.click(button);

  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```

### E2E Test Example

```typescript
// tests/e2e/my-flow.spec.ts
import { test, expect } from '@playwright/test';

test('user can complete flow', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Start');
  await expect(page.getByText('Success')).toBeVisible();
});
```

## 🎨 Theme-Aware Scrollbar

The custom scrollbar automatically adapts to the current theme:

```css
/* Already applied to html and body elements */
.custom-scrollbar {
  /* Uses theme CSS variables */
  scrollbar-color: rgb(var(--primary) / 0.5) rgb(var(--muted) / 0.3);
}
```

## 📦 Installed Packages

### State Management & Validation
- ✅ **zod** (v4.1.12) - Schema validation for forms
- ✅ **zustand** (v5.0.8) - Lightweight state management

### Testing
- ✅ **vitest** (v4.0.3) - Fast unit testing
- ✅ **@testing-library/react** (v16.3.0) - Component testing
- ✅ **@testing-library/jest-dom** (v6.9.1) - Custom matchers
- ✅ **@testing-library/user-event** (v14.6.1) - User interactions
- ✅ **@playwright/test** (v1.56.1) - E2E testing
- ✅ **jsdom** (v27.0.1) - DOM environment

## 🔧 Troubleshooting

### Tests not running?

Make sure you're using the correct command:
```bash
# ✓ Correct
bun run test

# ✗ Wrong (uses bun's built-in test runner, not Vitest)
bun test
```

### Playwright browsers not installed?

Run the installation command:
```bash
bun run playwright:install
```

### Need to see what's happening in tests?

Use headed mode or debug mode:
```bash
bun run test:e2e:headed    # See the browser
bun run test:e2e:debug     # Step-by-step debugging
```

## 🎉 You're Ready!

The testing infrastructure is fully set up and working with Bun. Start writing tests and happy coding! 🚀

---

For more detailed documentation, see:
- `tests/README.md` - Comprehensive testing guide
- `TESTING_SETUP_SUMMARY.md` - Complete setup details
