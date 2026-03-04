---
title: 'Spark Smart Modem 3: The Hidden 5GHz Setting Ruining Your Ping'
description: 'Your Spark Smart Modem 3 has a hidden 5GHz channel setting that causes huge lag spikes during gaming and video calls. Learn how to access the advanced wireless menu and fix your ping permanently.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/spark-modem-5ghz.png'
tags: ['Spark', 'Smart Modem 3', '5GHz', 'Ping', 'Gaming', 'NZ Tech']
instantAnswer: 'Log in to your Spark Smart Modem 3 at 192.168.1.254. Navigate to Advanced, then Wireless, then 5GHz settings. Change the channel width from 160MHz to 80MHz and set the channel manually to 36 or 149. This reduces interference and stabilizes your ping from 50ms to under 10ms for NZ gaming servers.'
faqs:
  - question: 'Why does the 160MHz channel width cause lag?'
    answer: 'A 160MHz channel is very wide and overlaps with DFS (Dynamic Frequency Selection) radar bands used by NZ weather stations and airports. When the modem detects radar, it forces all devices to disconnect and switch channels, causing a massive lag spike that can last 30 to 60 seconds.'
  - question: 'Will changing to 80MHz make my internet slower?'
    answer: 'In theory, 80MHz has a lower maximum throughput than 160MHz. In practice, most NZ homes see no speed difference because the 160MHz channel is constantly disrupted by DFS events. A stable 80MHz connection is faster in real-world usage than an unstable 160MHz one.'
  - question: 'Can I change these settings through the Spark app?'
    answer: 'No. The Spark app only gives you basic settings like Wi-Fi name and password. To access the advanced wireless settings including channel width and channel selection, you must use the web browser interface at 192.168.1.254.'
  - question: 'What channel should I use if 36 and 149 are both crowded?'
    answer: 'Use channels 40, 44, or 48 as alternatives. These are all in the UNII-1 band which does not require DFS radar detection in New Zealand. Avoid channels 52 through 144 as they are DFS channels.'
---

# Spark Smart Modem 3: The Hidden 5GHz Setting Ruining Your Ping

<div class='instant-fix-box'>
  <p>If you are gaming on a Spark connection and experiencing random lag spikes every few minutes, the cause is almost certainly the 5GHz channel width setting on your Smart Modem 3. It ships set to 160MHz by default, which triggers DFS radar avoidance events in NZ. Change it to 80MHz and pick a non-DFS channel (36 or 149) to eliminate the spikes permanently.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Problem Every NZ Gamer on Spark Faces

You are in the middle of a ranked match. Your aim is perfect. You peek the corner and then boom. Your character freezes for two seconds. When the game resumes, you are dead, and your teammates are screaming at you in the voice chat. Your ping spiked from a normal 8ms to 400ms and back. You check your speed test and it says 450Mbps. So why is your game lagging?

The answer is hidden deep in the wireless settings of the **Spark Smart Modem 3** (the cylindrical white tower that Spark has been shipping to every new customer since 2024). And unless you know exactly where to look, you will never find it because Spark does not want you touching these settings.

Let me explain what is happening inside your modem and why your ping randomly explodes.

## Understanding DFS Radar Avoidance in New Zealand

Your Spark Smart Modem 3 uses the **5GHz Wi-Fi band** to deliver fast wireless speeds. Within this band, there are dozens of individual channels your modem can use. These channels are grouped into two categories that are critically important:

### Non-DFS Channels (The Safe Ones)

Channels **36, 40, 44, 48, 149, 153, 157, 161, 165** are free for any Wi-Fi router to use at any time. No restrictions. No interruptions. These live in what engineers call the **UNII-1** and **UNII-3** bands.

### DFS Channels (The Problematic Ones)

Channels **52 through 144** are shared with weather radar systems, airport surveillance radar, and military installations in New Zealand. The NZ government requires all Wi-Fi routers operating on these channels to constantly listen for radar signals. If the modem detects radar (which happens regularly near airports like Auckland, Wellington, Christchurch, and Queenstown), it must **immediately abandon the channel** and switch to a different one.

This mandatory channel switch is called a **DFS event**. During a DFS event, every single device connected to your modem on that channel gets disconnected for 1 to 60 seconds while the modem scans for a new clear channel. For web browsing, you might not even notice. For gaming, it is catastrophic.

## Why the Default 160MHz Width Makes This Worse

Now here is the critical detail. Your Spark Smart Modem 3 ships with the 5GHz channel width set to **160MHz**. A wider channel means the modem can theoretically deliver faster speeds. However, a 160MHz channel is so wide that it spans across **both DFS and non-DFS channels simultaneously**.

Even if the modem starts on channel 36 (a safe non-DFS channel), the 160MHz width means the channel stretches from channel 36 all the way to channel 64. Channels 52 onwards are DFS channels. So your modem is partially sitting on DFS channels even when it starts on a safe one.

When a DFS radar event is detected on any part of that wide channel, the entire 160MHz block gets disrupted. Your modem panics, disconnects every device, and hunts for a new channel. This is the source of your lag spikes.

The fix is brilliantly simple. Reduce the channel width from 160MHz to **80MHz** and manually select a non-DFS starting channel. An 80MHz channel starting at channel 36 only spans channels 36 to 48, all of which are safe non-DFS channels. No more radar interruptions. No more lag spikes.

## Step-by-Step: Fixing the 5GHz Settings

### Step 1: Get Into the Advanced Settings

Open a browser on any device connected to your Spark Wi-Fi. Type **192.168.1.254** into the address bar and press Enter.

You will see the Spark Smart Modem login page. The default username is **admin** and the password is printed on the sticker on the base of the modem. It is usually labeled as 'Admin Password' or 'Settings Password' (this is different from your Wi-Fi password).

### Step 2: Navigate to the Wireless Settings

Once logged in, you will see the modem dashboard. Look for **Advanced** in the menu, then click on **Wireless** or **Wi-Fi**. Some firmware versions list it as **Wireless Radio Settings**.

You will see two sections. One for the 2.4GHz band and one for the 5GHz band. We are only changing the 5GHz settings.

### Step 3: Change the Channel Width

Under the **5GHz** settings, find the option labeled **Channel Width** or **Bandwidth**. It will be set to **160MHz** or **Auto**.

Change it to **80MHz**.

### Step 4: Set the Channel Manually

Find the option labeled **Channel** or **Channel Selection**. It will be set to **Auto**.

Change it to **36**. If you are in an area where channel 36 seems congested (you can check using a Wi-Fi analyser app on your phone), try **149** instead.

The key rule is: **stay on channels 36-48 or 149-165**. Never manually select any channel between 52 and 144.

### Step 5: Save and Reconnect

Click **Apply** or **Save**. The modem will briefly disconnect your Wi-Fi while it switches to the new channel. Within 30 seconds, your devices will automatically reconnect.

Test your ping with a gaming server or use the command prompt ping test: open CMD or Terminal and type **ping google.co.nz -t**. You should see consistent responses between 5ms and 15ms with zero random spikes.

<AdSenseBlock slot='article-middle' />

## Testing Your Fix: The Real-World Ping Test

Speed tests alone do not tell you if your connection is stable. You need a sustained ping test to verify the DFS issue is gone.

### Method 1: The Command Prompt Test

On a Windows PC connected to your Spark Wi-Fi:
1.  Press the Windows key, type **cmd**, press Enter
2.  Type **ping 8.8.8.8 -t** and press Enter
3.  Leave this running for 10 minutes while you use other devices normally
4.  Press Ctrl+C to stop the test
5.  Look at the results. You want to see **0% packet loss** and a consistent time between 5ms and 20ms

Before the fix, you would see occasional spikes to 200ms, 500ms, or even 'Request Timed Out' messages every few minutes. After the fix, it should be rock solid.

### Method 2: The Gaming Test

Load up any online game with a ping display (Fortnite, Valorant, Rocket League, or Call of Duty all show ping in the settings). Play for 30 minutes and watch the ping counter. Before the fix, it would spike randomly. After the fix, it should stay flat.

## Why Spark Ships the Modem This Way

You might be wondering why Spark would ship a modem with settings that cause lag. The answer is marketing. On paper, 160MHz channel width achieves higher maximum speeds. If a customer runs a single speed test right next to the modem, the number looks impressive. Spark can claim 'up to 1.5Gbps Wi-Fi speed' in their advertising.

In real-world usage inside a New Zealand home with walls, furniture, multiple devices, and nearby radar installations, 160MHz is consistently worse than 80MHz. But marketing departments do not care about consistency. They care about peak numbers on spec sheets.

## Additional Optimisations for NZ Gamers

While you are in the advanced settings, there are two more changes that will improve gaming performance:

### Enable WMM (Wi-Fi Multimedia)

Look for **WMM** or **QoS** in the wireless settings. Make sure it is **enabled**. WMM tells the modem to prioritise real-time traffic like gaming and video calls over bulk downloads. If someone else in your house starts downloading a large file on Steam, WMM ensures your ping stays stable.

### Disable PMF (Protected Management Frames) if Having Disconnect Issues

Some older gaming consoles (particularly the original Nintendo Switch and older PS4 models) have compatibility issues with **PMF**. If your console keeps randomly disconnecting from Wi-Fi, look for **PMF** or **802.11w** in the security settings and set it to **Optional** instead of **Required**.

## When the Modem Is Not the Problem

To be completely honest with you, sometimes the lag is not your modem settings at all. Here are situations where the DFS fix will not help:

*   **Chorus congestion during peak hours (7pm to 10pm):** If every house in your street is streaming Netflix simultaneously, the shared Chorus infrastructure can get overwhelmed. This is not a Wi-Fi issue. It is a backhaul issue. You can verify this by running a speed test via Ethernet cable during peak hours.
*   **Gaming server location:** If you are playing on US or European servers from New Zealand, your base ping will be 150ms to 250ms regardless of your modem settings. Physics cannot be fixed with settings. For the best NZ gaming experience, always choose Australian servers (20-30ms) or NZ servers where available.
*   **Other people on your network:** If someone is torrenting or running a large cloud backup during your gaming session, that can saturate your upload bandwidth. Upload bandwidth in NZ is typically much lower than download (100Mbps upload on a 900Mbps plan). Gaming needs reliable upload for sending your actions to the server.

## Local Hardware Alternatives

If the Spark Smart Modem 3 continues to frustrate you even after these changes, consider replacing its Wi-Fi function with a dedicated gaming router:

*   **ASUS RT-AX86U Pro** ($350 from **PB Tech**): Has a dedicated 'Gaming Mode' that prioritises low-latency traffic automatically. Supports the new 6GHz band that has zero DFS issues in NZ.
*   **TP-Link Archer AXE75** ($250 from **Noel Leeming**): Budget gaming option with Wi-Fi 6E support and manual channel control far superior to the Spark modem interface.

To use these, put the Spark modem into **bridge mode** first so it only handles the internet connection while the new router handles all the Wi-Fi.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
