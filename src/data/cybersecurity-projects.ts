import { BlogPost } from "./types";

export const cybersecurityProjectPosts: BlogPost[] = [
  {
    slug: "port-scanner-using-nmap",
    title: "Building a Port Scanning Project Using Nmap",
    date: "2025-12-12",
    category: "Cybersecurity Projects",
    categorySlug: "cybersecurity-projects",
    tags: ["nmap", "port-scanning", "network-security", "reconnaissance"],
    excerpt:
      "A practical cybersecurity project focused on network reconnaissance using Nmap to identify open ports and exposed services.",
    readingTime: "11 min read",
    content: `
# Building a Port Scanning Project Using Nmap

Port scanning is one of the **first and most critical steps** in cybersecurity reconnaissance.
This project was created to understand how attackers and defenders identify exposed network services.

---

## Problem Statement

Unsecured or unknown open ports can:
- Expose vulnerable services
- Provide entry points for attackers
- Lead to privilege escalation or data breaches

Without proper visibility, systems remain at risk.

---

## Project Objective

The goal of this project was to:
- Perform systematic port scanning
- Identify open ports and running services
- Understand how network exposure increases attack surface

---

## Tools Used

- **Nmap (Network Mapper)**
- Linux-based environment

---

## Core Nmap Concepts Applied

### 1. Port Scanning Techniques
- **TCP SYN Scan (-sS)** – Stealthy and fast
- **TCP Connect Scan (-sT)** – Full TCP handshake
- **UDP Scan (-sU)** – Detects open UDP services

### 2. Service & Version Detection
- **-sV** to identify service versions running on open ports

### 3. OS Detection
- **-O** to infer the operating system using TCP/IP fingerprinting

### 4. NSE (Nmap Scripting Engine)
- Used default scripts (**-sC**) to gather additional information
- Helps detect misconfigurations and weak services

---

## Sample Commands Used

\`\`\`bash
# Basic scan
nmap target_ip

# Service version detection
nmap -sV target_ip

# OS detection
nmap -O target_ip

# Aggressive scan
nmap -A target_ip
\`\`\`

---

## Security Concepts Reinforced

- Attack surface discovery
- Network reconnaissance
- Importance of port hardening
- Visibility before defense

---

## What I Learned

- How attackers map a target before exploitation
- Why unused ports should always be closed
- How defenders can use the same tools for auditing

---

## Project Outcome

This project strengthened my understanding of **network-level security** and showed how simple reconnaissance can reveal critical information about a system.
    `,
  },

  {
    slug: "ai-powered-phishing-detection-system",
    title: "AI-Powered Phishing Detection System Using Machine Learning and NLP",
    date: "2026-01-20",
    category: "Cybersecurity Projects",
    categorySlug: "cybersecurity-projects",
    tags: ["phishing", "machine-learning", "nlp", "email-security"],
    excerpt:
      "An AI-based system designed to detect phishing emails and malicious URLs using machine learning and natural language processing.",
    readingTime: "16 min read",
    content: `
# AI-Powered Phishing Detection System

Phishing attacks exploit **human trust**, making them one of the most successful cyber threats today.
This project applies **AI and NLP** techniques to automatically detect phishing attempts.

---

## Problem Statement

Traditional detection systems struggle with:
- Constantly evolving phishing language
- Obfuscated malicious URLs
- Social engineering techniques

Static rules often fail against new attack patterns.

---

## Project Objective

The system aims to:
- Classify emails as phishing or legitimate
- Detect malicious URLs
- Reduce reliance on manual inspection

---

## System Overview

The system processes:
- Email text content
- URL structure and patterns
- Linguistic cues commonly used in phishing attacks

Machine learning models are trained on labeled datasets to identify malicious intent.

---

## Techniques Used

- Text preprocessing and tokenization
- Feature extraction from email content
- Supervised machine learning models
- NLP-based pattern recognition

---

## Demo & Live Project

🔗 **Live Demo:**  
https://ai-powered-phishing-detection-system-2.onrender.com

This demo allows users to:
- Test email content
- Analyze URLs
- See real-time phishing predictions

---

## Security Concepts Applied

- Social engineering detection
- Threat intelligence fundamentals
- Proactive defense mechanisms
- Human-focused attack mitigation

---

## What I Learned

- How phishing attacks manipulate language and urgency
- Practical limitations of ML in cybersecurity
- Importance of continuous model improvement

---

## Project Outcome

This project demonstrates how **AI can enhance email and web security**, especially against evolving phishing techniques that bypass traditional filters.
    `,
  },
];
