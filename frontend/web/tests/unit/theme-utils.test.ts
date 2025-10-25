import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAllThemes } from '@/lib/theme-utils';

/**
 * Example Unit Tests using Vitest
 *
 * This file demonstrates how to write unit tests for utility functions.
 * Unit tests focus on testing individual functions in isolation.
 *
 * Run these tests with: npm run test
 */

describe('theme-utils', () => {
  describe('getAllThemes', () => {
    it('should return an array of themes', () => {
      const themes = getAllThemes();

      expect(Array.isArray(themes)).toBe(true);
      expect(themes.length).toBeGreaterThan(0);
    });

    it('should return themes with required properties', () => {
      const themes = getAllThemes();

      themes.forEach(theme => {
        expect(theme).toHaveProperty('key');
        expect(theme).toHaveProperty('name');
        expect(theme).toHaveProperty('description');
        expect(theme).toHaveProperty('backgroundColor');
        expect(theme).toHaveProperty('primaryColor');

        // Verify data types
        expect(typeof theme.key).toBe('string');
        expect(typeof theme.name).toBe('string');
        expect(typeof theme.description).toBe('string');
        expect(typeof theme.backgroundColor).toBe('string');
        expect(typeof theme.primaryColor).toBe('string');
      });
    });

    it('should return themes with valid color codes', () => {
      const themes = getAllThemes();
      const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

      themes.forEach(theme => {
        expect(theme.backgroundColor).toMatch(hexColorRegex);
        expect(theme.primaryColor).toMatch(hexColorRegex);
      });
    });

    it('should include emerald theme by default', () => {
      const themes = getAllThemes();
      const emeraldTheme = themes.find(theme => theme.key === 'emerald');

      expect(emeraldTheme).toBeDefined();
      expect(emeraldTheme?.name).toBeTruthy();
    });

    it('should return themes in a consistent order', () => {
      const themes1 = getAllThemes();
      const themes2 = getAllThemes();

      expect(themes1.map(t => t.key)).toEqual(themes2.map(t => t.key));
    });
  });
});
