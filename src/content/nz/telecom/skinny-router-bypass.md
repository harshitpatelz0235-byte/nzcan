---
title: 'Skinny Unlimited Broadband: How to Bypass Their Crappy Supplied Router'
description: 'Skinny broadband is cheap, but their supplied router is awful. Learn exactly how to replace the Skinny modem with your own high-performance router using Spark’s VLAN 10 settings, and instantly improve your Wi-Fi.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/skinny-router-bypass.png'
tags: ['Skinny', 'Router Replacement', 'VLAN 10', 'Broadband', 'NZ Tech']
instantAnswer: 'You can replace the Skinny-supplied router with any standard third-party router (like Asus, TP-Link, or Netgear). Connect your new router’s WAN port to the Chorus ONT. In the router settings, change the Internet connection type to Dynamic IP (DHCP) and enable VLAN Tagging with a VLAN ID of 10. No username or password is required.'
faqs:
  - question: 'Does Skinny allow you to use your own router?'
    answer: 'Yes, absolutely. Under NZ telecommunications regulations, you have the right to use BYOD (Bring Your Own Device) equipment on any standard fibre or VDSL connection. Skinny cannot force you to use their supplied modem.'
  - question: 'What router should I buy to replace the Skinny one?'
    answer: 'Any modern router that supports 802.1Q VLAN Tagging will work. In 2026, we highly recommend the TP-Link Archer AX73 for larger homes, or the Asus RT-AX86U Pro if you are a gamer looking for low latency.'
  - question: 'Do I need a PPPoE username and password?'
    answer: 'No. Unlike some older NZ ISPs, Skinny (run by Spark) uses IPoE (DHCP) authentication on their fibre network. You do not need to enter a username or password into your new router, just the VLAN 10 tag.'
  - question: 'What do I do with the old Skinny modem?'
    answer: 'Keep it in the cupboard. If you ever have a physical line fault and need to call Skinny support to get a Chorus technician out, they will often require you to plug their supplied modem back in to run their remote diagnostic tests.'
---

# Skinny Unlimited Broadband: How to Bypass Their Crappy Supplied Router

<div class='instant-fix-box'>
  <p>To replace your Skinny-supplied modem with your own high-performance router, connect your new router's WAN port to Port 1 on the Chorus Fibre box. Log into your new router's admin page, set the Internet Connection Type to **Dynamic IP (DHCP)**, and enable **VLAN Tagging** with **VLAN ID 10** (Priority 0). Click save, wait 60 seconds, and you're online.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Cheap Broadband, Cheap Hardware" Reality

Skinny Broadband is brilliant for one specific reason: it uses the exact same top-tier Spark network infrastructure as Spark's premium customers, but at a heavily discounted price. It is arguably the best value broadband in New Zealand.

But there is a catch. To keep those monthly prices so low, Skinny drastically cuts costs on the hardware they ship you.

If you sign up in 2026, you will likely receive a white, unbranded Smart Modem (essentially a stripped-down version of Spark's older hardware) or even an older Huawei HG659 variant if you are on VDSL. These routers have weak internal antennas, terrible traffic management chips, and firmware that was never designed for a modern home with 20+ smart devices connected simultaneously.

You pay for 300Mbps or 900Mbps fibre, but the Skinny router bottlenecks your Wi-Fi speeds to 80Mbps and drops Zoom calls the moment someone else in the house turns on the TV.

The solution is incredibly simple: **throw the Skinny router in a cupboard and install your own.**

Despite what some support agents might imply, replacing the router does not breach your contract, and you do not need permission. You just need to know the secret configuration settings that connect a non-Skinny router to the Spark/Skinny network. Let's do it.

## Step 1: Buying the Right Replacement Router

Before you start unplugging things, you need to buy a router that is actually capable of replacing the Skinny unit. Not every router on the shelf at Noel Leeming will work in New Zealand.

**The Golden Rule:** The router **MUST** support **802.1Q VLAN Tagging** on the WAN port. Standard Chorus NZ fibre connections require all traffic to be tagged with VLAN 10. If the router cannot do this, it will never connect to the internet, no matter what you try.

### Top Recommendations for NZ Homes in 2026

1.  **The All-Rounder: TP-Link Archer AX73 ($180 - $220 NZD)**
    *   *Where to buy:* PB Tech, JB Hi-Fi
    *   *Why we love it:* It has massive external antennas that easily punch through Kiwi timber walls, handles 50+ devices without breaking a sweat, and makes configuring VLAN 10 incredibly easy in its setup wizard.
2.  **The Gamer's Choice: ASUS RT-AX86U Pro ($350 - $400 NZD)**
    *   *Where to buy:* PB Tech, Computer Lounge
    *   *Why we love it:* ASUS firmware is the best in the business. It has dedicated QoS (Quality of Service) to keep your ping low in gaming even while someone else is downloading updates.
3.  **The Large Home Setup: Google Nest WiFi Pro Mesh ($350+ NZD)**
    *   *Where to buy:* Noel Leeming, Harvey Norman
    *   *Why we love it:* Replaces the router entirely with multiple nodes spread around the house. Note: Google hardware requires a slightly different VLAN setup process via their app, which we cover below.

## Step 2: Physical Disconnection and Reconnection

This is the easy part. Be careful with the fibre cables; they break easily if bent or stepped on.

1.  Find your Chorus Optical Network Terminal (ONT). It is the white or grey box permanently attached to the wall.
2.  Trace the Ethernet cable that runs from the Chorus box to the existing Skinny router.
3.  Unplug the Ethernet cable from the Skinny router. Leave the other end plugged into the Chorus box (usually Port 1 or GE1).
4.  Unplug the power from the Skinny router and put it in a cupboard. (Do not throw it away; you might need it for diagnostics if the physical line ever breaks).
5.  Plug your brand new router into the wall power.
6.  Take the Ethernet cable coming from the Chorus box and plug it into the **WAN** or **Internet** port on your new router. (This port is usually a different color, like blue or yellow, separated from the other LAN ports).
7.  Turn the new router on.

## Step 3: The Secret Network Configuration (VLAN 10)

Your new router is physically connected, but right now the Chorus network is completely ignoring it. We need to tell the router how to introduce itself using **VLAN 10**.

### If you bought an ASUS Router:
1. Connect your phone or laptop to the new ASUS Wi-Fi network (details are usually on a sticker on the router).
2. Open a browser and go to `router.asus.com`.
3. Follow the initial setup wizard to create an admin password.
4. When it asks for your Internet Connection Type, select **Automatic IP (DHCP)**.
5. In the left menu, go to **LAN**, then select the **IPTV** tab at the top.
6. Look for **Select ISP Profile**. Change it from "None" to **Manual Setting**.
7. In the row labeled **Internet**, type the number **10** into the **VID** box. Leave priority at 0.
8. Click Apply/Save.

### If you bought a TP-Link Router:
1. Connect to the TP-Link Wi-Fi.
2. Open a browser and go to `tplinkwifi.net` or `192.168.0.1`.
3. Create an admin password.
4. Go to **Advanced**.
5. Go to **Network** -> **Internet**.
6. Set Internet Connection Type to **Dynamic IP**.
7. Scroll down to **IPTV/VLAN**, turn it on.
8. Select **New Zealand** or **Custom** profile. If Custom, type **10** into the Internet VLAN ID box.
9. Click Save.

### If you bought a Google Nest/Mesh System:
1. Google devices MUST be set up using the Google Home app on your phone.
2. Follow the setup wizard until it fails to connect to the internet (this is normal, it does not know the VLAN settings yet).
3. Tap "Advanced Settings" on the failure screen, or access the WAN settings in the app.
4. Look for **VLAN Tagging**.
5. Enable it and type **10** for the VLAN ID.
6. Save and let the router reboot.

<AdSenseBlock slot='article-middle' />

## Wait for the Handshake

Once you hit save on the VLAN settings, watch the lights on your new router.

The router will send a request to the Chorus network tagged with "Hey, I'm VLAN 10." The Chorus network will pass this directly to Skinny (Spark's network core). Skinny's servers will see the request, verify you are a paying customer via the physical line connection, and automatically assign your router a public IP address.

This process takes between 30 and 120 seconds. The "Internet" or "WAN" LED on your new router will turn solid green or white.

You are now online, running a premium router on Skinny's connection. Run a speed test on your phone. If you are standing near the router, you should immediately see speeds matching your actual plan (e.g., 300Mbps to 900Mbps), a far cry from the 80Mbps the old Skinny router was delivering.

## But What If It Still Fails? (Troubleshooting)

If the light stays red and the internet will not connect after 5 minutes, you have hit one of three common roadblocks in NZ.

### Roadblock 1: Port 1 vs Port 2
Look at the Chorus ONT box on the wall. The Ethernet cable must be plugged into the correct active port. For 99% of residential connections, this is **Port 1** (or GE1). If it is plugged into Port 2, Port 3, or Port 4, it will not work unless Chorus specifically provisioned your line differently. Move the cable to Port 1 and reboot the router.

### Roadblock 2: You Actually Have a VDSL Connection
If you do not have a Chorus ONT box on the wall, and your internet comes directly from a telephone jack via a DSL cable, you are on VDSL, not Fibre.
1. A standard router (like the ones recommended above) will not work. Standard routers do not have VDSL modems built-in.
2. You need a **Modem/Router combo** (look for "VDLS2" on the box, e.g., TP-Link Archer VR400).
3. The setup is slightly different: You must select **VDSL** as the connection type, ensure VLAN tagging is still set to **10**, but the authentication might be **PPPoE** instead of DHCP. Skinny uses the generic username `user@skinny.co.nz` and password `skinny` for VDSL PPPoE connections, although modern setups increasingly use IPoE DHCP.

### Roadblock 3: The "Sticky DHCP Lease"
Sometimes, the Skinny network is still holding onto the connection from your old modem. It sees a new router asking for permission and ignores it because it thinks the old router is still active.

**The Fix:**
1. Turn off the new router.
2. Turn off the Chorus ONT box at the wall (unplug its power cable).
3. Go make a cup of coffee. You must wait a full **15 to 20 minutes**.
4. This massive delay forces the Skinny network core to "forget" your old router’s MAC address and clear the DHCP lease.
5. Turn the Chorus box back on. Wait 2 minutes for it to boot.
6. Turn the new router back on. It will now grab a fresh lease successfully.

## Can I Use the Old Skinny Router as a Wi-Fi Extender?

Technically, yes. Practically, it is a terrible idea and you should not do it.

Many people try to connect the old Skinny router to their new router via a long Ethernet cable, hoping to use the Skinny router to broadcast Wi-Fi at the other end of the house.

The problem is that the Skinny routers have notoriously conflicting DHCP handling when put into "bridge" or "access point" modes. They frequently try to allocate IP addresses to network devices, fighting your new router for control and crashing your entire home network. Furthermore, the Wi-Fi antennas in the Skinny unit are still terrible, so you are extending a bad signal.

If you need more coverage, buy a dedicated Mesh system (like the Deco X50) or a proper standalone Access Point. Leave the cheap supplied hardware out of your premium network setup.

## Will Skinny Still Provide Tech Support?

This is the only downside to the BYOD (Bring Your Own Device) approach.

If your internet goes down and you call Skinny support, the first thing they will ask is: "Are you using the modem we supplied?"

If you say no, they will immediately say: "We cannot provide troubleshooting for third-party hardware. Please contact the manufacturer."

They do this because their support agents read from scripts strictly tailored to their supplied hardware. They cannot log into your ASUS router remotely to check your line stats.

**How to handle support calls:**
If you have an internet outage and suspect it is a Chorus network problem, plug the old Skinny router back in *before* you call them. Let it boot up. Then call Skinny support. Say: "I am using the supplied modem and I have no connection."

This forces them to run the actual line diagnostics to the Chorus box, bypassing their "third-party hardware" excuse. Once the line is fixed, swap your high-performance router back in.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
