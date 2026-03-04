---
title: 'Chorus ONT Red LOS Light? The 60-Second Hard Reset Trick'
description: 'Is your Chorus ONT flashing a red LOS light? Learn the technical reason behind signal loss and the 60-second capacitor drain trick to restore your NZ fiber connection without a $160 technician fee.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-telecom-ont.png'
tags: ['Chorus', 'Fiber', 'ONT', 'LOS Light', 'NZ Tech']
instantAnswer: 'Unplug the power cable from the back of your Chorus ONT. Wait exactly 60 seconds. While unplugged, check the green-tipped fiber cable (SC/APC) for any kinks or loose connections. Plug the power back in. If the light remains red after 3 minutes, your optical signal is likely below -27dBm.'
---

# Chorus ONT Red LOS Light? The 60-Second Hard Reset Trick

If you are staring at a **Red LOS (Loss of Signal)** light on your Chorus ONT (Optical Network Terminal) in New Zealand, your internet is effectively dead. Whether you are with Spark, 2degrees, One NZ, or Skinny, this red light means one thing: the fiber optic signal from the street has dropped below the usable technical threshold.

But before you spend 45 minutes on hold with your ISP only to be told a technician can visit 'sometime next Tuesday,' you need to try the **60-Second Hard Reset**. This is not a standard power toggle; it involves a specific capacitor drain process that forces a protocol re-handshake with the Chorus OLT at your local exchange.

---

### Verified ErrorDocs Fix: The Snippet Answer
**The Instant Fix:** Unplug the power cable from the back of your Chorus ONT. **Wait exactly 60 seconds.** While unplugged, check the green-tipped fiber cable (SC and APC) for any kinks or loose connections. Plug the power back in. If the light remains red after 3 minutes, your optical signal is likely below **-27dBm**, indicating a physical break in the line or a regional outage.

---

## Why the LOS Light is Red: The Technical dBm Breakdown

To understand why your ONT is complaining, we need to look at the physics of fiber optics. Your Chorus ONT (usually a Nokia or Huawei model in NZ) is a highly sensitive light receiver.

1.  **Healthy Signal (-14dBm to -25dBm):** Your ONT is receiving a strong, clean beam of light from the local exchange. Data flows perfectly.
2.  **Weak Signal (-26dBm to -30dBm):** The light is reaching the ONT, but it's too faint to decode. This causes the LOS light to flicker or turn solid red. This is often caused by dust on the connector or a slight bend in the fiber cable.
3.  **No Signal (-40dBm or lower):** The light is completely gone. This usually means a 'backhoe fade' (a construction worker hit the cable) or the green-tipped cable has been pulled out of the wall socket.

In 2026, Chorus has upgraded many local OLTs, but the ONT in your hallway remains the most common point of failure.

## The 60-Second Hard Reset Trick (Step-by-Step)

Most NZ users simply flick the power switch off and on. This is a mistake. Modern ONTs have internal capacitors that hold residual charge for up to 30 seconds. A quick toggle doesn't actually clear the device's volatile memory or reset the authentication session with the Spark/2degrees/OneNZ backend.

### Step 1: Physical Isolation
Unplug the power adapter from the wall. Do not just turn off the switch; remove the plug. This ensures zero electrical leak-back.

### Step 2: The Capacitor Drain
Wait a full **60 seconds**. During this time, the ONT internal logic gates completely discharge. This is mandatory for a fresh DHCP Lease attempt once power returns.

### Step 3: The Fiber Inspect
While waiting, look at the **SC/APC connector** (the green one) at the bottom of the ONT. **DO NOT LOOK DIRECTLY INTO THE CABLE.** Fiber light is invisible but can cause permanent retinal damage. Ensure the connector is clicked firmly into place. A 'click' sound is essential.

### Step 4: Power Re-Handshake
Plug the ONT back in. The 'Power' light will go green, then 'Optical' or 'LOS' will flash. Wait up to 3 minutes for the 'Service' or 'Link' light to turn solid green.

## The PB Tech Solution: DIY Fiber Replacement

If your LOS light is red and you've noticed your cat or vacuum cleaner has been near the ONT, the fiber patch cable is likely broken. A fiber cable is made of glass; if it is bent past a 90-degree angle, it shatters internally.

**Pro TIp:** Don't wait for a Chorus tech to charge you $161 for a 2-minute cable swap.
*   Go to **PB Tech** or **Computer Lounge**.
*   Ask for an **SC/APC to SC/APC Simplex Singlemode Patch Cable** (usually 3m or 5m).
*   In 2026, these cost between **$15 and $25 NZD**.
*   Swap the cable yourself. If it works, you have just saved nearly $140.

## When to Call Chorus (and what to say to Spark/OneNZ)

If the 60-second reset and a cable swap don't work, the fault is outside your house. When you call your ISP, use this technical terminology to bypass the 'reboot your router' script:

> 'I have verified my ONT is at a **Loss of Signal (LOS)** state. I have performed a 60-second capacitor drain and verified the **SC/APC patch cable** is intact. My ONT is failing to negotiate a session with the OLT. Can you please check the **Optical Power Level** from your end?'

By using phrases like 'SC/APC patch cable' and 'negotiate with the OLT,' you signal to the support agent that you are a power user. They will frequently skip the basic troubleshooting and escalate you to 'Level 2' or book a Chorus tech immediately.

## 2026 Price Comparison: DIY vs. Pro Repair

| Service | Estimated Cost (NZD) | Time to Fix |
| :--- | :--- | :--- |
| **DIY Capacitor Drain** | $0 | 60 Seconds |
| **PB Tech Cable Swap** | $18.50 | 30 Minutes (Travel time) |
| **Chorus Standard Call-out** | $140 - $161 | 3-5 Working Days |
| **Emergency After-hours Tech** | $250+ | 24 Hours |

## FAQ: Chorus ONT Faults

### Q: Why is my LOS light red, but my neighbor's fiber is working?
**A:** You may be on a different splitter at the local cabinet. If one fiber strand in the street is damaged, it only affects the users on that specific strand. It does not always indicate a wide-area outage.

### Q: My 'Power' light is off too. Is the ONT dead?
**A:** Check your power adapter. In 2026, we see many 12V adapters failing due to NZ's humidity. You can buy a universal 12V 2A adapter from **Dick Smith** or **JB Hi-Fi** to test this.

### Q: Can I use any fiber cable to fix it?
**A:** No. It must be **SC/APC** (identifiable by the green connector). Do not use a blue (SC/UPC) connector; it has a different polish angle and will permanently damage the ONT’s internal prism.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Verified by NZ Technical Analysts for 2026 hardware standards.*

