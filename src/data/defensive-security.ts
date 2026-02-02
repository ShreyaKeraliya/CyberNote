import { BlogPost } from "./types";

export const defensiveSecurityPosts: BlogPost[] = [
 {
    slug: "incident-response-process",
    title: "Incident Response: A Step-by-Step Framework",
    date: "2026-01-15",
    category: "Defensive Security",
    categorySlug: "defensive-security",
    tags: ["incident-response", "blue-team", "soc"],
    excerpt: "Understanding the incident response lifecycle and building effective response procedures.",
    readingTime: "9 min read",
    content: `
# Incident Response Framework

A structured approach to handling security incidents.

## The 6 Phases

### 1. Preparation
- Develop policies and procedures
- Build your IR team
- Set up tools and communication channels

### 2. Identification
- Detect potential incidents
- Analyze alerts and logs
- Determine scope and impact

### 3. Containment
- Short-term: Isolate affected systems
- Long-term: Apply temporary fixes

### 4. Eradication
- Remove malware
- Patch vulnerabilities
- Reset compromised credentials

### 5. Recovery
- Restore systems from clean backups
- Monitor for re-infection
- Validate system integrity

### 6. Lessons Learned
- Document the incident
- Conduct post-mortem
- Update procedures
    `,
  },
]