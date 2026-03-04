---
title: 'Chorus Box Battery Light Flashing: The $15 Bunnings Fix'
description: 'Your Chorus fibre box has a flashing battery light that will not stop. Learn what is causing it, how to buy the exact replacement battery at Bunnings NZ for $15, and the 5-minute swap process that saves you a $160 Chorus technician fee.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/chorus-battery-light.png'
tags: ['Chorus', 'Battery', 'Bunnings', 'ONT', 'Fibre Box', 'NZ Tech']
instantAnswer: 'The flashing battery light on your Chorus fibre box means the backup battery is dying or dead. Buy a 12V 7Ah sealed lead-acid (SLA) battery from Bunnings Warehouse for around $15 to $19 NZD. Open the battery compartment, unplug the old battery, drop in the new one, and plug the connector back in. The light stops flashing within minutes.'
faqs:
  - question: 'Which Bunnings aisle has the ONT battery?'
    answer: 'The 12V 7Ah SLA batteries are typically found in the electrical aisle near the security alarm batteries and emergency lighting supplies. If you cannot find them, ask a staff member for a 12-volt 7-amp-hour sealed lead-acid battery. They will know exactly what you need.'
  - question: 'Can I use a different battery size?'
    answer: 'The battery compartment is designed for a standard 12V 7Ah SLA battery. A 12V 9Ah battery may physically fit in some models but could cause slow charging issues. Stick with the 7Ah size for compatibility.'
  - question: 'The light is still flashing after I put the new battery in. What is wrong?'
    answer: 'The new battery may need a few hours to charge before the light stops. If it is still flashing after 12 hours, the battery charge controller inside the ONT or BBU may be faulty. In that case, contact your ISP to raise a Chorus fault ticket.'
  - question: 'Do I need to turn off the internet to change the battery?'
    answer: 'No. You can swap the battery while the ONT is powered on and your internet is running. The battery is on a separate circuit. Just unplug the old battery connector, remove the old battery, insert the new one, and reconnect.'
---

# Chorus Box Battery Light Flashing: The $15 Bunnings Fix

<div class='instant-fix-box'>
  <p>A flashing battery light on your Chorus fibre box means the internal backup battery needs replacing. You do not need a technician. Walk into any Bunnings Warehouse in NZ, buy a 12V 7Ah sealed lead-acid battery from the electrical aisle for around $15 to $19 NZD, and swap it yourself in under 5 minutes. This saves you the $160 Chorus truck roll fee.</p>
</div>

<AdSenseBlock slot='article-top' />

## What That Flashing Light Actually Means

Every Chorus fibre installation in New Zealand includes some form of backup battery system. Its sole purpose is to keep your home phone line operational during a power outage. When the New Zealand government mandated the transition from copper to fibre, there was a safety concern. With copper, phones worked during power cuts because the telephone exchange sent power down the copper wire. With fibre, no power means no phone.

To address this, Chorus installed Battery Backup Units (BBUs) alongside the Optical Network Terminal (ONT) in every home and business. These BBUs contain a rechargeable battery that kicks in during power outages to keep the voice port alive for emergency 111 calls.

The flashing battery light means one of three things:

1.  **Battery at End of Life:** The most common cause. Sealed lead-acid batteries last 3 to 5 years depending on temperature and charge cycles. If your fibre was installed before 2023, the battery is now in the danger zone.
2.  **Battery Disconnected:** Someone (a builder, a cleaner, a child) accidentally unplugged the battery connector. The BBU detects the missing battery and signals with the flashing light.
3.  **Battery Charge Controller Failure:** Rare, but the circuit inside the BBU that charges the battery can fail. In this case, even a new battery will not fix the flashing light.

In 95 percent of cases, it is simply an old battery. Replacing it is one of the simplest DIY tasks in your home. You do not need any tools. You do not need any technical knowledge. And you definitely do not need to pay $160 for a Chorus technician to do a 5-minute battery swap.

## Identifying Your Battery Setup

Before heading to Bunnings, you need to figure out which type of battery setup you have. There are two common configurations in NZ homes:

### Configuration 1: External Battery Backup Unit (Most Common)

This is a separate white or grey box mounted on the wall near your ONT. It is roughly the size of a thick paperback book. A short cable connects it to the ONT. The battery is inside this external box.

This setup is found with:
*   Nokia G-240W-A ONTs (most common in NZ)
*   Some Huawei ONTs in Northland and Waikato regions
*   Calix ONTs in some rural areas

### Configuration 2: Internal Battery (Less Common)

On some older ONT models, the battery is housed inside the ONT unit itself, accessible through a removable panel on the bottom or back. This setup was more common in early fibre installations (2015-2018) and is becoming rare as Chorus upgrades equipment.

### Configuration 3: No Battery (Newer Installations)

Since approximately 2023, Chorus has stopped installing BBUs in many new fibre connections. If your fibre was installed recently and you do not see a separate battery box or a battery indicator light, your installation may not have a BBU at all. In this case, there is no battery to worry about.

## The Exact Battery You Need

This is important because buying the wrong battery wastes your money and your time. Here are the exact specifications:

**Battery Type:** Sealed Lead-Acid (SLA) or Absorbed Glass Mat (AGM)
**Voltage:** 12V (twelve volts)
**Capacity:** 7Ah (seven amp-hours)
**Dimensions:** Approximately 151mm x 65mm x 94mm (standard SLA size)
**Connector:** Faston 187 tab connectors (the standard spade connectors used on all NZ Chorus BBUs)

### Where to Buy in New Zealand

| Store | Product Name | Price (2026 NZD) | Location Tips |
| :--- | :--- | :--- | :--- |
| **Bunnings Warehouse** | 12V 7Ah SLA Battery | $15.90 to $18.90 | Electrical aisle, near alarm batteries |
| **Jaycar Electronics** | 12V 7Ah SLA (SB2486) | $22.50 | Staff know it as 'Chorus battery' |
| **Mitre 10** | 12V 7Ah Gel Battery | $17.95 to $19.95 | Not all stores stock it |
| **PB Tech** | UPS Replacement 12V 7Ah | $24.99 | Same battery, different packaging |
| **The Warehouse** | Does not stock | N/A | Do not waste a trip |
| **Noel Leeming** | Does not stock | N/A | Try PB Tech instead |

**Bunnings** is the cheapest and most widely available option. Every Bunnings in NZ stocks these batteries because they are also used in security alarm systems, emergency exit lights, and UPS backup units. Walk in, go to the electrical aisle, look for the small grey or black batteries near the alarm systems.

If you are ordering online, search for '12V 7Ah SLA battery' on the Bunnings, Jaycar, or PB Tech websites. Most offer same-day click-and-collect.

### What NOT to Buy

Do not buy:
*   **Lithium batteries** — Different voltage curve, will damage the charge controller
*   **Car batteries** — Wrong voltage (car batteries are 12V but much too large and have different discharge characteristics)
*   **Rechargeable AA battery packs** — Wrong voltage and connector
*   **6V batteries** — Half the required voltage, will not work at all
*   **12V 12Ah or larger** — Physically will not fit in the battery compartment

<AdSenseBlock slot='article-middle' />

## Step-by-Step Battery Replacement

### For External BBU (Most Common Setup)

1.  **Locate the BBU.** Look on the wall near your ONT. It is the smaller box, usually mounted below or beside the ONT. It may have a small LED or a flashing amber/orange light on the front.

2.  **Open the Battery Cover.** Most BBU enclosures have a **flip-up lid** or a **slide-off panel**. There are no screws on the standard NZ models. Press the tab or latch and lift. If yours has a screw, use a Phillips-head screwdriver to remove it.

3.  **Identify the Old Battery.** Inside, you will see a black or grey rectangular battery. It looks like a small brick. There will be a **white or red connector** attached to the battery terminals at the top.

4.  **Disconnect the Connector.** Gently pull the connector straight out from the battery terminals. It clips on with a friction fit. Pull firmly but straight. Do not yank it sideways or you may damage the wires. **The flashing light should stop immediately** once the battery is disconnected.

5.  **Remove the Old Battery.** Lift the battery out. It will feel surprisingly heavy for its size (about 2.5kg) because it contains lead plates and sulfuric acid (safely sealed inside the casing).

6.  **Insert the New Battery.** Place the new 12V 7Ah battery into the compartment with the terminals facing the same direction as the old battery. Make sure it sits flat and stable.

7.  **Reconnect the Connector.** Push the white or red connector onto the new battery terminals. You should feel it click or snap into place. Make sure the positive (red or +) terminal connects to the positive wire.

8.  **Close the Cover.** Replace the lid or panel.

9.  **Check the Light.** The battery indicator LED should now either be off (battery fully charged) or a solid amber/green indicating the battery is charging. It may take 6 to 12 hours for the new battery to reach full charge. During this time, a solid amber light is completely normal.

### For Internal Battery (Older ONTs)

1.  **Find the Battery Panel.** Look at the bottom or back of the ONT. There should be a removable panel or door.
2.  **Open the Panel.** Use a screwdriver if needed, or slide the panel off.
3.  **Follow Steps 4 through 9 above.** The process is identical once you access the battery.

## Disposing of the Old Battery Safely

Sealed lead-acid batteries must be disposed of responsibly. They contain lead and sulfuric acid, which are hazardous materials. Do not throw them in your regular rubbish or recycling bin.

### Free Battery Recycling in NZ

*   **Bunnings Warehouse:** Most stores have a battery recycling drop-off point near the entrance. Simply hand the old battery to a staff member or place it in the designated bin.
*   **Mitre 10:** Many stores accept old batteries for recycling.
*   **Local Council Transfer Station:** Your local council tip accepts batteries for hazardous waste recycling. No charge.
*   **Battery recycling programs:** Search 'battery recycling NZ' for your nearest drop-off location. The **Battery Industry Group NZ** maintains a database of collection points.

## When a New Battery Does Not Fix the Problem

If you have installed a fresh 12V 7Ah battery and the light is still flashing after 24 hours, the issue is likely one of these:

### Faulty Charge Controller

The circuit board inside the BBU that manages battery charging may have failed. This is not user-repairable. Contact your ISP and say:

> 'I have replaced the battery in my Chorus BBU with a new 12V 7Ah SLA battery. The battery indicator light is still flashing after 24 hours. I suspect the charge controller circuit inside the BBU has failed. Can you raise a Chorus fault ticket for a BBU replacement?'

### Corroded Connector

Look at the white connector you plugged into the battery. If the metal contacts look green, brown, or crusty, they are corroded. Gently clean them with a dry cloth or fine sandpaper. If the corrosion is severe, the connector may need replacing.

### Wrong Battery Voltage

Double-check that you bought a **12V** battery, not a 6V. This is the most common purchase mistake. A 6V battery will not provide enough voltage for the charge controller to recognize it.

## Do You Actually Need the Battery?

Let me give you the honest answer that saves you $15. If you do not use a landline phone connected to your Chorus ONT, you do not need the battery. Period.

The battery exists solely for voice service backup during power cuts. Your internet, your Wi-Fi, your streaming, your gaming — none of these use the battery. They only need the ONT to have mains power.

**You do NOT need the battery if:**
*   You use a mobile phone for all calls (most NZ households in 2026)
*   You do not have a phone plugged into the ONT
*   Your area has reliable mobile coverage for 111 calls

**You SHOULD keep a working battery if:**
*   You have an elderly family member on a landline
*   You live in a rural area with poor mobile reception
*   You have a medical alarm connected to the landline
*   Your area frequently loses power for extended periods

If you do not need the battery, simply disconnect the old one (step 4 above) and leave the compartment empty. The flashing light stops, the beeping stops, and your internet continues working exactly as before.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
