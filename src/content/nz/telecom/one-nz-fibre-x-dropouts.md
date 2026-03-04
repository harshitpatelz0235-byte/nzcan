---
title: 'One NZ Fibre X Dropping Out? The Coax Loop Secret Fix'
description: 'Is your One NZ Fibre X internet disconnecting? Learn why Fibre X is not real fiber, how RF ingress causes drop-outs, and the secret coax loop fix to stabilize your 2026 connection.'
category: 'Telecom'
country: 'nz'
faqs:
  - question: 'Is Fibre X faster than normal Fibre?'
    answer: 'No. While it can reach 1Gbps, the upload speed is significantly slower than Chorus Fibre and the ping is higher, making it worse for gaming.'
  - question: 'Why does my modem light stay green but have no internet?'
    answer: 'This is often a DNS failure. Change your DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google) in your modem settings.'
lastUpdated: 2026-03-05
author: 'ErrorDocs Tech Team'
image: '/images/one-nz-fibre-x.png'
tags: ['One NZ', 'Fibre X', 'HFC', 'Internet Dropouts', 'NZ Tech']
instantAnswer: 'Use a 7/16-inch (11mm) wrench to tighten the coax connector on the modem and wall socket. Additionally, screw 75-ohm Coax Terminators into every unused coax wall port in the house to eliminate signal noise (RF Ingress).'
---

# One NZ Fibre X Dropping Out? The Coax Loop Secret Fix

<div class='instant-fix-box'>
  <p>If your One NZ Fibre X (formerly Vodafone HFC) keeps dropping out, the coaxial isolator cable may be creating a feedback loop. Unscrew the white coaxial cable from the wall, ensure the central copper pin is straight, and screw it back in tightly with a wrench.</p>
</div>

<AdSenseBlock slot='article-top' />

## Why Fibre X is Different from Normal Chorus Fibre

If you are a **One NZ** customer on a **Fibre X** plan, you might be experiencing intermittent drop-outs. The first thing you need to understand is that **Fibre X is not Pure Fibre.** It is **HFC (Hybrid Fibre-Coaxial)**. It uses old TelstraClear coaxial TV cables for the final stretch into your home.

In 2026, with more 5G towers active, these old coax cables are under attack from **Signal Noise (RF Ingress)**. Because Fibre X uses copper and electrical signals, it is susceptible to physical interference that pure fibre users never deal with.

## The Coaxial Loop Fix

Most Fibre X drop-outs are caused by 'finger-tight' coax connectors or damaged physical loops.

1.  **The Wrench Tighten:** In the telecom industry, finger-tight is considered a failure. Vibration from traffic or house movement can loosen these connectors.
2.  **The 7/16-inch Rule:** Go to **Bunnings** or **Mitre 10** and pick up a small 7/16-inch (11mm) spanner. 
3.  **Sealing the Loop:** Give the connector on the modem and the wall socket a **1/8th turn** past finger-tight. You should feel it seat firmly. This seals the shielding and prevents RF ingress.
4.  **Pin Inspection:** Ensure the central copper pin in the cable is perfectly straight. If it is bent even slightly, it will create an electrical 'echo' that drops your connection.

<AdSenseBlock slot='article-middle' />

## Fixing the Vodafone UltraHub Overheating

One NZ s UltraHub modems are notorious for heat build-up. Heat causes the RF tuner chip to drift in frequency. Placing the router near a TV or in a closed cabinet causes heat-drops.

*   **Verticality Check:** Use the plastic stand that came with the modem. It **must** be standing vertically. 
*   **Airflow:** Moving the modem just 30cm away from other electronics can stabilize the signal and stop the random reboots.

## How to Request a Move to Real Fibre

If your Fibre X connection still drops out after tightening everything, you should request a move to standard Chorus fibre (UFB).

1.  **Outage Audit:** Document every time your connection drops.
2.  **The Termination Script:** Call One NZ and say: 'I have verified my internal cabling is up to standard and all unused ports are terminated. I am still experiencing sync loss. I would like to request a migration to **Chorus UFB** as the HFC network in my area is no longer stable for my requirements.'
3.  **Local Hardware:** While you wait, check **Jaycar NZ** for **RG6 Quad-Shielded** coax cables to replace the cheap ones provided by the ISP.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Verified by NZ Technical Analysts for 2026 hardware standards.*
