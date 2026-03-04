---
title: 'Chorus ONT Red LOS Light? The 60-Second "Hard Reset" Trick'
description: 'A solid or flashing red LOS light on your Chorus fibre box means Loss of Signal. Before calling your ISP, try this specific 60-second sequence to rule out a software glitch and potentially restore your internet instantly.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/chorus-red-los-light.png'
tags: ['Chorus', 'ONT', 'Red LOS', 'Loss of Signal', 'Fibre', 'NZ Tech']
instantAnswer: 'A red LOS light means the physical fibre connection is broken or the laser is failing. Try the "60-Second Hard Reset": Unplug the power cable from the Chorus box. Wait exactly 60 seconds to let the internal capacitors drain. Plug it back in. Wait 3 minutes. If the LOS light stays red, the physical fibre cable outside is broken (or unplugged inside). You must call your ISP to log a network fault.'
faqs:
  - question: 'What does LOS actually stand for?'
    answer: 'LOS stands for Loss of Signal. It indicates that the Optical Network Terminal (the Chorus box) is no longer receiving the microscopic pulses of light sent down the glass fibre cable from the street exchange.'
  - question: 'Can I fix a broken fibre cable myself?'
    answer: 'No. Fibre optic cables are made of glass thinner than a human hair and transmit invisible, potentially eye-damaging lasers. They cannot be spliced back together with tape or copper wire tools. Fixing it requires a Chorus technician with a $5,000 fusion splicer.'
  - question: 'Does a red LOS light mean I need a new router?'
    answer: 'No. The LOS light is on the Chorus ONT (the box attached to the wall), not your Wi-Fi router. The issue is with the physical street connection, not your personal networking equipment.'
  - question: 'How much does Chorus charge to fix the fibre line?'
    answer: 'If the break happened outside your property boundary (e.g., a contractor dug up the street), it is free. If you (or your dog, or your builder) accidentally cut the green-tipped fibre cable inside your house, Chorus will typically charge a "Truck Roll" fee, which is around $160 NZD in 2026.'
---

# Chorus ONT Red LOS Light? The 60-Second "Hard Reset" Trick

<div class='instant-fix-box'>
  <p>A red <strong>LOS (Loss of Signal)</strong> light on your Chorus fibre box indicates a physical break in the connection. First, check that the thin cable with the green plastic tip is pushed firmly into the bottom of the box. Next, unplug the power <strong>for a full 60 seconds</strong> to drain residual power, then plug it back in. If the light stays red after 3 minutes, the physical glass fibre outside your house is severed. You must call your ISP (Spark, One NZ, etc.) to book a Chorus technician.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Scariest Light in NZ Broadband

There is no light more universally dreaded in New Zealand than the glowing red **LOS** indicator on a Chorus Optical Network Terminal (ONT). 

Most modem lights flash green, blue, or white. When your internet drops out, it is usually a software glitch—a router needing a reboot, a Wi-Fi channel getting congested, or a temporary DHCP lease failure.

But the red LOS light is different. LOS stands for **Loss of Signal**. 

This is not a software glitch. This is not a Wi-Fi problem. This is a hardware, physics-based failure. Your Chorus box is screaming: *"The laser light coming from the street cabinet has stopped reaching me."*

Before you spend 60 minutes on hold with your ISP's technical support, you need to understand exactly what causes this light, how to perform the one user-authorized reset trick, and what to say to the support agent to get a Chorus technician dispatched immediately.

## What Causes the Red LOS Light?

To fix the problem, you need to understand how fibre works. Your internet is delivered via microscopic pulses of light traveling through a flexible glass strand thiner than a human hair.

This glass strand runs from the Chorus Exchange (which could be several kilometers away), to a cabinet on your street, under your driveway, up your exterior wall, and into the green-tipped adapter plugged into the bottom of your ONT.

If the red LOS light is on, that beam of light has been interrupted. There are only four possible causes:

1.  **The "Local" Break (Your Fault):** The thin yellow or white fibre cable inside your house, running from the wall plate to the ONT, has been bent too sharply, kinked, chewed by a pet, or tugged when cleaning. Glass snaps. When it snaps, the light stops.
2.  **The "Green Plug" Issue:** The SC/APC connector (the plug with the green plastic housing at the bottom of the ONT) has wiggled loose or collected a microscopic speck of dust on the lens.
3.  **The "Street level" Break (Not Your Fault):** A contractor digging a trench down the road accidentally severed the main fibre conduit. Or, a rat chewed through the cable in the telecom pit outside your house.
4.  **The ONT Laser Failure:** The receiving laser diode inside the Nokia or Huawei ONT has simply died of old age (common in units installed before 2018).

## Step 1: Check the Green Plugs (The 10-Second Fix)

Before doing anything technical, check the physical connections inside your house.

Look at the bottom of your Chorus box. You will see a thin cable terminating in a square plastic plug. **The plug is almost always green.** (Green designates an "Angled Physical Contact" connector, uniquely required for GPON fibre networks).

1.  **Do not look directly into the cable or the port.** It uses an invisible infrared laser that can permanently damage your retina.
2.  Gently push the green plug upward to ensure it is fully clicked into the ONT.
3.  If your setup has a secondary wall box (a Jackpoint), trace the thin yellow/white cable down to the wall and push that green plug firmly in as well.

If the plug was simply loose, pushing it in will immediately turn the red LOS light off, and the green PON (Passive Optical Network) light will begin to flash as it renegotiates the connection.

## Step 2: Ensure the Cable Isn't Bent

Fibre optic cables cannot bend like copper Ethernet cables or extension cords. They have a "minimum bend radius." If you bend a fibre cable too sharply (like folding a piece of paper or wrapping it tightly around a desk leg), the light bounces out of the sides of the glass core instead of traveling all the way down.

Physically inspect the thin fibre cable running from your wall to the ONT.
*   Are there any severe kinks or right-angle bends?
*   Is it crushed under the edge of a television cabinet?
*   Is it pulled tight like a guitar string?

Gently straighten out the cable so it flows in wide, relaxed loops. If straightening the cable makes the red LOS light flicker or turn off, you have found the "micro-bend" blocking the signal. The cable interior may be damaged and will likely need replacing soon.

<AdSenseBlock slot='article-middle' />

## Step 3: The 60-Second "Hard Reset" Trick

If the physical cables look fine, but the LOS light is still red, the last thing you can try is clearing a potential logical lockup in the ONT's firmware.

Sometimes, after a brief power cut or a micro-second interruption from the Chorus street cabinet, the ONT registers a "Loss of Signal" event and locks itself in that error state, failing to recognize when the signal actually returns.

A standard reboot (turning the wall switch off and on again) often does not clear this error, because the power supply block holds residual capacitive charge. You need a complete power-drain hard reset.

**The Process:**
1.  Locate the power cable going into the Chorus ONT. (It is the round black or white plug, not the Ethernet cables).
2.  Pull the power plug completely out of the ONT.
3.  **Look at your watch and wait a minimum of 60 seconds.** Do not guess. Do not wait 10 seconds. You must wait a full minute for the capacitors on the ONT's logic board to drain completely and wipe the volatile memory state.
4.  Plug the power cable back into the ONT.
5.  Walk away. The boot sequence takes exactly 3 minutes.
    *   The Power light will turn green.
    *   The ALARM or LOS light may flash briefly.
    *   The PON light will start flashing green.

**The Verdict:**
If, after 3 minutes, the **PON light turns solid green**, congratulations. The hard reset cleared the firmware lockup and your internet is back.

If, after 3 minutes, the **LOS light is glowing solid or flashing red again**, you have definitively proven that there is no incoming light signal. You have a broken glass cable.

## How to Get Chorus to Fix It (The Call to Your ISP)

You cannot call Chorus directly. Chorus is a wholesale network operator. By NZ telecommunications law, you must contact your retail ISP (Spark, 2degrees, Skinny, One NZ, Contact) and they will dispatch the Chorus technician on your behalf.

When you call your ISP's technical support line, they will try to read you a 20-minute script targeting Wi-Fi and router problems. **Do not let them.** You need to bypass tier 1 triage immediately.

Use this exact script to skip the queue:

> "Hello, I have a complete broadband outage. I am looking directly at my Chorus ONT. The LOS light is glowing solid red. The PON light is off. I have checked the green SC/APC connector and ensured the fibre patch lead has no sharp bends. I have also performed a 60-second cold-boot power cycle of the ONT, and the LOS light returned. The physical fibre circuit is broken and I need you to log a Level 2 fault ticket directly to Chorus immediately for a technician dispatch."

By using terms like "SC/APC connector," "cold-boot," and "Level 2 fault ticket," the support agent immediately realizes you have completed the necessary physical diagnostics. Their own internal troubleshooting system requires them to log a Chorus network fault if the LOS light is confirmed red and cables are seated.

## Who Pays for the Technician?

Fibre repairs require a highly trained Chorus technician equipped with a fusion splicer (a machine that precisely melts two strands of glass together). It is not cheap.

Whether you get a bill depends entirely on *where* the break happened.

**Scenario A: The Free Fix**
If a contractor dug a trench down your street and severed the main conduit, or if water got into the telecommunications pit on the berm and ruined the splice, Chorus covers 100% of the cost. The network up to your property boundary is their responsibility.

**Scenario B: The $160 "Truck Roll" Fee**
If the Chorus technician arrives, uses their Visual Fault Locator (a red laser pen), and finds that the cable is snapped inside your lounge because your pet rabbit chewed it, or because you pulled the modem off the wall while vacuuming—you will be charged.

The standard Chorus call-out fee for user-caused damage inside the property boundary in 2026 is approximately $160 NZD, which will be added to your next ISP bill. The technician will re-splice the broken indoor cable or simply run a new pre-terminated patch lead from the wall box to the ONT.

If the thin yellow cable inside your house *is* visibly broken or chewed, you cannot go to Noel Leeming to buy a new one. These are specialized "SC/APC Single Mode OS2" fibre patch cables. They are not consumer electronics. You have no choice but to pay the technician to restore the service.

## Do Not Try to Clean the Laser

One final warning: If you unplug the green connector while troubleshooting, do not blow into the hole like an old Nintendo cartridge.

Fibre optic speeds rely on the microscopic clarity of the glass lens. The microscopic droplets of moisture in human breath contain enzymes and minerals. When that moisture dries on the microscopic laser lens inside the ONT, it leaves a cloudy residue that permanently degrades the signal throughput.

If you unplug it, look at it, and plug it straight back in. Leave the cleaning to the professionals with specialized lint-free optic swabs.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
