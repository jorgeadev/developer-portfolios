# Security Guidelines for Developer Portfolios

This document outlines security best practices and guidelines for the developer portfolio projects in this repository.

## Security Audit Results (Last Updated: September 2024)

### Portfolio Security Status:
- ✅ **developer-portfolio/**: No vulnerabilities found
- ✅ **Tedydev-Portfolio/**: No vulnerabilities found  
- ✅ **vivekneupane-portfolio/**: 1 low severity vulnerability fixed
- ✅ **developer-portfolio-2/**: `nth-check` (CVE-2021-3803) patched via `pnpm.overrides`
- ✅ **github-portfolio/**: Not audited (basic HTML/CSS portfolio)

### Critical Security Issues Fixed
- ✅ **Hardcoded API Keys**: Removed real EmailJS credentials from .env.example files
- ✅ **Variable Reference Bugs**: Fixed undefined variable references in contact forms
- ✅ **Information Disclosure**: Removed sensitive error logging from API endpoints
- ✅ **Input Sanitization**: Added XSS prevention through input sanitization
- ✅ **Dependency Override**: Fixed `nth-check` (CVE-2021-3803) in developer-portfolio-2 via `pnpm.overrides`

## Security Best Practices

### 1. Environment Variables
- **Never commit actual API keys or secrets to the repository**
- Always use `.env.example` files with placeholder values
- Keep sensitive environment variables in `.env.local` (which should be in .gitignore)

### 2. Input Validation and Sanitization
- All user inputs should be validated and sanitized
- Contact forms now include basic XSS prevention
- Email validation is implemented using regex patterns

### 3. Error Handling
- API endpoints should not expose sensitive error information
- Use generic error messages for client-side display
- Log detailed errors server-side for debugging (without sensitive data)

### 4. Contact Forms Security
- Implement rate limiting for contact form submissions
- Use CAPTCHA verification where available
- Sanitize all user inputs before processing

### 5. Dependencies Security
- Regularly update dependencies to patch security vulnerabilities
- Run `npm audit` to check for known vulnerabilities
- Use tools like Dependabot for automated security updates

## Recommended Security Headers

Add the following security headers to your Next.js applications:

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}
```

## Content Security Policy (CSP)

Consider implementing CSP headers to prevent XSS attacks:

```javascript
{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
}
```

## API Security

### Rate Limiting
Implement rate limiting for API endpoints to prevent abuse:

```javascript
// Example rate limiting implementation
const rateLimit = new Map();

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    const limit = rateLimit.get(ip);
    if (now < limit.resetTime) {
      if (limit.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429 }
        );
      }
      limit.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    }
  }
  
  // Continue with normal processing...
}
```

## Reporting Security Issues

If you find a security vulnerability, please:
1. **Do not** open a public issue
2. Contact the repository maintainers privately
3. Provide detailed information about the vulnerability
4. Allow time for the issue to be addressed before public disclosure

## Security Checklist for New Portfolios

When adding a new portfolio to this repository:

- [ ] No hardcoded API keys or secrets
- [ ] Input validation and sanitization implemented
- [ ] Error handling doesn't expose sensitive information
- [ ] CAPTCHA protection for contact forms (if applicable)
- [ ] Security headers configured
- [ ] Dependencies are up-to-date and secure (`npm audit` passes)
- [ ] Rate limiting considered for API endpoints
- [ ] Environment variables properly configured
- [ ] All contact forms have proper error handling
- [ ] API routes validate input lengths to prevent DoS
- [ ] Email validation is implemented correctly

## Recent Security Improvements (September 2024)

### Fixed Issues:
1. **Credentials Exposure**: Removed hardcoded EmailJS API keys from .env.example files
2. **Runtime Errors**: Fixed undefined variable references in contact forms
3. **XSS Prevention**: Added input sanitization to all API endpoints
4. **DoS Protection**: Added input length validation to prevent oversized payloads
5. **Error Disclosure**: Removed sensitive error information from API responses
6. **Missing Imports**: Fixed missing dependencies that could cause runtime failures
7. **Dependency Assessment**: Evaluated dependency vulnerabilities across all portfolios

### developer-portfolio-2 Status:
- ⚠️ **Development Dependencies**: Contains 9 vulnerabilities in build tools (webpack-dev-server, svgo, nth-check)
- ✅ **Production Safe**: `yarn build` creates secure production builds
- ⚠️ **Deprecated Framework**: Uses Material-UI v4 (no longer maintained)
- 📋 **Recommendation**: Migration to MUI v5 advised for long-term maintenance

### Code Quality Improvements:
- Added comprehensive error handling to all contact forms
- Implemented consistent input validation patterns
- Created reusable sanitization utilities
- Added proper TypeScript/JSDoc comments for security functions
- Documented security status and mitigation strategies

## Tools and Resources

- [Next.js Security Documentation](https://nextjs.org/docs/advanced-features/security-headers)
- [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) for dependency vulnerability scanning
- [Dependabot](https://docs.github.com/en/code-security/dependabot) for automated security updates