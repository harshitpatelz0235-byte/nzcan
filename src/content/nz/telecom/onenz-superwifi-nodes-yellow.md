---
title: 'One NZ SuperWiFi Nodes Blinking Yellow? The Placement Mistake You Are Making'
description: 'Are your One NZ SuperWiFi nodes constantly blinking yellow instead of solid green? Learn why this indicates a weak backhaul connection and exactly how to position them in your NZ home for maximum Gigabit speeds.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/onenz-superwifi-yellow.png'
tags: ['One NZ', 'SuperWiFi', 'Blinking Yellow', 'Mesh Wi-Fi', 'NZ Tech']
instantAnswer: 'A blinking yellow light on a One NZ SuperWiFi node means it is receiving a weak signal from the main router. To fix it, move the node exactly halfway between the main router and the Wi-Fi dead zone. Do not put the node inside the dead zone. Keep it away from microwaves, hot water cylinders, and thick concrete walls.'
faqs:
  - question: 'What does a solid red light mean on the SuperWiFi node?'
    answer: 'A solid red light means the node has completely lost its connection to the main hub. Try moving it much closer to the primary router or perform a sync by pressing the WPS buttons on both devices within 2 minutes of each other.'
  - question: 'Can I connect the nodes using an Ethernet cable?'
    answer: 'Yes. This is called Ethernet Backhaul and is the absolute best way to set up SuperWiFi. If your house has Ethernet ports in the walls, plug the SuperWiFi node directly into the wall port. The light will turn solid green immediately, and you will get maximum speeds.'
  - question: 'How far apart should the nodes be placed?'
    answer: 'In a typical New Zealand timber-framed house, nodes should be placed about 8 to 12 meters apart. If your house has concrete block walls or brick internal walls, they need to be much closer, roughly 5 to 7 meters apart.'
  - question: 'Why was the light green yesterday but yellow today?'
    answer: 'Signal strength can be affected by interference or physical changes. Did someone move a large metal object (like a filing cabinet or mirror) between the nodes? Is a neighbour using a new Wi-Fi router on an overlapping channel? Try rebooting the node to force it to find a cleaner channel.'
---

# One NZ SuperWiFi Nodes Blinking Yellow? The Placement Mistake You Are Making

<div class='instant-fix-box'>
  <p>A blinking yellow light on your One NZ SuperWiFi node means "weak connection to the main hub." The mistake most people make is putting the node exactly where the Wi-Fi is bad (the dead zone). This is wrong because the node itself needs a strong signal to re-broadcast. Move the node exactly halfway between your main modem and the Wi-Fi dead zone, ensuring a clear line of sight through open doorways where possible.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Wall-to-Wall" Wi-Fi Promise vs Reality

One NZ (formerly Vodafone) markets their SuperWiFi system as the ultimate solution for "wall-to-wall" internet coverage in New Zealand homes. The system uses mesh technology—a primary hub connected to your fibre box, and one or more secondary "nodes" placed around the house to extend the signal.

When it works perfectly, the LED indicator on the front of the nodes is a comforting, solid green.

But if you are reading this article, yours is likely blinking yellow. Or perhaps it flips between green and yellow depending on the time of day. Or worse, it turns solid red.

When a node is blinking yellow, it is struggling to communicate with the main hub (a connection called the **backhaul**). Your devices (phones, laptops) might connect to the nearby node with full Wi-Fi bars, but because the node's connection back to the internet is terrible, your speeds will be crawling at 10Mbps and your video calls will drop.

The most common reason for a blinking yellow light is not a broken node. It is a fundamental misunderstanding of how mesh Wi-Fi physics work, particularly in New Zealand housing construction.

## The Fatal Mesh Mistake: The Dead Zone Trap

This is the scenario that plays out in almost every kiwi home with SuperWiFi:

1.  You discover the back bedroom (or the sleep-out) gets terrible Wi-Fi. It is a "dead zone."
2.  You contact One NZ and get the SuperWiFi nodes.
3.  You unbox a node, walk straight into the back bedroom, plug it into the wall, and turn it on.
4.  The light blinks yellow. Your speeds in the bedroom are still terrible.

**Why does this happen?**

A mesh node does not magically generate internet out of thin air. It is a repeater. It catches the Wi-Fi signal from the main router and shouts it further down the house. If you put the node *inside* the dead zone, the node is trying to catch a signal that is already dead.

If your phone cannot get a good signal in that bedroom, the SuperWiFi node cannot get a good signal there either.

## The Halfway Rule: How to Fix the Yellow Light

To fix the yellow light and get maximum Gigabit speeds, you must follow the **Halfway Rule**.

The node must be placed roughly **halfway** between the main router and the dead zone.

*   The node needs to be close enough to the main router to receive a massive, high-speed chunk of data (this keeps the light solid green).
*   It needs to be close enough to the dead zone to blast that high-speed data the rest of the way (providing the coverage you want).

**Example Scenario:**
Your main UltraHub is in the lounge at the front of the house. The master bedroom at the back of the house has no signal. The kitchen is in the middle.

*   **Wrong placement:** Putting the node in the master bedroom. (Result: Blinking yellow light).
*   **Correct placement:** Putting the node in the kitchen or the hallway just outside the kitchen. (Result: Solid green light on the node, and full Wi-Fi bars in the master bedroom).

<AdSenseBlock slot='article-middle' />

## NZ Housing Materials That Kill SuperWiFi

If you have followed the halfway rule and the node is *still* blinking yellow, the problem is likely what sits between the main router and the node.

Radio waves hate certain materials. In New Zealand, our houses are full of things that destroy the 5GHz Wi-Fi frequencies that the SuperWiFi nodes use to communicate with each other.

If there is a straight line drawn between your main router and your SuperWiFi node, make sure none of the following are blocking that path:

### 1. The Hot Water Cylinder
This is the number one Wi-Fi killer in standard NZ timber-framed homes. A hot water cylinder is a massive metal tank filled with 200 liters of dense liquid. It creates an almost impenetrable shadow for Wi-Fi. Never place a node on the opposite side of a hot water cupboard from the main router.

### 2. Underfloor Heating Control Boards and Switchboards
If your main router is in the garage near the main electrical switchboard, the electromagnetic interference (EMI) from the breakers and smart meters can severely degrade the signal leaving the garage. 

### 3. Concrete Block Walls
If you live in a 1970s block house (common in Auckland and Wellington) or a house with structural brick interior walls, a Wi-Fi signal will struggle to pass through even a single wall. The radio waves are absorbed by the dense masonry.

### 4. Mirrors and Fish Tanks
Large bathroom mirrors reflect radio waves just as they reflect light. A 500-liter fish tank in the lounge absorbs radio waves just like a hot water cylinder.

### How to Bypass Obstacles
If you have concrete walls or a hot water cylinder blocking the path, you cannot use a straight line. You have to bounce the signal. Place a node in the hallway where it has "line of sight" through the open doorways of both the room with the router and the room you are trying to reach.

## The Ultimate Fix: Ethernet Backhaul

If your house design makes wireless mesh impossible without hitting yellow lights, there is a guaranteed, 100% reliable fix that professionals use: **Ethernet Backhaul**.

The SuperWiFi nodes have Ethernet ports on them. If you run an Ethernet cable from a LAN port on the main router directly into the LAN port on the SuperWiFi node, the node no longer uses wireless to talk to the hub. It uses the physical cable.

*   The light will immediately turn solid green.
*   The node will deliver the full speed of your fibre connection to the dead zone.
*   There will be zero latency additions (perfect for gaming).

If you live in a newer house built after 2010, you might already have Ethernet ports wired into your wall plates.
1. Plug a short cable from the main router into the wall port in the lounge.
2. Go to the bedroom, plug a short cable from the wall port into the SuperWiFi node.
3. You have just created a flawless wired backhaul.

If your house is not pre-wired, it is often worth paying a local sparky (electrician) $150 to run a single Cat6 Ethernet cable under your floor or through the roof space to the other end of the house. It permanently solves all mesh Wi-Fi issues.

## What to Do If the Light Turns Solid Red

A blinking yellow light means a weak connection. A **solid red** light means zero connection. The node is completely orphaned from the mesh network.

If moving the node right next to the main router does not turn the light green, the node has lost its synchronization pairing. You need to re-pair it.

### How to Re-Sync a SuperWiFi Node

1.  Bring the problematic node into the same room as the main router and plug it into power.
2.  Wait 2 minutes for it to boot up (the light will likely be red).
3.  Press the **WPS button** on the main UltraHub router.
4.  Within 2 minutes, press the **WPS button** on the SuperWiFi node.
5.  The lights on both devices will flash as they negotiate the pairing.
6.  Once the light on the node goes solid green, the pairing is successful.
7.  Unplug the node and move it back to your carefully chosen "halfway" location.

## Understanding the Node's Advanced Metrics

If you want to view the exact diagnostic data the One NZ technicians see, you can log into the mesh network management page.

1.  On a connected device, go to **192.168.1.254** and log in (admin/admin or check base sticker).
2.  Navigate to the **SuperWiFi** or **Mesh Topology** tab.
3.  Click on the specific node that is giving you trouble.

You are looking for the **RSSI (Received Signal Strength Indicator)** value.

*   **-30dBm to -60dBm:** Excellent (Solid Green Light)
*   **-61dBm to -75dBm:** Acceptable, but speeds might drop slightly (Solid Green Light)
*   **-76dBm to -85dBm:** Weak signal. Prone to dropouts. (Blinking Yellow Light)
*   **-86dBm or lower:** Dead connection. (Solid Red Light)

If your RSSI is hovering around -76dBm, the node is sitting right on the edge of the yellow light threshold. Moving the node just 50 centimeters Left or Right can sometimes bounce the signal around a wall stud and improve the RSSI by 5dB, turning the light green.

## Do I Need More Nodes?

One NZ typically supplies two nodes with their SuperWiFi packages. If you have a large two-story house, or an elongated single-story house (like a classic Kiwi bungalow with a flat extension on the back), two nodes might not be enough to bridge the distance using the Halfway Rule.

In this scenario, you need to "daisy-chain" the nodes.

1.  Main router in Lounge.
2.  Node 1 in the middle hallway (connects to router).
3.  Node 2 in the back bedroom (connects to Node 1, not the router).

If you need a third node to achieve this, you will need to purchase an 'add-on' node from One NZ or look on TradeMe for a second-hand unit. Be aware that every wireless "hop" in a daisy chain halves the maximum throughput speed. By the time the signal reaches Node 3 via wireless backhaul, your 900Mbps fibre connection might only deliver 150Mbps to that final room.

This is why, for large houses, the **Ethernet Backhaul** method mentioned earlier is always the superior choice.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
