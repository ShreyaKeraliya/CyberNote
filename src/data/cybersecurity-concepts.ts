import { BlogPost } from "./types";

export const cybersecurityConceptPosts: BlogPost[] = [
  {
    slug: "foundations-of-cybersecurity-security-mindset",
    title: "Foundations of Cybersecurity: Developing a Security Mindset",
    date: "2025-11-20",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["cybersecurity-basics", "cia-triad", "security-mindset"],
    excerpt:
      "An in-depth look at the core purpose of cybersecurity and the security mindset, based on Course 1 of the Google Foundations of Cybersecurity program.",
    readingTime: "11 min read",
    content: `
# Foundations of Cybersecurity: Developing a Security Mindset

This article is based on **Course 1 – Foundations of Cybersecurity** from the Google Foundations of Cybersecurity certificate, which I completed in November 2025.

Rather than focusing on tools, this course emphasizes *how security professionals think*.

---

## What Cybersecurity Really Protects

Cybersecurity exists to protect:
- Data and user privacy
- Business operations
- Trust in digital systems

Security failures often lead to financial loss, reputational damage, and legal consequences.

---

## The CIA Triad as a Decision Framework

The CIA Triad — Confidentiality, Integrity, and Availability — provides a simple way to evaluate security decisions.

- **Confidentiality** ensures only authorized access
- **Integrity** ensures data is accurate and trustworthy
- **Availability** ensures systems remain usable

Real-world systems must balance all three rather than maximizing just one.

---

## Developing a Security Mindset

A key lesson from this course is that cybersecurity is proactive.  
Security professionals constantly ask:
- What could go wrong?
- Who might exploit this?
- What is the impact if this fails?

---

## Key Takeaway

Cybersecurity begins with mindset and risk awareness, not technology.
    `,
  },

  {
    slug: "managing-cybersecurity-risk-google",
    title: "Managing Cybersecurity Risk: Threats, Vulnerabilities, and Impact",
    date: "2025-11-28",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["risk-management", "threats", "vulnerabilities"],
    excerpt:
      "A detailed explanation of how cybersecurity risk is identified and managed, based on Course 2 of the Google Foundations of Cybersecurity program.",
    readingTime: "12 min read",
    content: `
# Managing Cybersecurity Risk: Threats, Vulnerabilities, and Impact

This post is based on **Course 2 – Play It Safe: Manage Security Risks**, completed in mid-November 2025.

The course explains that security decisions are driven by *risk*, not fear.

---

## Understanding Risk in Cybersecurity

Risk is created when:
- A **threat** exists
- A **vulnerability** can be exploited
- The **impact** is significant

Removing any one of these reduces overall risk.

---

## Types of Threats

Threats can come from:
- External attackers
- Insider misuse
- Accidental misconfigurations

Not all threats are malicious, but all can cause damage.

---

## Risk Management Strategies

Organizations manage risk by:
- Reducing vulnerabilities
- Limiting exposure
- Accepting low-impact risks
- Transferring risk (insurance, outsourcing)

---

## Key Takeaway

Effective cybersecurity is about prioritization, not perfection.
    `,
  },

  {
    slug: "network-security-google-foundations",
    title: "Network Security Fundamentals: How Attacks Happen and How Networks Are Defended",
    date: "2025-12-02",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["network-security", "attacks", "defense"],
    excerpt:
      "A foundational explanation of network communication, common attacks, and defensive concepts from Course 3 of the Google Foundations of Cybersecurity.",
    readingTime: "13 min read",
    content: `
# Network Security Fundamentals

This article reflects my learning from **Course 3 – Connect and Protect: Networks and Network Security**, completed in late November 2025.

---

## How Data Moves Across Networks

Networks rely on layered communication to move data between devices.  
Understanding this flow helps identify where attacks can occur.

---

## Common Network Attacks

The course highlights attacks such as:
- Man-in-the-Middle attacks
- DNS manipulation
- Denial-of-Service attacks

These attacks often exploit lack of encryption or trust assumptions.

---

## Defensive Network Thinking

Rather than tools, the course emphasizes principles:
- Limit unnecessary access
- Monitor network traffic
- Encrypt data in transit
- Use layered defenses

---

## Key Takeaway

Defending networks starts with understanding how attackers think.
    `,
  },

  {
    slug: "linux-and-sql-security-foundations",
    title: "Linux and SQL in Cybersecurity: Why Analysts Rely on Them",
    date: "2025-12-08",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["linux", "sql", "security-analysis"],
    excerpt:
      "An explanation of why Linux and SQL are foundational tools for cybersecurity roles, based on Course 4 of the Google program.",
    readingTime: "14 min read",
    content: `
# Linux and SQL in Cybersecurity

Based on **Course 4 – Tools of the Trade: Linux and SQL**, completed in December 2025.

---

## Why Linux Matters in Security

Linux is widely used in servers, cloud environments, and security tools.  
Understanding file systems, permissions, and processes is essential for investigation and defense.

---

## Why SQL Matters in Security

Security data is stored in databases:
- Logs
- Alerts
- User activity records

SQL enables analysts to extract meaningful insights from large datasets.

---

## Key Takeaway

Cybersecurity professionals must be comfortable working directly with systems and data.
    `,
  },

  {
    slug: "assets-threats-and-vulnerabilities-google",
    title: "Assets, Threats, and Vulnerabilities: What to Protect and Why",
    date: "2025-12-20",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["assets", "threat-modeling", "vulnerabilities"],
    excerpt:
      "A deeper look at identifying assets, threats, and vulnerabilities based on Course 5 of the Google Foundations of Cybersecurity.",
    readingTime: "12 min read",
    content: `
# Assets, Threats, and Vulnerabilities

This post is based on **Course 5 – Assets, Threats, and Vulnerabilities**, completed in December 2025.

---

## Identifying Assets

Assets include:
- Data
- Systems
- People
- Business processes

Not all assets have equal value.

---

## Understanding Threat Actors

Threats vary based on motivation:
- Financial gain
- Espionage
- Disruption

Understanding motivation helps anticipate attack methods.

---

## Vulnerabilities as Entry Points

Vulnerabilities can be:
- Technical
- Human
- Procedural

Most breaches exploit known, unpatched weaknesses.

---

## Key Takeaway

You cannot secure what you do not understand or prioritize.
    `,
  },

  {
    slug: "tryhackme-hands-on-cybersecurity-learning",
    title: "Reinforcing Cybersecurity Fundamentals Through TryHackMe",
    date: "2026-01-20",
    category: "Cybersecurity Concepts",
    categorySlug: "cybersecurity-concepts",
    tags: ["tryhackme", "hands-on", "practical-learning"],
    excerpt:
      "How hands-on labs on TryHackMe helped me reinforce cybersecurity fundamentals through practical exposure.",
    readingTime: "10 min read",
    content: `
# Reinforcing Cybersecurity Fundamentals Through TryHackMe

Alongside structured coursework, I practiced cybersecurity concepts using **TryHackMe** through hands-on labs.

---

## Scope of Practice

- 70–80 rooms completed
- Networking and Linux fundamentals
- Web security basics
- Introductory attack and defense concepts

---

## Why Hands-On Practice Matters

Labs help bridge the gap between theory and real-world behavior:
- Seeing how attacks work
- Understanding system responses
- Learning through mistakes

---

## Ranking and Progress

Consistent practice placed me in the **top 5% of TryHackMe users**, reflecting sustained engagement rather than isolated activity.

---

## Key Takeaway

Hands-on labs are essential for transforming concepts into real understanding.
    `,
  },
];
