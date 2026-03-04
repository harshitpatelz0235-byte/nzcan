---
title: 'One NZ Fibre X Dropping Out? The Coax Loop Secret Fix'
description: 'Is your One NZ Fibre X internet disconnecting? Learn why Fibre X is not real fiber, how RF ingress causes drop-outs, and the secret coax loop fix to stabilize your 2026 connection.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/one-nz-fibre-x.png'
tags: ['One NZ', 'Fibre X', 'HFC', 'Internet Dropouts', 'NZ Tech']
instantAnswer: 'Use a 7/16-inch (11mm) wrench to tighten the coax connector on the modem and wall socket. Additionally, screw 75-ohm Coax Terminators into every unused coax wall port in the house to eliminate signal noise (RF Ingress).'
---

# One NZ Fibre X Dropping Out? The Coax Loop Secret Fix

If you are a **One NZ** (formerly Vodafone) customer on a **Fibre X** plan, you might be experiencing frustrating, intermittent drop-outs. One minute you’re streaming 4K Netflix, the next, your modem is flashing white or green and you’re offline.

The first thing you need to understand—and One NZ won't tell you this in their marketing—is that **Fibre X is not 'Pure Fiber.'** It is **HFC (Hybrid Fiber-Coaxial)**. The fast fiber optics end at the green cabinet on your street, and the final stretch into your home uses old-school copper coaxial cable (the same cable used for Sky TV). 

In 2026, with the rollout of more powerful 5G towers across Auckland, Wellington, and Christchurch, these old coax cables are under attack from **Signal Noise (RF Ingress)**. Here is the secret 'Coax Loop' fix to stop the drop-outs.

---

### Verified ErrorDocs Fix: The 'Snippet' Answer
**The Instant Fix:** Most Fibre X drop-outs are caused by 'finger-tight' coax connectors. Use a **7/16' (or 11mm) wrench** to gently tighten the silver cable connector on the back of your modem and the wall socket. **Do not over-tighten.** Additionally, if you have unused coax wall-sockets in other rooms, they act as 'antennas' sucking in interference. Buy 75-ohm **Coax Terminators** from **Bunnings** ($5) and screw them into every unused port in the house to close the signal loop.

---

## The Technical Truth: Why Fibre X Fails

Because Fibre X uses copper and electrical signals (RF), it is susceptible to physical interference that pure fiber users (Chorus) never have to deal with.

1.  **RF Ingress:** Your coax cable is shielded, but if a connector is loose by even half a millimeter, radio waves from nearby cell towers, microwaves, or even LED light transformers can 'leak' into the cable. This creates 'noise' that drowns out your internet data.
2.  **The 'Splitter' Slump:** If your house has multiple Sky TV points, there is a 'Splitter' somewhere in your ceiling or 'Smart Box.' Every time a signal is split, it loses strength. In 2026, many older splitters aren't rated for the high frequencies (Ghighertz ranges) One NZ uses for Gigabit speeds.
3.  **HFC Convergence:** Unlike fiber, which is a dedicated pipe, HFC is a 'shared' medium. During peak times (7 PM to 10 PM), your local coax node may be congested, causing the modem to 'desync' as it fights for a clean frequency.

## The 3-Step 'Coax Loop' Stabilization Fix

### Step 1: The Wrench Tighten (The 7/16' Rule)
In the telecom industry, 'finger-tight' is considered a failure. Vibration from traffic or house movement can loosen these connectors.
*   Go to **Bunnings** or **Mitre 10**.
*   Pick up a small 7/16' (11mm) spanner.
*   Give the connector on the modem a **1/8th turn** past finger-tight. You should feel it 'seat' firmly.
*   Repeat this at the wall socket. This seals the shielding and prevents RF ingress.

### Step 2: Terminate the Unused Outlets
This is the 'Secret Fix' that most technicians won't do unless you ask. Every unused coax port in your house is a hole in your shielded network.
*   Buy a pack of **F-Type 75-Ohm Terminators**.
*   Walk to every room in the house that has a Sky/TV port.
*   Screw a terminator into the port. This 'closes the loop' and prevents signal reflections from bouncing back into your modem.

### Step 3: Heat Management (Modem Verticality)
One NZ's 'SuperWifi' modems used in 2026 are notorious for heat build-up. Heat causes the RF tuner chip to drift in frequency.
*   **The Fix:** Use the plastic stand that came with the modem. It **must** be standing vertically. Standing horizontally traps heat against the circuit board, leading to a 'Soft Drop-out' where the Wi-Fi stays on but the internet data stops.

## Local Hardware Rescue: What to Buy in NZ

| Item | Brand Recommendation | Local Store | Price (Est) |
| :--- | :--- | :--- | :--- |
| **7/16' Wrench** | Stanley or Trojan | **Bunnings** | $12.00 |
| **75-Ohm Terminators** | Antsig | **Mitre 10** | $6.50 (2-pk) |
| **High-Quality Coax Cable** | RG6 Quad-Shielded | **Jaycar NZ** | $15.00 (2m) |
| **Technetix Splitter** | 2-Way 2GHz | **Trademe / Specialist** | $25.00 |

## What to say to One NZ Support (The Escalation Script)

If your Fibre X connection still drops out after tightening everything, you need a 'Line Audit.' Use this script to get past the Level 1 support:

> 'I am experiencing intermittent sync loss on my Fibre X connection. I have already verified **RG6 Quad-shielding** throughout the premises and tightened all connectors with a **torque wrench** to industry standards. I have **terminated all unused wall ports** to eliminate ingress. Can you please check the **Upstream/Downstream Power Levels** and the **Signal-to-Noise Ratio (SNR)** on my MAC terminal? I suspect a local node fault or a failing outdoor 'drop cable'.'

This script signals that you understand the HFC architecture. They will typically book a technician to check the 'street tap' (the connection at the pole) instead of telling you to reset your Wi-Fi password.

## FAQ: One NZ Fibre X Interruption

### Q: Why don't I just switch to 'Real Fiber'?
**A:** In some parts of Wellington and Christchurch, One NZ owns the HFC network but Chorus (fiber) hasn't laid cables yet. You might be 'trapped' on Fibre X. If you have the choice, **switch to UFB (Chorus Fiber)** for better stability.

### Q: My modem light is solid Green but I have no internet.
**A:** This is often a **DNS failure** on One NZ's side. Go into your modem settings (192.168.1.1) and change your DNS to **1.1.1.1** (Cloudflare) or **8.8.8.8** (Google).

### Q: Is Fibre X faster than normal Fibre?
**A:** No. While it can reach 1Gbps, the 'upload' speed is significantly slower than Chorus Fiber (usually 100Mbps vs 500Mbps) and the 'latency' (ping) is higher, making it worse for 2026 gaming.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Verified by NZ Technical Analysts for 2026 hardware standards.*

