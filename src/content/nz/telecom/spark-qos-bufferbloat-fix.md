---
title: 'Spark Smart Modem: How to Fix Bufferbloat and High Ping'
description: 'Does your ping spike to 300ms the second someone else in the house opens Netflix? You are suffering from Bufferbloat. Learn how to configure QoS (Quality of Service) on your Spark Smart Modem to guarantee lag-free gaming.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/spark-modem-bufferbloat-fix.png'
tags: ['Spark', 'Smart Modem', 'Bufferbloat', 'QoS', 'Gaming', 'High Ping', 'NZ Tech']
instantAnswer: 'To fix Bufferbloat on a Spark Smart Modem (high ping when others download): Log into 192.168.1.254 (admin/admin). Go to Advanced > WLAN. Look for QoS (Quality of Service) or WMM (Wi-Fi Multimedia). Ensure it is Enabled. To prioritize a specific device (like a PS5), you must assign it a Static IP, then use the QoS Bandwidth Control menu to reserve 10% of your total bandwidth limit exclusively for that IP address.'
faqs:
  - question: 'What exactly is Bufferbloat?'
    answer: 'Bufferbloat happens when your router tries to be "too helpful." If a massive download starts, the router fills its internal memory buffer with data packets waiting in line. This creates a digital traffic jam. Smaller, urgent packets (like your gaming bullet connecting, or your voice on a Zoom call) get stuck at the back of the massive queue, causing huge ping spikes.'
  - question: 'Why does my 900Mbps fibre still get high ping during gaming?'
    answer: 'Speed (Bandwidth) and Delay (Ping) are different. You can have a 900Mbps fibre pipe, but if someone starts a Steam game download that maxes out all 900Mbps, the pipe is physically full. Your tiny 1Mbps gaming data has to wait in line. Managing the queue (QoS) is more important for ping than having a fast connection.'
  - question: 'What is WMM and should it be on?'
    answer: 'WMM (Wi-Fi Multimedia) is a basic, automated form of QoS built into the Spark Smart Modem Wi-Fi chips. It automatically tags voice and video packets as "high priority." It must always remain Enabled. If you disable it, your Wi-Fi speeds will permanently plummet.'
  - question: 'Can I replace the Spark Modem to fix this?'
    answer: 'Yes. The ultimate fix for Bufferbloat is buying a third-party gaming router (like an ASUS ROG or Netgear Nighthawk) featuring "SQM" (Smart Queue Management). SQM algorithms perfectly eliminate bufferbloat without needing manual IP rules.'
---

# Spark Smart Modem: How to Fix Bufferbloat and High Ping

<div class='instant-fix-box'>
  <p>To reduce gaming lag and bufferbloat on a Spark Smart Modem, log in at <strong>192.168.1.254</strong>. Go to Advanced Settings > QoS or Bandwidth Control. You cannot just click a "Gaming Mode" button. You must run a speed test to find your max upload/download capacity, enter 90% of those values into the Total Bandwidth limits, and assign your gaming PC/Console a high-priority rule. This forces the router to leave empty "breathing room" in the data pipe.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Roommate" Ping Spike

You sit down at 8:00 PM for a competitive match of *Valorant* or *Call of Duty*. Before the game starts, you check your connection. 

Ping: 12ms. Flawless.

Ten minutes into the match, your roommate walks into the lounge and turns on the Apple TV to stream a movie in 4K. Instantly, your game freezes. When it unfreezes, you are dead, and your ping counter is flashing red at **450ms**.

You yell at your roommate to "get off the Wi-Fi." Five minutes later, the movie finishes buffering, and your ping drops back down to 12ms. 

Your Chorus fibre line isn't broken, and Spark isn't throttling you. You are a victim of **Bufferbloat**, the most infuriating network phenomenon in New Zealand gaming.

Fortunately, by diving into the advanced settings of your Spark Smart Modem, you can configure traffic rules to ensure that a Netflix stream never ruins your game again.

## Understanding the "Bufferbloat" Traffic Jam

To fix the problem, you must understand why a 900Mbps Fibre connection can still lag.

Think of your internet connection as a multi-lane motorway, and your Spark Smart Modem is the toll booth. 
*   A **Netflix 4K stream** is a massive convoy of 50 heavy transport trucks. 
*   Your **video game data** (the command that says "I pulled the trigger") is a single guy riding a motorcycle. 

The motorcycle travels incredibly fast (low ping) when the motorway is empty. 

But when your roommate hits play on Netflix, the 50 massive trucks all pull up to the toll booth at the exact same moment. The Spark Smart Modem has a small memory chip called a "Buffer." It tries to be helpful by parking all 50 trucks in the buffer lane, letting them through one by one.

When your gaming motorcycle arrives at the toll booth three seconds later, the toll booth is full. Your motorcycle has to queue up *behind* the 50 massive trucks. The time it takes sitting in that queue waiting to get out onto the internet is what causes your ping to spike from 12ms to 450ms.

## The Solution: QoS (Quality of Service)

To fix this, we have to activate the router's Traffic Cop: **QoS (Quality of Service)**.

QoS is a set of rules that tells the Spark Smart Modem: *"If you see the gaming motorcycle coming, immediately pull it to the front of the line, even if five Netflix trucks have to wait an extra millisecond."*

Because Spark uses different hardware iterations (Smart Modem 2, 3, and Huawei variants), the exact menus differ, but the underlying methodology is exactly the same.

### Step 1: Assigning a Static IP to Your Console/PC
You cannot tell the router to prioritize "the PlayStation" if it doesn't know which device the PlayStation is. You must assign the console a permanent, fixed IP address.

1.  Log into your Spark Smart Modem at **192.168.1.254**.
2.  Use the password printed on the back of the modem.
3.  Navigate to **Advanced Settings** > **Local Network** > **DHCP Server** (or Static IP Allocation).
4.  Find your gaming PC or Console in the list of connected devices.
5.  Click **Add** or "Make Static." 
6.  The router will now permanently assign it an IP address (e.g., `192.168.1.50`). Write this number down.

### Step 2: Finding Your True Bandwidth Limits
QoS rules only work if the router knows the exact ceiling of your connection. 

1.  Connect your laptop to the Spark modem using a physical Ethernet cable (do not use Wi-Fi for this step).
2.  Go to **Speedtest.net** and run a test to an Auckland or Wellington server.
3.  Write down your exact Download and Upload speeds in Megabits per second (Mbps). E.g., Download: 312 Mbps. Upload: 104 Mbps.

<AdSenseBlock slot='article-middle' />

### Step 3: Enabling Bandwidth Control (The 90% Rule)
The secret to killing bufferbloat is to physically prevent your household devices from ever maxing out the connection 100%. If the connection never hits 100%, the memory buffer never fills up, and the motorcycle never has to wait in line.

1.  Log back into the Spark Modem.
2.  Go to **Advanced** > **QoS** or **Bandwidth Control**.
3.  Check the box to **Enable QoS**.
4.  You will see a global "Total Egress/Ingress" or "Total Upload/Download" limit. 
5.  **The Golden Math:** Take your Speedtest results from Step 2, and minus 10%. (e.g., 312 Mbps becomes 280 Mbps. 104 Mbps becomes 93 Mbps).
6.  Type these reduced numbers into the Total Limit boxes. 

By artificially capping your total internet speed at 90%, you are forcing the Spark router to permanently leave an empty "fast lane" open on the motorway. When the Netflix convoy arrives, they are forced into the slow lanes, leaving the 10% fast lane completely empty for your gaming motorcycle to zoom past.

### Step 4: Creating the Priority Rule
Finally, explicitly tell the router to treat your gaming device like royalty.

1.  Still in the QoS menu, click **Add New Rule** or **Classification**.
2.  **Source IP:** Type in the Static IP address you gave your console in Step 1 (e.g., `192.168.1.50`).
3.  **Priority / Queue:** Select **Highest** or **Level 1** from the dropdown box.
4.  Click **Apply** and reboot the router.

## Why WMM (Wi-Fi Multimedia) Must Stay On

When digging through the Spark advanced settings, many players find a toggle switch under the WLAN/Wi-Fi menu called **WMM (Wi-Fi Multimedia)**. 

Because older video game guides from 2012 told people to turn off all router processing to improve ping, people frequently turn WMM off.

**Do not turn WMM off on a Spark Smart Modem.**

WMM is a mandatory sub-protocol of modern Wi-Fi (802.11ac and Wi-Fi 6). It is an automated version of QoS specifically designed for wireless radio waves. It automatically tags tiny packets (like voice calls and gaming commands) and pushes them to the front of the radio queue before the massive video download packets.

If you disable WMM on a Spark Smart Modem, you physically break the 802.11ac standard. The router will instantly downgrade your entire 5GHz Wi-Fi network to legacy "G" standard speeds. Your 900Mbps fibre connection will suddenly max out at 54Mbps over Wi-Fi, utterly destroying the performance for everyone in the house.

## The Ultimate Fix: Buying "SQM" Hardware

If you have performed the 90% bandwidth limit hack on the Spark Smart Modem and your ping is still spiking from 12ms to 60ms during Netflix streams, you have reached the processing limit of the free hardware.

The free routers supplied by NZ internet providers have cheap internal CPUs. Managing complex traffic rules across 30 smart devices in real-time requires significant processing power.

If you are a competitive gamer in 2026, the ultimate fix for Bufferbloat is to remove the Spark Smart Modem entirely and purchase a third-party gaming router. 

When shopping at PB Tech, do not look at the alien spaceship designs or the "Game Boost" marketing stickers. You are looking for exactly three letters on the box: **SQM (Smart Queue Management).**

Routers utilizing SQM algorithms (like Asus routers running Merlin firmware, or high-end Netgear units) do not require you to manually set IP rules or reserve 10% of your bandwidth. They use advanced machine learning on the router's CPU to instantly detect and categorize every single packet of data moving through the home.

An SQM router will automatically let the Netflix movie download at 899Mbps, but the absolute microsecond you pull the trigger in Call of Duty, it will pause the Netflix download for one millisecond, fire the gaming packet through at 12ms ping, and resume the download before anyone even notices.

If ping is your priority, SQM hardware is the only flawless solution.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
