# Precondition
- Windows 10Pro - Version 22H2
- NodeJS: v21.5.0
- Playwright@1.43.1
- VS: 1.89.0
# 3 test:
- Homepage display
- Signin
- Signup
# We can not sign in if we don't have an account.
- Run test "Signup" before.
# Guide
- UI mode: npx playwright test --ui
- Headed mode: npx playwright test --headed


