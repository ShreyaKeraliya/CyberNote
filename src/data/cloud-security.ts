import { BlogPost } from "./types";

export const cloudSecurityPosts: BlogPost[] = [
  {
    slug: "aws-network-security-foundations",
    title: "AWS Network Security Foundations: VPC, Subnets, and Firewalls",
    date: "2025-12-26",
    category: "Cloud Security",
    categorySlug: "cloud-security",
    tags: ["aws", "vpc", "network-security", "security-groups", "nacl"],
    excerpt:
      "A comprehensive overview of AWS network security fundamentals based on my learnings from the AWS Security Best Practices: Network Infrastructure course.",
    readingTime: "10 min read",
    content: `
# AWS Network Security Foundations: VPC, Subnets, and Firewalls

This article is based on my learnings from the **AWS Security Best Practices: Network Infrastructure** course, which I completed in **December 2025**.

The course focuses on securing workloads at the **network layer**, which is the first line of defense in AWS.

---

## Virtual Private Cloud (VPC)

Amazon VPC provides a logically isolated network environment where you control IP ranges, routing, and network boundaries.

From a security perspective, VPC enables:
- Network isolation using CIDR blocks
- Segmentation of workloads using subnets
- Controlled traffic flow using route tables

A well-designed VPC significantly limits lateral movement and unintended exposure.

---

## Public vs Private Subnets

One of the most important security decisions is **where resources are placed**.

### Public Subnets
- Have a route to an Internet Gateway
- Used for load balancers or controlled entry points

### Private Subnets
- No direct internet access
- Used for application servers and databases

Placing sensitive resources in private subnets reduces attack surface by default.

---

## Network Firewalls in AWS

AWS provides two layers of network traffic control.

### Security Groups
- Stateful firewalls
- Applied at the instance level
- Allow only explicitly permitted traffic

### Network ACLs (NACLs)
- Stateless firewalls
- Applied at the subnet level
- Support explicit allow and deny rules

Security Groups provide fine-grained control, while NACLs add an additional layer of subnet-wide protection.

---

## Key Takeaway

Network security in AWS starts with **design choices**, not tools. Correct VPC structure and restrictive firewall rules form the foundation of a secure cloud environment.
    `,
  },

  {
    slug: "aws-secure-network-access-patterns",
    title: "Secure Network Access Patterns in AWS: NAT Gateways and Bastion Hosts",
    date: "2026-01-03",
    category: "Cloud Security",
    categorySlug: "cloud-security",
    tags: ["aws", "nat-gateway", "bastion-host", "network-security"],
    excerpt:
      "An in-depth look at secure inbound and outbound access patterns recommended by AWS for protecting private resources.",
    readingTime: "8 min read",
    content: `
# Secure Network Access Patterns in AWS

This article continues my learnings from the **AWS Security Best Practices: Network Infrastructure** course completed in **December 2025**.

AWS promotes **controlled access patterns** instead of exposing resources directly to the internet.

---

## The Problem with Direct Exposure

Exposing EC2 instances directly to the internet increases the risk of:
- Brute-force attacks
- Port scanning
- Exploitation of unpatched services

AWS network security best practices aim to eliminate unnecessary exposure.

---

## NAT Gateway for Outbound Access

A NAT Gateway allows instances in private subnets to:
- Access the internet for updates
- Download dependencies
- Communicate externally

At the same time, it **blocks inbound connections**, maintaining isolation.

---

## Bastion Host Pattern

A Bastion Host acts as a controlled administrative entry point.

Key security benefits:
- Limits SSH/RDP access to a single instance
- Allows tighter monitoring and logging
- Reduces exposed attack surface

---

## Applying Least Privilege at the Network Layer

Network-level least privilege means:
- Only required ports are open
- Access is restricted by source IP
- Private resources remain unreachable from the public internet

---

## Final Takeaway

Secure AWS architectures prioritize **private-by-default design**, using NAT Gateways and Bastion Hosts only where necessary.
    `,
  },
];
