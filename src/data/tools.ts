import { BlogPost } from "./types";

export const toolPosts: BlogPost[] = [
    {
    slug: "nmap-scanning-techniques",
    title: "Mastering Nmap: Essential Scanning Techniques",
    date: "2026-02-01",
    category: "Tools",
    categorySlug: "tools",
    tags: ["nmap", "scanning", "reconnaissance"],
    excerpt: "A comprehensive guide to using Nmap for network reconnaissance and vulnerability scanning.",
    readingTime: "15 min read",
    content: `
# Mastering Nmap: Essential Scanning Techniques

Nmap is the go-to tool for network discovery and security auditing.

## Basic Scans

### TCP SYN Scan (Stealth)

\`\`\`bash
nmap -sS target.com
\`\`\`

### Version Detection

\`\`\`bash
nmap -sV target.com
\`\`\`

### OS Detection

\`\`\`bash
nmap -O target.com
\`\`\`

## Advanced Techniques

### Script Scanning

\`\`\`bash
nmap --script vuln target.com
\`\`\`

### Evading Firewalls

\`\`\`bash
nmap -f -D RND:10 target.com
\`\`\`

## Output Formats

\`\`\`bash
# XML output for parsing
nmap -oX scan.xml target.com

# Grepable output
nmap -oG scan.gnmap target.com
\`\`\`
    `,
  },
]
