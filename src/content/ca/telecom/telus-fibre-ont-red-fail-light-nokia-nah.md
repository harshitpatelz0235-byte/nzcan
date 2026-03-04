---
title: 'Telus Fibre ONT Red Fail Light: The Nokia NAH Fix'
description: 'Is your Telus Nokia NH20A Fibre ONT displaying a solid red FAIL light instead of green? Learn how to diagnose macro-bends, clean SC/APC optical tips, and verify neighborhood outages.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/telus-nokia-ont-red-fail-light.png'
tags: ['Telus', 'PureFibre', 'Nokia NH20A', 'ONT', 'Red Fail Light', 'Canada Tech']
instantAnswer: 'A solid red FAIL light on your Telus Nokia NH20A ONT means the modem cannot see the laser light coming from the street. You have a physical fiber break. 1. Unplug the ONT power cord for 30 seconds to force a laser reset. 2. Trace the thin, green-tipped fiber wire from the wall jack to the Nokia box. If the wire is pinched under a desk or bent at a 90-degree angle (a "macro-bend"), the glass inside is fractured. 3. If the wire is pristine, the neighborhood Telus hub is offline. You must call Telus Support to dispatch a splice technician.'
faqs:
  - question: 'Can I fix a broken fiber cable myself?'
    answer: 'No. Unlike copper coaxial cables which can be easily sliced and twisted together at home, fiber optic cables are made of microscopic glass strands. If the cable is physically broken, it requires a $5000 industrial fusion splicer to melt the glass back together perfectly without signal loss. A Telus technician must be dispatched.'
  - question: 'Why did the Fail light turn on after a thunderstorm?'
    answer: 'Glass fiber optics do not conduct electricity, so the cable itself cannot be struck by lightning. However, the large neighborhood Telus distribution hubs mounted on telephone poles do use electrical power. A severe thunderstorm often knocks out the backup batteries in these nodes, killing the laser beam pointing at your house.'
  - question: 'What does a flashing green PON light mean?'
    answer: 'If the Fail light is off, but the PON (Passive Optical Network) light is flashing green instead of solid green, your Nokia ONT is receiving the physical laser, but the Telus backend servers are refusing to authenticate your account. This is usually caused by a billing error or a provisioning failure on the Telus cloud server.'
  - question: 'Can I clean the green fiber tip?'
    answer: 'Yes, but be extremely careful. The green SC/APC connector at the end of the fiber wire is highly sensitive. If it has dust on it, it will scatter the laser light. Never blow on it with your mouth (spit ruins the lens). Use a specialized dry fiber optic cleaning pen, or very gently wipe the tip with a lint-free Kimwipe and 99% isopropyl alcohol.'
---

# Telus Fibre ONT Red Fail Light: The Nokia NAH Fix

<div class='instant-fix-box'>
  <p>To diagnose a <strong>Red FAIL Light</strong> on your Telus Nokia Fibre ONT: The modem is physically disconnected from the optical grid. <strong>1.</strong> Check <a href="https://telus.com/outages">telus.com/outages</a> on your phone to see if a construction crew cut a neighborhood line. <strong>2.</strong> Trace the thin fiber wire in your house. Ensure it is not crushed by a couch or bent sharply. <strong>3.</strong> Unplug the ONT power for 30 seconds. <strong>4.</strong> If the FAIL light returns, pull the green connector out, inspect the tip for dust, plug it back in firmly until it clicks. <strong>5.</strong> If it remains red, call Telus Support; the laser is dead.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Light in the Glass" Technology

When you upgrade to Telus PureFibre in Western Canada, the days of copper wires are over. Telus installs a highly sophisticated **Optical Network Terminal (ONT)** inside your home—most commonly the white Nokia NH20A Network Access Hub in 2026. 

This modem operates on a very simple premise: A central Telus office fires an invisible laser beam down a microscopic tube of glass directly into your living room. The Nokia ONT catches that light, decodes it at the speed of light, and turns it into gigabit internet.

If that laser beam is blocked, interrupted, or shattered, the Nokia ONT immediately trips its primary diagnostic warning: **A Solid Red FAIL Light.**

When you see this light, you are not experiencing a Wi-Fi glitch or a software bug. You are experiencing a physical hardware separation from the internet. Here is how to diagnose exactly where the glass is broken. 

## Step 1: The "Macro-Bend" Inspection

The absolute most common reason for a sudden red FAIL light is human error inside the home. 

The fiber optic cable connecting to your wall jack is incredibly fragile. Inside the flexible yellow or white outer jacket is a strand of glass thinner than a human hair. 

If you push your computer desk flush against the wall and violently pinch the fiber cable, the glass inside shatters. 

Even if the glass doesn't shatter, bending the cable too tightly creates a **Macro-Bend**. Laser light refuses to travel around sharp 90-degree corners. If the fiber is bent into a tight knot, the light simply bleeds out the side of the plastic jacket instead of reaching the modem. 

1.  Trace the entire length of the thin optical cable from the wall plate to the Nokia ONT. 
2.  Ensure it follows gentle, looping curves. It should never be bent sharper than the curve of a tennis ball.
3.  Ensure nothing is resting on top of the cable. 
4.  If the cable is crushed or kinked, carefully straighten it out. Unplug the Nokia ONT for 30 seconds and plug it back in to reset the optical sensor.

<AdSenseBlock slot='article-middle' />

## Step 2: The SC/APC Connector Check

Because the laser beam relies on pure, unobstructed light transmission, even a microscopic fleck of drywall dust can completely block the gigabit signal, triggering the Fail light. 

1.  Locate the green **SC/APC connector** on the end of the fiber cord plugging into the bottom of the Nokia ONT. 
2.  Gently pull the green plastic housing straight down to unplug it. 
3.  *Warning: Never look directly into the end of a fiber optic cable while it is plugged into the wall. The laser is invisible infrared light and can cause permanent retinal damage.*
4.  Inspect the very tip of the white ceramic ferrule protruding from the green plastic. 
5.  If it looks dusty or smudged, it is scattering the laser. 
6.  If you do not own a professional fiber cleaning pen, you can very gently wipe the tip with a lint-free microfiber cloth or a Kimwipe dabbed in 99% isopropyl alcohol. Do not use a cotton swab, as the cotton fibers will stick to the glass lens. 
7.  Plug the green connector firmly back into the ONT until it distinctly clicks into place. 

## Step 3: The Outside Plant Failure

If your indoor fiber cable is perfectly pristine, swooping in gentle curves, and the green connector is spotless, the problem is not inside your house. You have an "Outside Plant" failure. 

Telus fiber is buried in trenches or strung along telephone poles. In 2026, the three most common causes of community fiber death are:
*   **Backhoes:** A local construction crew down the street accidentally dug up and shredded the 144-strand main fiber trunk line feeding your neighborhood. 
*   **Squirrels/Rats:** Rodents have an infamous affinity for chewing on the sweet-tasting polyethylene jackets of aerial fiber drop cables. 
*   **Ice Storms:** The extreme weight of freezing rain violently snapped the fiber line running from the telephone pole to the eaves of your house. 

### The Ultimate Fix
When the laser is dead at the pole, you are powerless. No amount of router rebooting will bring the internet back.

1. Turn off the Wi-Fi on your smartphone to use your cellular data.
2. Open your browser and go to **telus.com/outages**. 
3. Input your postal code to see if Telus is already aware of a massive neighborhood cut. 
4. If there is no outage listed, the fiber drop was severed exclusively to your house. 
5. You must call Telus Support at **1-888-811-2323**. Tell the automated system: *"My modem has a red optical fail light. The fiber line is cut outside."*
6. Telus will dispatch an industrial fiber splicing technician to physically remelt the glass in the street.

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
