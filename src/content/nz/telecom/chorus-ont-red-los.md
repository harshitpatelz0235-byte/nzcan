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
faqs:
  - question: 'Why is my LOS light red, but my neighbor s fibre is working?'
    answer: 'You may be on a different splitter at the local cabinet. If one fibre strand in the street is damaged, it only affects the users on that specific strand. It does not always indicate a wide-area outage.'
  - question: 'Can I use any fibre cable to fix it?'
    answer: 'No. It must be SC/APC (identifiable by the green connector). Do not use a blue (SC/UPC) connector; it has a different polish angle and will permanently damage the ONT s internal prism.'
---

# Chorus ONT Red LOS Light? The 60-Second Hard Reset Trick

<div class='instant-fix-box'>
  <p>A solid red LOS (Loss of Signal) light on your Chorus ONT means the fibre optic cable is damaged or disconnected. To attempt a hard reset, unplug the power for 60 seconds, gently push the green fibre connector firmly into the base, and power it back on.</p>
</div>

<AdSenseBlock slot='article-top' />

## Why is the LOS Light Red?

To understand why your ONT is complaining, we need to look at the physics of fibre optics. Your Chorus ONT (usually a Nokia or Huawei model in NZ) is a highly sensitive light receiver. The LOS light indicates a 'Loss of Signal' - meaning the optical power has dropped below the usable technical threshold.

1.  **Healthy Signal (-14dBm to -25dBm):** Your ONT is receiving a strong, clean beam of light from the local exchange. Data flows perfectly.
2.  **Weak Signal (-26dBm to -30dBm):** The light is reaching the ONT, but it is too faint to decode. This causes the LOS light to flicker or turn solid red. This is often caused by dust on the connector or a slight bend in the fibre cable.
3.  **No Signal (-40dBm or lower):** The light is completely gone. This usually means a 'backhoe fade' (a construction worker hit the cable) or the green-tipped cable has been pulled out of the wall socket.

## The 60-Second Hard Reset Trick

Most NZ users simply flick the power switch off and on. This is a mistake. Modern ONTs have internal capacitors that hold residual charge for up to 30 seconds. A quick toggle does not actually clear the device s volatile memory or reset the authentication session with the Spark, 2degrees, or OneNZ backend.

1.  **Step 1: Physical Isolation:** Unplug the power adapter from the wall. Do not just turn off the switch; remove the plug. This ensures zero electrical leak-back.
2.  **Step 2: The Capacitor Drain:** Wait a full **60 seconds**. During this time, the ONT internal logic gates completely discharge. This is mandatory for a fresh DHCP Lease attempt once power returns.
3.  **Step 3: Power Re-Handshake:** Plug the ONT back in. The 'Power' light will go green, then 'Optical' or 'LOS' will flash. Wait up to 3 minutes for the 'Service' or 'Link' light to turn solid green.

<AdSenseBlock slot='article-middle' />

## Checking the Green Fibre Lead-in Cable

If your LOS light is red and you have noticed your cat or vacuum cleaner has been near the ONT, the fibre patch cable is likely broken. A fibre cable is made of glass; if it is bent past a 90-degree angle, it shatters internally.

*   **The PB Tech Solution:** Don't wait for a Chorus tech to charge you $161 for a 2-minute cable swap. Go to **PB Tech** or **Computer Lounge** and ask for an **SC/APC to SC/APC Simplex Singlemode Patch Cable** (usually 3m or 5m). In 2026, these cost between **$15 and $25 NZD**.
*   **The Inspection:** While waiting for the reset, look at the **SC/APC connector** (the green one) at the bottom of the ONT. **DO NOT LOOK DIRECTLY INTO THE CABLE.** Fibre light is invisible but can cause permanent retinal damage. Ensure the connector is clicked firmly into place. A 'click' sound is essential.

## How to Report a Fibre Cut to Chorus NZ

If the 60-second reset and a cable swap do not work, the fault is likely outside your house. Before calling your ISP, check the **Chorus Outage Map** online to see if your suburb is affected.

When you do call your ISP, use this technical terminology to bypass the 'reboot your router' script:

> 'I have verified my ONT is at a **Loss of Signal (LOS)** state. I have performed a 60-second capacitor drain and verified the **SC/APC patch cable** is intact. My ONT is failing to negotiate a session with the OLT. Can you please check the **Optical Power Level** from your end?'

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Verified by NZ Technical Analysts for 2026 hardware standards.*
