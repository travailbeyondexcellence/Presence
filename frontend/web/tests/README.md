# Testing Documentation

This document provides an overview of the testing setup for the Presence web application.

## Testing Stack

We use a comprehensive testing approach with three different testing tools:

1. **Vitest** - Unit testing for utility functions and business logic
2. **React Testing Library (RTL)** - Integration testing for React components
3. **Playwright** - End-to-end (E2E) testing for complete user flows

## Directory Structure

```
tests/
├── unit/              # Unit tests (Vitest)
│   └── theme-utils.test.ts
├── integration/       # Component integration tests (RTL + Vitest)
│   └── ThemeSelector.test.tsx
└── e2e/              # End-to-end tests (Playwright)
    ├── home.spec.ts
    └── screenshots/  # E2E test screenshots (gitignored)
```

## Running Tests

### Unit & Integration Tests (Vitest + RTL)

```bash
# Run all unit and integration tests
bun run test

# Run tests in watch mode (re-runs on file changes)
bun run test:watch

# Run tests with UI (visual test runner)
bun run test:ui

# Run tests with coverage report
bun run test:coverage
```

> **Important:** Use `bun run test` (not `bun test`) to ensure the npm script is used.

### End-to-End Tests (Playwright)

```bash
# First time setup - install Playwright browsers
bun run playwright:install

# Run E2E tests (headless mode)
bun run test:e2e

# Run E2E tests with UI mode (interactive)
bun run test:e2e:ui

# Run E2E tests with visible browser (headed mode)
bun run test:e2e:headed

# Run E2E tests in debug mode (step-by-step debugging)
bun run test:e2e:debug
```

### Run All Tests

```bash
# Run all unit, integration, and E2E tests
bun run test && bun run test:e2e
```

## Test Types Explained

### 1. Unit Tests (`tests/unit/`)

**Purpose:** Test individual functions and utilities in isolation.

**Example:** `theme-utils.test.ts`

Unit tests focus on:
- Testing pure functions
- Testing utility functions
- Testing business logic
- Fast execution
- No external dependencies

**When to write unit tests:**
- For utility functions (e.g., data transformations, calculations)
- For business logic that doesn't depend on React
- For functions that can be tested in isolation

### 2. Integration Tests (`tests/integration/`)

**Purpose:** Test React components with their dependencies.

**Example:** `ThemeSelector.test.tsx`

Integration tests focus on:
- Component rendering
- User interactions (clicks, typing, etc.)
- Component state changes
- Interaction with hooks and context
- Mocking external dependencies

**When to write integration tests:**
- For React components
- For testing user interactions
- For testing component behavior with state/props
- For testing integration with hooks and context

**Key RTL concepts:**
- `render()` - Renders a component
- `screen` - Queries for elements
- `fireEvent` - Triggers events
- `userEvent` - Simulates real user interactions
- `waitFor` - Waits for async operations
- Queries: `getBy*`, `queryBy*`, `findBy*`

### 3. End-to-End Tests (`tests/e2e/`)

**Purpose:** Test complete user flows in a real browser.

**Example:** `home.spec.ts`

E2E tests focus on:
- Full user journeys
- Cross-page navigation
- Real browser behavior
- Visual regression testing
- Performance testing

**When to write E2E tests:**
- For critical user flows (login, checkout, etc.)
- For testing full features end-to-end
- For cross-page interactions
- For visual regression testing
- For testing in real browsers

**Key Playwright concepts:**
- `test()` - Defines a test
- `page` - Represents a browser page
- `locator()` - Finds elements on the page
- `expect()` - Makes assertions
- `page.goto()` - Navigates to a URL
- `page.click()`, `page.fill()`, etc. - User interactions

## Example Tests

### Unit Test Example (Vitest)

```typescript
import { describe, it, expect } from 'vitest';
import { getAllThemes } from '@/lib/theme-utils';

describe('getAllThemes', () => {
  it('should return an array of themes', () => {
    const themes = getAllThemes();
    expect(Array.isArray(themes)).toBe(true);
    expect(themes.length).toBeGreaterThan(0);
  });
});
```

### Integration Test Example (RTL)

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSelector from '@/components/ThemeSelector';

test('should open dropdown when button is clicked', async () => {
  render(<ThemeSelector />);

  const button = screen.getByRole('button', { name: /change theme/i });
  await userEvent.click(button);

  expect(screen.getByText('Choose Theme')).toBeInTheDocument();
});
```

### E2E Test Example (Playwright)

```typescript
import { test, expect } from '@playwright/test';

test('should change theme', async ({ page }) => {
  await page.goto('/');

  await page.click('button[aria-label="Change theme"]');
  await expect(page.getByText('Choose Theme')).toBeVisible();

  await page.click('text=Midnight');
  await expect(page.getByText('Choose Theme')).not.toBeVisible();
});
```

## Best Practices

### General

1. **Write tests that mirror user behavior** - Test what users see and do, not implementation details
2. **Keep tests simple and focused** - Each test should verify one specific behavior
3. **Use descriptive test names** - Test names should clearly describe what is being tested
4. **Avoid testing implementation details** - Test the public API, not internal state
5. **Mock external dependencies** - Keep tests fast and reliable by mocking APIs, databases, etc.

### Unit Tests

- Test pure functions and utilities
- Mock external dependencies
- Keep tests fast (< 1ms per test)
- Test edge cases and error conditions

### Integration Tests

- Test components from the user's perspective
- Use semantic queries (`getByRole`, `getByLabelText`) over test IDs
- Prefer `userEvent` over `fireEvent` for more realistic interactions
- Mock heavy dependencies (APIs, large libraries)
- Test accessibility features

### E2E Tests

- Test critical user flows only (E2E tests are slow)
- Use page objects for complex interactions
- Take screenshots on failure for debugging
- Test on multiple browsers (Chromium, Firefox, WebKit)
- Use `waitFor` patterns to handle async operations
- Set up proper test data (fixtures)

## Test Coverage Goals

- **Unit Tests:** 80%+ coverage for utility functions
- **Integration Tests:** 70%+ coverage for components
- **E2E Tests:** Cover all critical user flows

## Continuous Integration (CI)

Tests should run automatically on:
- Every commit (unit + integration tests)
- Every pull request (all tests)
- Before deployment (all tests)

## Debugging Tests

### Vitest

```bash
# Run tests in watch mode with UI
bun run test:ui

# Run specific test file
bun run test theme-utils

# Run with debugger
bun --inspect-brk run test
```

### React Testing Library

```typescript
// Add debug statements in tests
import { render, screen } from '@testing-library/react';

render(<MyComponent />);
screen.debug(); // Prints the DOM tree
```

### Playwright

```bash
# Run in debug mode (step-by-step)
bun run test:e2e:debug

# View test results in HTML report
bunx playwright show-report

# View trace for failed tests
bunx playwright show-trace trace.zip
```

## Common Patterns

### Mocking in Vitest

```typescript
import { vi } from 'vitest';

// Mock a module
vi.mock('@/lib/api', () => ({
  fetchUser: vi.fn(() => Promise.resolve({ id: 1, name: 'Test' }))
}));

// Mock a function
const mockFn = vi.fn();
mockFn.mockReturnValue('mocked value');
```

### Testing Async Components (RTL)

```typescript
import { render, screen, waitFor } from '@testing-library/react';

test('loads data', async () => {
  render(<AsyncComponent />);

  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

### Playwright Locators

```typescript
// By role (preferred)
await page.getByRole('button', { name: 'Submit' });

// By text
await page.getByText('Hello World');

// By test ID (use sparingly)
await page.getByTestId('submit-btn');

// By CSS selector
await page.locator('button.primary');
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Contributing

When adding new features:
1. Write unit tests for utility functions
2. Write integration tests for new components
3. Add E2E tests for critical user flows
4. Ensure all tests pass before submitting PR
5. Aim for > 80% test coverage

## Questions?

If you have questions about testing, please:
1. Check this documentation
2. Review existing test examples
3. Ask in the development team chat
4. Consult the official documentation links above
