---
title: 'Telus Network Access Hub Red Optical Light: The Fiber Fix'
description: 'Is your Telus Network Access Hub (NAH) displaying a solid Red Optical light? Learn how to inspect the Nokia ONT hardware, clean the delicate fiber connector, and diagnose a severed drop line.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/telus-nah-red-optical-light.png'
tags: ['Telus', 'Network Access Hub', 'Red Optical Light', 'Nokia NH20A', 'ONT Error', 'Canada Tech']
instantAnswer: 'A solid red "Optical" or "PON/LOS" light on the Telus Network Access Hub means the internal Nokia ONT has completely lost its laser signal from the street. 1. Unplug the power from the white Hub. 2. Locate the thin, fragile fiber cable with a green plastic tip connected to the Hub. 3. Ensure the cable is perfectly straight with no sharp 90-degree bends. 4. Unplug the green tip, gently blow on the white ceramic end to clear any dust, and push it firmly back into the socket until it clicks. 5. Power the Hub back on.'
faqs:
  - question: 'What is the NAH NH20A?'
    answer: 'The Network Access Hub (usually model Nokia NH20A) is the brain of the modern 2026 Telus PureFibre ecosystem. Unlike older systems that had a separate fiber modem mounted to the wall and a router in the living room, the NAH combines the fiber ONT and the main network router into one large white cylinder or wall-mounted box.'
  - question: 'Can I splice a broken fiber cable myself?'
    answer: 'No. If a mouse chewed through the thin indoor fiber cable, or a landscaper accidentally cut the thick black drop line outside your house, you cannot tape or twist the wires back together. Fiber optics are made of microscopic glass. They must be perfectly "fusion spliced" using a $5,000 laser alignment tool operated by a Telus technician.'
  - question: 'Is the red light dangerous for my eyes?'
    answer: 'Yes. Never look directly down the barrel of an unplugged fiber optic cable or into the green socket on the back of the Telus Hub. The infrared laser data beam is invisible to the human eye, but it is intense enough to permanently burn your retina resulting in blind spots.'
  - question: 'Will a factory reset fix the red optical light?'
    answer: 'Almost never. A factory reset wipes the Wi-Fi passwords and routing rules. The Optical light is a raw, physical hardware indicator. If the light is red, the laser is physically broken, blocked, or missing. Resetting the software will not reconnect a severed glass cable.'
---

# Telus Network Access Hub Red Optical Light: The Fiber Fix

<div class='instant-fix-box'>
  <p>To fix a <strong>Solid Red Optical Light</strong> on a Telus NAH: You have lost physical fiber signal. <strong>1.</strong> Trace the thin fiber cable (usually white with a green connector) from the Hub to the wall plate. <strong>2.</strong> Look for "Macro-bends"—any sharp kinks or areas where the cable is pinched under a desk. <strong>3.</strong> Unplug the Hub power cord. <strong>4.</strong> Unplug the green connector, wipe the tip with a dry microfiber cloth, and firmly remount it until it clicks. <strong>5.</strong> Plug the power back in. If the light remains red after 10 minutes, the outdoor line is buried or cut, and you must call Telus for a technician.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "PureFibre" Blackout

In 2026, Telus has migrated the vast majority of its Western Canadian user base onto their GPON "PureFibre" network. The centerpiece of this network in your home is the **Telus Network Access Hub (NAH)**. 

When the system works, it is blisteringly fast. However, it relies entirely on a single, continuous beam of infrared laser light traveling down a microscopic tube of glass all the way from the central Telus switching station directly into your home.

If you look at your NAH and see that the light labeled **Optical** (or sometimes labeled **PON** or **LOS** on older Nokia ONTs) is glowing solid or flashing red, your internet is dead.

A red optical light is the most severe physical error a fiber modem can display. It does not mean your Wi-Fi is acting up. It means the modem is sitting in total darkness. The laser beam has been interrupted. 

Here is exactly how to diagnose whether the interruption is inside your house (which you can fix) or outside under your lawn (which requires a shovel and a Telus bucket truck).

## Step 1: The "Macro-bend" Inspection

The fiber optic patch cable inside your house (the final 10 feet of cable connecting the wall plate to the Telus NAH) is the most vulnerable point in the entire Canadian telecom infrastructure.

Unlike traditional copper electrical wires or thick coaxial cables, glass fiber cannot tolerate sharp angles. 

When light travels down a fiber cable, it bounces off the internal walls of the glass core. If you bend the cable too sharply (known as a "macro-bend"), the angle of the glass changes, and the laser light escapes the core, bleeding out into the plastic sheathing. The light never reaches the modem, triggering the Red Optical light.

1.  Start at the back of the Telus Hub.
2.  Follow the extremely thin cable (usually a white or yellow jacket) by running your hand gently along its entire length.
3.  **Check for Pinch Points:** Is the cable trapped under a heavy wooden bookshelf? Is it pinched in a door hinge? Did a vacuum cleaner run over it?
4.  **Check the Radius:** Ensure there are no tight loops. Fiber optic cable should never be bent into a circle smaller than the size of a standard coffee mug. 
5.  If you find a sharp pinch or a 90-degree kink, gently massage the cable straight. Be careful, as the internal glass may have already snapped. 

<AdSenseBlock slot='article-middle' />

## Step 2: The Physical "Click" and Clean

If the cable is perfectly straight, the connection interface itself might be seated incorrectly or contaminated by microscopic dust.

Fiber optic connections use an SC/APC connector (the green square plug). The green color dictates that the tip of the ceramic ferrule inside the plug is physically cut at a sharp 8-degree angle. This angled cut prevents light from bouncing backward and blinding the laser transmitter up the street.

If the green connector is not pushed 100% of the way into the socket, an air gap forms between the two angled pieces of glass. To the laser, an air gap looks like a solid brick wall. 

*Warning: Never look directly into an unplugged fiber connector or wall jack. Unplug the modem's power first.*

1.  **Unplug the Power:** Remove the black power cord from the Telus NAH. 
2.  **Extract the Connector:** Grip the green plastic square at the back of the modem and pull straight out. It may be stiff. 
3.  **Inspect the Tip:** Look at the white ceramic tip holding the tiny glass hole. Do not touch it with your skin. Oils from your finger will instantly ruin the signal.
4.  **Dry Clean:** If you suspect dust, gently swipe the tip exactly once with a clean microfiber lens cloth. (Do not use water or standard rubbing alcohol).
5.  **The Re-Seat:** Push the green connector back into the modem socket. You must push firmly until you feel and hear a distinct mechanical **CLICK**. If it isn't clicked in, it is broken. 
6.  Repeat this process at the wall-plate end of the cable.
7.  **Reboot:** Plug the power back into the Hub. It takes about 3 minutes for the ONT to wake up and attempt a PON handshake with the street server. 

## Step 3: Determining Catastrophic Failure

If you have cleaned the connectors, straightened the cable, rebooted the NAH, and waited ten minutes, but the Optical light stubbornly remains red, the problem is no longer inside your house. 

You have a catastrophic "outside plant" failure. 

In Canada, fiber drops are either strung from wooden telephone poles or buried six inches beneath neighborhood lawns. 

1.  **The Frozen Ground:** During the intense freeze-thaw cycles of a Canadian spring, the shifting ground can physically stretch and snap buried conduits, severing the glass inside.
2.  **The Landscaper:** A neighbor using an aerator, a digging shovel, or planting a tree frequently cuts the Telus drop line.
3.  **The Splitter Box:** Telus technicians working two streets over may have accidentally unplugged your specific fiber strand from the neighborhood distribution hub (CSP) while hooking up a new customer.

**The Final Action:** Provide this specific diagnostic information to the call center. 

Call Telus Support (1-888-811-2323). Tell the automated assistant you have "No Internet." 
When you reach a human, say: *"My Network Access Hub is displaying a solid Red Optical light. I have reseated and cleaned the internal green patch cables and removed all macro-bends. The ONT is registering zero light. I require a Level 2 physical line inspection to check for a severed drop or a disconnected port at the neighborhood CSP."* 

They will instantly bypass rote troubleshooting and dispatch a designated fiber splicing technician.

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
