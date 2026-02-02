import { BlogPost } from "./types";

export const offensiveSecurityPosts: BlogPost[] = [
 {
    slug: "sql-injection-basics",
    title: "SQL Injection Basics: A Hands-On Guide",
    date: "2025-01-20",
    category: "Offensive Security",
    categorySlug: "offensive-security",
    tags: ["web-security", "sql-injection", "owasp"],
    excerpt: "Learn the fundamentals of SQL injection attacks, how they work, and how to identify vulnerable applications.",
    readingTime: "8 min read",
    content: `
# SQL Injection Basics: A Hands-On Guide

SQL Injection (SQLi) remains one of the most critical web application vulnerabilities. In this post, we'll explore the fundamentals.

## What is SQL Injection?

SQL Injection is a code injection technique that exploits vulnerabilities in an application's database layer. It occurs when user input is incorrectly filtered or not strongly typed.

## Types of SQL Injection

### 1. In-band SQLi (Classic)

The most common type where the attacker uses the same communication channel to launch the attack and gather results.

\`\`\`sql
' OR '1'='1' --
\`\`\`

### 2. Blind SQLi

When an application is vulnerable but results are not visible to the attacker.

\`\`\`sql
' AND SLEEP(5) --
\`\`\`

### 3. Out-of-band SQLi

Uses different channels for attack and response, typically DNS or HTTP requests.

## Prevention

Always use parameterized queries:

\`\`\`python
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
\`\`\`

## Conclusion

Understanding SQL injection is fundamental for both offensive and defensive security. Always validate and sanitize user inputs.
    `,
  },
   {
    slug: "xss-attack-prevention",
    title: "Cross-Site Scripting (XSS): Attack Vectors and Prevention",
    date: "2026-01-18",
    category: "Offensive Security",
    categorySlug: "offensive-security",
    tags: ["xss", "web-security", "javascript"],
    excerpt: "Deep dive into XSS vulnerabilities, different types of attacks, and effective prevention strategies.",
    readingTime: "11 min read",
    content: `
# Cross-Site Scripting (XSS)

XSS attacks inject malicious scripts into trusted websites.

## Types of XSS

### Reflected XSS

\`\`\`html
<script>alert('XSS')</script>
\`\`\`

### Stored XSS

Malicious script is permanently stored on the target server.

### DOM-based XSS

Vulnerability exists in client-side code rather than server-side.

## Prevention

1. **Input Validation**: Sanitize all user inputs
2. **Output Encoding**: Encode data before rendering
3. **Content Security Policy**: Implement strict CSP headers

\`\`\`javascript
// Safe output encoding
const safeOutput = DOMPurify.sanitize(userInput);
\`\`\`
    `,
  },
];
