---
title: 'Skinny 4G Rural Broadband: The Secret External Antenna Mod'
description: 'Living rurally with terrible Skinny 4G speeds? The supplied modems have hidden SMA ports designed for external antennas. Learn how to install a directional Yagi antenna on your roof to triple your rural broadband speeds.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/skinny-4g-antenna-mod.png'
tags: ['Skinny', '4G Broadband', 'Rural Internet', 'External Antenna', 'SMA Ports', 'NZ Tech']
instantAnswer: 'Skinny 4G modems (like the Huawei B315, B618, or newer ZTE models) have two hidden SMA antenna ports on the back, usually covered by a plastic flap. Buy a 4G MIMO directional antenna from PB Tech or Jaycar. Mount it on your roof facing the nearest Spark cell tower. Run the twin coax cables inside and screw them into the modem ports. Finally, log into 192.168.1.254 and change the antenna setting from "Auto" to "External."'
faqs:
  - question: 'What kind of antenna do I need to buy in NZ?'
    answer: 'You need a "4G LTE MIMO" (Multiple Input Multiple Output) antenna. Because Skinny uses the Spark 4G network, ensure the antenna supports Band 3 (1800MHz), Band 7 (2600MHz), and Band 28 (700MHz). Jaycar and PB Tech sell excellent kits ranging from $150 to $350.'
  - question: 'Do I need to plug in both antenna cables?'
    answer: 'Yes. Modern 4G uses MIMO technology, which means it transmits and receives on two separate polarized radio channels simultaneously. If you only plug in one cable, your download speed will be artificially cut in half.'
  - question: 'Can I use an old Sky TV dish to get 4G?'
    answer: 'No. An old Sky dish is tuned for Ku-Band satellite frequencies from space, not terrestrial 4G cellular frequencies. However, you can use the sturdy metal mounting pole left behind by the Sky dish to mount your new 4G antenna.'
  - question: 'Does Skinny allow you to modify the modem?'
    answer: 'Yes. Opening the plastic flap on the back to access the SMA ports does not void the warranty, and Skinny does not prohibit the use of external antennas. They simply do not provide the antennas or the installation service themselves.'
---

# Skinny 4G Rural Broadband: The Secret External Antenna Mod

<div class='instant-fix-box'>
  <p>To fix slow Skinny 4G rural speeds, mount a <strong>4G MIMO directional antenna</strong> to your roof, pointing at the nearest Spark cell tower. Run the two coax cables into your house. Pop open the plastic rectangular flap on the back of your Skinny modem to reveal two brass SMA ports. Screw the cables in firmly. Log into the modem at <strong>192.168.1.254</strong> (admin/admin), go to Device Settings > Antenna Settings, and change it from Auto to <strong>External</strong>.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Reality of Rural NZ Broadband

If you live in a rural or semi-rural part of New Zealand—whether you are on a lifestyle block in Waikato, a farm in Southland, or a bach in the Coromandel—you likely cannot get Chorus Fibre.

For years, your only option was a slow, weather-dependent copper ADSL connection. Then Skinny (Spark's budget brand) launched their 4G Wireless broadband. They send you a modem, you plug it into the wall, it connects to the nearest Spark cell tower, and you get "broadband."

But if you live more than 5 kilometers from that tower, or if your house is behind a hill or surrounded by dense pine trees, the reality is miserable. The modem sits in your lounge showing only one or two bars of signal. Your download speed hovers around 4Mbps, Netflix constantly buffers, and video calls drop out.

The customer support team will tell you to "move the modem closer to a window." This rarely works. 

The real solution is **The External Antenna Mod.** It is the single most effective hardware upgrade you can make to a rural 4G connection, frequently turning an unusable 4Mbps connection into a rock-solid 50Mbps connection.

## The Hidden SMA Ports on Your Skinny Modem

Skinny does not advertise this feature, but the hardware manufacturers they use (Huawei and ZTE) design these modems for global, industrial use.

Look at the back of your white or black Skinny 4G modem (common models include the Huawei B315, B618, B818, or the newer ZTE equivalents). 

Above the Ethernet ports, you will see a small, rectangular plastic cover or two small rubber bungs. If you pry this plastic cover off with a fingernail or a flathead screwdriver, you will discover two threaded, gold-colored brass connection points. 

These are **SMA (SubMiniature version A) female ports**.

They exist precisely so you can bypass the weak internal antennas hidden inside the plastic modem casing and attach a massive, high-gain antenna mounted outside on your roof.

## Step 1: Buying the Right Antenna

You cannot just buy a random TV aerial from Bunnings. You need an antenna specifically tuned to the radio wave frequencies used by the Spark 4G network in New Zealand. 

In 2026, Spark’s primary rural 4G network operates on **Band 28 (700MHz)** for long distance, and **Band 3 (1800MHz)** for capacity.

Here is what you need to look for at stores like PB Tech, Jaycar, or GoWireless NZ:

1.  **It must be a "Directional" antenna.** Specifically, a "Yagi" or "Panel" antenna design. You do not want an "Omni-directional" antenna (a simple stick that points straight up), because Omni antennas catch too much background noise. A directional antenna focuses all its listening power in one specific direction.
2.  **It must be MIMO (Multiple Input, Multiple Output).** This means the unit actually contains two antennas inside the plastic shell, arranged at opposing 45-degree angles (Cross-Polarized). The antenna must have **two** cables coming out of it.
3.  **It must have SMA Male connectors.** The ends of the cables must physically screw into the gold ports on the back of your Skinny modem.

*Budget expectation: A high-quality kit including the antenna, the mounting bracket, and 10 meters of low-loss LMR200 coaxial cable will cost between $150 and $350 NZD.*

## Step 2: The Roof Installation

This is a weekend DIY project. If you are not comfortable on a ladder, hire a local TV aerial installer to mount it for you. 

1.  **Mounting:** The higher you can mount the antenna, the better. The goal is "Line of Sight" to the cell tower. The apex of your roof, or an old protruding Sky TV dish pole, is perfect.
2.  **Aiming:** You must point the directional antenna exactly at the nearest Spark cell tower. 
    *   Open your phone, go to **cellmapper.net**, select New Zealand > Spark > 4G. 
    *   Find your house. Find the nearest green dot. 
    *   Use the compass app on your phone to point the nose of the antenna directly toward that coordinates. An accuracy of within 10 degrees is usually required for the fastest speeds.
3.  **Cable Routing:** Run the two thick coaxial cables down the side of your house, through an existing hole in the weatherboards, and into the room where the Skinny modem lives. 
    *   *Crucial Rule:* Do not cut or shorten the cables yourself unless you have the specialized crimping tools for SMA connectors. Coil any excess cable loosely. Do not bend the cables sharply at 90-degree angles, as this damages the internal copper core and destroys the radio signal.

<AdSenseBlock slot='article-middle' />

## Step 3: Connecting and Configuring the Modem

Once the cables are inside, the software configuration begins.

1.  Turn off the Skinny modem.
2.  Screw both SMA cables onto the gold ports on the back of the modem. Screw them on tightly with your fingers. Do not use a wrench; if you overtighten them, you will snap the circuit board inside the modem.
3.  Turn the modem back on.

### Forcing the Modem to Use the External Ports

Some newer modems will automatically detect the electrical resistance of the new cables and switch instantly. However, older Huawei models often need to be forced to use the external ports via the software interface. If you skip this step, the modem will ignore the $300 antenna on your roof and continue using its weak internal antennas.

1.  Connect your laptop or phone to the Skinny Wi-Fi network.
2.  Open a browser and type **192.168.1.254** or **192.168.8.1** into the address bar.
3.  Log in. The default password is usually `admin`, or it is printed on the sticker under the modem.
4.  Navigate to **Settings** > **System** > **Antenna Settings** or **Device Settings**.
5.  You will see a dropdown menu labeled **Status**. It is likely set to *Auto* or *Built-in*.
6.  Change the dropdown to **External** or **Both**.
7.  Click **Apply** or **Save**.

The modem will reboot its radio chipset. When it powers back up, look at the signal light on the front of the modem. If it was previously showing one red or yellow bar, it should now be glowing solid blue or cyan, indicating a strong 4G connection.

## Step 4: Fine-Tuning Your Aim

You are online, but you are not done. You need to fine-tune the physical aim of the antenna on the roof based on real-time data from the modem.

Speed tests (like Ookla) are misleading for this because they fluctuate based on street-level congestion. Instead, you need to read the raw radio metric called **SINR (Signal to Interference & Noise Ratio)**.

1.  Log back into the modem at 192.168.1.254.
2.  Go to **Advanced** > **System** > **Device Information**.
3.  Look for the row labeled **SINR**.

SINR is measured in decibels (dB). 
*   **Below 0 dB:** Your connection is garbage, surrounded by noise.
*   **5 dB to 10 dB:** Average. The internet will completely work, but speeds won't be maximizing potential.
*   **15 dB to 25 dB:** Excellent. You have isolated the cell tower perfectly.

Have someone stand on the roof, slightly rotating the antenna left and right in 5-degree increments. Have someone inside the house watching the SINR number refresh. Find the specific physical angle that provides the highest SINR number, and lock the antenna bolts down tight.

## What If Speeds Are Still Slow?

If your SINR jumps from 2dB to 20dB, your signal light turns blue, but your 7pm Netflix stream still buffers and your Speedtest only shows 8Mbps, then you have hit the **Congestion Ceiling**.

You have perfectly fixed your physical connection to the tower. The problem is that the Spark tower itself is overloaded.

Skinny 4G operates as a lower-priority tier on the Spark network. If 50 people in your rural valley all get home at 6pm and try to watch 4K YouTube videos at the exact same time, the local cell tower runs out of backhaul bandwidth. Spark's automated network management prioritizes full-price Spark Mobile customers first, and aggressively throttles Skinny 4G broadband customers to protect the tower from crashing.

If this happens every night regardless of your massive shiny roof antenna, the hardware is not the problem. You simply live in a congested cell sector. Your only recourse in 2026 is to cancel the Skinny contract and investigate a Low Earth Orbit (LEO) satellite provider like Starlink, which bypasses congested local cell towers entirely.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
