---
title: 'Chorus ONT Power Light Off? How to Fix a Dead Fibre Box'
description: 'If your white Chorus fibre box is completely dead with no lights showing, you have lost both internet and landline. Learn how to diagnose a dead ONT, check the hidden power buttons, and get a fast replacement in NZ.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/chorus-ont-dead-box.png'
tags: ['Chorus', 'ONT', 'Power Outage', 'Fibre Broadband', 'Hardware Failure', 'NZ Tech']
instantAnswer: 'If your Chorus ONT has no lights, check three things before calling your ISP. 1) Push the tiny black "On/Off" button located on the bottom or side of the unit—it often gets bumped by accident. 2) Ensure the power cord is pushed firmly into the wall and the wall switch is on. 3) Test the wall socket by plugging a lamp into it. If the socket works but the Chorus box is still dead, the internal power supply has surged and fried. Call your ISP immediately for a free technician replacement.'
faqs:
  - question: 'Can I use a laptop charger to power the Chorus ONT?'
    answer: 'No. Do not use generic power adapters. The Chorus ONT requires a very specific 12V 2.0A or 1.5A DC input (depending on the model) with the correct barrel polarity. Using the wrong third-party charger will permanently incinerate the motherboard inside the ONT.'
  - question: 'Who pays if the Chorus box breaks?'
    answer: 'Chorus owns and maintains the ONT unit on your wall for its entire lifespan. If the unit dies due to a power surge, old age, or general hardware failure, Chorus will dispatch a technician to replace it entirely free of charge. You only pay if you physically smashed it with a hammer.'
  - question: 'Why does my ONT have a battery unit attached?'
    answer: 'Older Type 100/200 Chorus ONTs installed before 2018 often came with a large white Battery Backup Unit (BBU) to keep landlines working during power cuts. If the BBU is beeping or the ONT is dead, the 12-volt battery inside the BBU has likely failed. You can safely bypass the BBU entirely by plugging the main power cord directly into the ONT.'
  - question: 'How long does a replacement take?'
    answer: 'Because a dead ONT means a total loss of service (including emergency 111 landline access for some customers), ISPs prioritize these fault tickets. In urban areas (Auckland, Wellington, Chch), a Chorus technician will usually arrive within 24 to 48 hours.'
---

# Chorus ONT Power Light Off? How to Fix a Dead Fibre Box

<div class='instant-fix-box'>
  <p>A completely dark Chorus ONT (Optical Network Terminal) means no power is reaching the motherboard. First, press the physical <strong>On/Off button</strong> hidden on the bottom edge of the box near the cables. Next, bypass any multi-boxes and plug the Chorus power supply directly into the wall socket. If the wall socket works for a lamp but the Chorus box remains completely dark, the AC/DC power brick has failed. Your ISP must log a hardware replacement fault.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Absolute Zero" Broadband Fault

The most confusing internet outage isn't when things run slowly, or when a red light flashes. The most confusing outage is when you look at your Chorus fibre box on the wall, and it is completely, 100% dark. 

No green lights. No red lights. Nothing. 

In the telecom industry, this is known as a "Dead Brick."

Because the Chorus ONT is the physical gateway separating your house from the national fibre optic network, if it has no power, your house is completely severed from the internet. Your Spark, Skinny, or One NZ router can be glowing with happy green Wi-Fi lights, but it is effectively broadcasting an empty signal.

A dead ONT is an urgent hardware failure. But before you spend two hours on hold with your internet provider, you need to perform the standard 2026 diagnostic checklist to ensure you simply haven't bumped a hidden button with the vacuum cleaner.

## Diagnosis Step 1: The Hidden Power Button

Many New Zealanders do not realize the Chorus ONT actually has a physical power button.

Unlike your main Wi-Fi router (which usually sits on a desk), the Chorus ONT is usually bolted to the skirting board in a garage, behind a couch, or inside a dusty hallway cupboard. It is highly susceptible to being hit by vacuum cleaners, brooms, or curious pets.

1.  Crouch down and look at the bottom edge of the white Chorus unit (where all the cables plug in).
2.  If you have the common **Type 300 or Type 400 ONT** (the small, sleek white boxes), look for a tiny black push-button labeled "ON/OFF".
3.  Push it in. 
4.  If the button clicks and the "POWER" or "ALM" light immediately glows green, you have solved the problem. The button was simply bumped.

## Diagnosis Step 2: The Multi-Box Trap

If the button is pushed in but the box is still dead, the problem lies in the electrical supply.

The Chorus AC/DC power adapter is notorious for failing if it receives a power surge. This frequently happens if it is plugged into a cheap, overloaded multi-box (surge protector) alongside a chest freezer, a dryer, and a washing machine in the garage. 

1.  Trace the black power cable from the bottom of the Chorus ONT back to the wall.
2.  If it is plugged into a multi-box, unplug it immediately.
3.  Take a small desk lamp or hair dryer and plug it into the exact socket the Chorus box was using.
4.  If the lamp doesn't turn on, congratulations—your Chorus ONT is fine, but your multi-box has tripped its internal fuse or died. 
5.  Plug the Chorus power supply directly into a main wall socket. The lights should return.

## Diagnosis Step 3: By-Passing the Old Battery Unit

If your house was connected to fibre back in the early days of the UFB rollout (2014-2018), you likely have a massive, two-part installation. You will have the ONT on the wall, and next to it, a large white plastic box with a Chorus logo on it.

This is a **BBU (Battery Backup Unit)**. It contains a heavy 12-volt lead-acid battery designed to power the ONT for two hours during a blackout so your home landline phone would still work to dial 111.

Fast forward to 2026, and that battery is now completely dead. When the battery fails completely, the BBU circuitry often trips and stops sending power to the ONT, killing your internet.

**The Fix:** You do not need the BBU. Chorus has officially deprecated them because very few people use copper landlines anymore.

1.  Unplug the thick white power cord that runs from the wall into the large BBU box.
2.  Look for a thinner black cable that runs between the BBU and the ONT.
3.  Unplug that black cable from the ONT.
4.  Take the main white power cord (the piece that plugs into the wall socket) and plug the round barrel directly into the "POWER" port on the bottom of the ONT.
5.  Turn the wall switch on.

You have successfully bypassed the fried battery unit. The ONT will power up, and you can throw the heavy BBU box in the e-waste recycling.

<AdSenseBlock slot='article-middle' />

## The "Burnt Plastic" Test (Hardware Death)

If the ONT is plugged directly into a known-working wall socket, the power button is pushed in, and there are still no lights, the hardware is definitively dead.

Perform a quick smell test near the power socket or the ONT itself. If you smell an acrid, sharp scent of ozone or burned plastic, the unit has suffered a catastrophic power surge (often after a thunderstorm or a local neighborhood power cut). The capacitors on the motherboard have exploded. 

Do not keep trying to turn it on. It is a severe fire hazard. 

## Claiming Your Free Replacement

Here is the good news: **You do not own the Chorus ONT. Chorus does.** 

Because it represents the physical boundary point of the national network, Chorus is legally and financially responsible for maintaining it. If the unit dies from old age or a power surge, the replacement is 100% free.

However, Chorus will not log a fault if you call them directly. You must go through your retail ISP.

### The Script to Guarantee a Fast Tech Visit

When you call your ISP (Spark, One NZ, Contact, etc.), the frontline call center agent is trained to read from a script. They will try to get you to reboot your Wi-Fi router, change the Wi-Fi channel, or factory reset the modem. 

Do not let them waste 45 minutes of your time. If the ONT is a dead brick, tell them this exactly:

> *"I am reporting a Total Loss of Service. The Chorus ONT on the wall has zero lights. I have verified the wall power socket is working with a lamp. I have ensured the physical on/off button on the ONT is pushed in. The ONT's internal power supply is dead and making no noise. I require an urgent hardware replacement fault ticket to be passed to Chorus immediately."*

By using the phrase **"Total Loss of Service,"** you bypass the tier-1 Wi-Fi troubleshooting script.

Because a dead ONT means you cannot theoretically dial emergency services (111) if you have a VoIP landline plan, these tickets are flagged as High Priority. A Chorus sub-contractor (like Downer or Visionstream) will typically text you within a few hours to schedule a replacement visit, which usually happens the next business day. 

The technician will arrive, unscrew the dead unit off the wall, clip a brand new, modern Type 400 ONT into place, scan the barcode to register the new serial number to your account, and leave. Your internet will be back online exactly as it was before.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
