import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSelector from '@/components/ThemeSelector';
import * as useThemeHook from '@/hooks/useTheme';
import * as themeUtils from '@/lib/theme-utils';

/**
 * Example Integration Tests using React Testing Library (RTL)
 *
 * This file demonstrates how to write integration tests for React components.
 * Integration tests verify that components work correctly with their dependencies.
 *
 * Run these tests with: npm run test
 *
 * Key RTL concepts demonstrated:
 * - render(): Renders a React component
 * - screen: Queries for elements in the rendered component
 * - fireEvent: Triggers events on elements
 * - userEvent: Simulates real user interactions (more realistic than fireEvent)
 * - waitFor: Waits for async operations to complete
 * - vi.mock(): Mocks external dependencies
 */

// Mock the useTheme hook
vi.mock('@/hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    button: ({ children, onClick, className, ...props }: any) => (
      <button onClick={onClick} className={className} {...props}>
        {children}
      </button>
    ),
    div: ({ children, onClick, className, ...props }: any) => (
      <div onClick={onClick} className={className} {...props}>
        {children}
      </div>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('ThemeSelector Component', () => {
  const mockChangeTheme = vi.fn();
  const mockThemes = [
    {
      key: 'emerald',
      name: '🌿 Emerald',
      description: 'Fresh and vibrant green',
      backgroundColor: '#eafff2',
      primaryColor: '#059669',
    },
    {
      key: 'midnight',
      name: '🌙 Midnight',
      description: 'Deep blue night',
      backgroundColor: '#0f1729',
      primaryColor: '#3b82f6',
    },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Mock the useTheme hook to return controlled values
    (useThemeHook.useTheme as any).mockReturnValue({
      currentTheme: 'emerald' as any,
      changeTheme: mockChangeTheme,
      isLoading: false,
    });

    // Mock getAllThemes
    vi.spyOn(themeUtils, 'getAllThemes').mockReturnValue(mockThemes);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the theme selector button', () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    expect(button).toBeInTheDocument();
  });

  it('should open dropdown when button is clicked', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });
  });

  it('should display all available themes in the dropdown', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      mockThemes.forEach(theme => {
        expect(screen.getByText(theme.name)).toBeInTheDocument();
        expect(screen.getByText(theme.description)).toBeInTheDocument();
      });
    });
  });

  it('should call changeTheme when a theme is selected', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });

    // Click on the midnight theme
    const midnightTheme = screen.getByText('🌙 Midnight');
    await userEvent.click(midnightTheme);

    expect(mockChangeTheme).toHaveBeenCalledWith('midnight');
  });

  it('should close dropdown after selecting a theme', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });

    const emeraldTheme = screen.getByText('🌿 Emerald');
    await userEvent.click(emeraldTheme);

    await waitFor(() => {
      expect(screen.queryByText('Choose Theme')).not.toBeInTheDocument();
    });
  });

  it('should close dropdown when clicking outside', async () => {
    render(
      <div>
        <ThemeSelector />
        <div data-testid="outside">Outside element</div>
      </div>
    );

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });

    // Click outside
    const outsideElement = screen.getByTestId('outside');
    fireEvent.mouseDown(outsideElement);

    await waitFor(() => {
      expect(screen.queryByText('Choose Theme')).not.toBeInTheDocument();
    });
  });

  it('should close dropdown when ESC key is pressed', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });

    // Press ESC key
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Choose Theme')).not.toBeInTheDocument();
    });
  });

  it('should highlight the currently selected theme', async () => {
    render(<ThemeSelector />);

    const button = screen.getByRole('button', { name: /change theme/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Choose Theme')).toBeInTheDocument();
    });

    // The emerald theme should have a checkmark SVG indicating it's selected
    const emeraldThemeButton = screen.getByText('🌿 Emerald').closest('button');
    expect(emeraldThemeButton).toBeInTheDocument();

    // Check that the selected theme has a checkmark SVG
    const svgElement = emeraldThemeButton?.querySelector('svg path[d="M5 13l4 4L19 7"]');
    expect(svgElement).toBeInTheDocument();
  });
});
