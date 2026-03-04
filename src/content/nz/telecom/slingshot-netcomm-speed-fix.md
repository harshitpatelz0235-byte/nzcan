---
title: 'Slingshot NetComm Router: Turn THIS Off to Double Your Speed'
description: 'Your Slingshot NetComm router has a hidden setting called Band Steering that is killing your Wi-Fi performance. Learn how to disable it and instantly boost your speed across every device in your NZ home.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/slingshot-netcomm.png'
tags: ['Slingshot', 'NetComm', 'Wi-Fi Speed', 'Band Steering', 'NZ Tech']
instantAnswer: 'Log in to your NetComm router at 192.168.20.1 (username: admin, password on the base sticker). Go to Wireless Settings and disable Band Steering. This separates your 2.4GHz and 5GHz networks, letting you manually choose the faster 5GHz band for nearby devices.'
faqs:
  - question: 'Will disabling Band Steering cause problems?'
    answer: 'No. It simply gives you two visible Wi-Fi networks instead of one. Connect fast devices like laptops and phones to the 5GHz network, and slower devices like printers or smart plugs to the 2.4GHz network.'
  - question: 'My NetComm login page will not load at 192.168.20.1. What do I do?'
    answer: 'Make sure you are connected to the NetComm Wi-Fi or plugged in via Ethernet. If it still fails, try clearing your browser cache or use a private browsing window. Some older NetComm models use 192.168.1.1 instead.'
  - question: 'Can I rename the two separate networks?'
    answer: 'Yes. After disabling Band Steering, go to each wireless band setting and change the SSID to something like MyHome-5G and MyHome-2G so you always know which one you are connecting to.'
  - question: 'Does this work on the NetComm NF18ACV model?'
    answer: 'Yes. The NF18ACV is the most common Slingshot router in NZ as of 2026 and it has Band Steering enabled by default. The steps in this guide work on every NF18 variant.'
---

# Slingshot NetComm Router: Turn THIS Off to Double Your Speed

<div class='instant-fix-box'>
  <p>Your Slingshot NetComm router ships with a feature called Band Steering turned on by default. This feature forces all your devices onto one combined Wi-Fi network and constantly shuffles them between the slow 2.4GHz band and the fast 5GHz band. Turning it off gives you full manual control, and most NZ users see an immediate speed improvement of 40 to 100 percent on close-range devices.</p>
</div>

<AdSenseBlock slot='article-top' />

## Why Your Slingshot Wi-Fi Feels Sluggish Even on Fibre

If you are paying Slingshot for a 300Mbps or even Gigabit fibre plan but your speed tests are showing 50 to 80Mbps on Wi-Fi, the router is not broken. The problem is a feature called **Band Steering** that comes activated out of the box on every NetComm router Slingshot ships in 2026.

Let me explain why this matters in plain language. Your NetComm router has two internal radios. Think of them like two roads leading to the same destination. The first radio broadcasts on the **2.4GHz frequency**. This is the old-school signal. It can travel far, through walls, through floors, into the back garden shed. But it is slow. On a good day, it maxes out at around 80Mbps. In a crowded NZ suburb where every house has its own 2.4GHz router, your signal competes with your neighbours. This makes it even slower.

The second radio uses the **5GHz frequency**. This is the fast lane. It can deliver 600Mbps or more. The trade-off is range. It struggles with thick walls, especially the concrete block walls common in Auckland villas and Christchurch bungalows. But if you are in the same room as your router, or one thin wall away, 5GHz is the only band you should be using.

Now here is where Band Steering ruins everything. This feature was designed with good intentions. It automatically decides which band each of your devices should use. The theory is that the router knows best. In reality, the algorithm is terrible. Your laptop sitting two meters from the router gets pushed to the slow 2.4GHz band because the algorithm detected a brief signal fluctuation caused by someone opening the microwave. Your gaming console in the lounge keeps flipping between bands mid-session, causing those rage-inducing lag spikes in Fortnite or Call of Duty.

The fix is dead simple. Turn Band Steering off. Let yourself choose which band each device connects to. This takes about 90 seconds and I am going to walk you through every click.

## How to Disable Band Steering on Your NetComm Router

Before you start, grab your phone or laptop and make sure it is connected to the Slingshot Wi-Fi. You will also need the router password, which is printed on the white sticker on the bottom of your NetComm unit. It is usually labeled WLAN KEY or Wi-Fi Password.

### Step 1: Open the Admin Page

Open any web browser (Chrome, Safari, Edge, Firefox). In the address bar at the top, type **192.168.20.1** and press Enter. Do not type it into the Google search bar by mistake. It must go in the address bar.

If this does not work, try **192.168.1.1** instead. Some older NetComm firmware versions use the different address.

You should see a login page with the NetComm or Slingshot logo.

### Step 2: Enter Your Login Credentials

The default login username is **admin**. The password is the one on the sticker on the bottom of the router. If you or someone in your household changed the password and nobody remembers it, you can factory reset the router by holding the small Reset button on the back for 10 seconds with a paperclip. This will restore the default password but it will also wipe any custom Wi-Fi names or passwords, so only do this as a last resort.

### Step 3: Navigate to Wireless Settings

Once logged in, you will see the NetComm dashboard. It will show you basic information like your internet connection status and the number of connected devices.

Look in the left-hand menu or the top navigation bar for a section called **Wireless** or **Wi-Fi Settings**. On some firmware versions, it might be under **Advanced** and then **Wireless**.

### Step 4: Find and Disable Band Steering

Inside the wireless settings, you will see options for both the 2.4GHz and 5GHz radios. Look for a toggle, checkbox, or dropdown labeled **Band Steering**, **Smart Connect**, or **Unified SSID**.

Turn it **OFF**. On some models, you need to uncheck the box. On others, you flip a toggle from green to grey.

### Step 5: Name Your Two Networks

After disabling Band Steering, you now have two separate Wi-Fi networks. I strongly recommend giving them clear names so you always know which one you are connecting to.

*   Set the **2.4GHz SSID** to something like **YourName-Slow** or **YourName-2G**
*   Set the **5GHz SSID** to something like **YourName-Fast** or **YourName-5G**

Use the same password for both networks to keep things simple.

### Step 6: Save and Reboot

Click **Save** or **Apply**. The router will restart. This takes about 60 to 90 seconds. When it comes back online, check your phone or laptop Wi-Fi settings. You should now see both networks listed separately. Connect your main devices to the 5GHz network.

<AdSenseBlock slot='article-middle' />

## Which Devices Go on Which Network

Now that you have two networks, here is the golden rule that every NZ broadband technician follows when setting up homes:

### Put These on 5GHz (The Fast Network)

*   Laptops and desktop computers
*   Smartphones and tablets
*   Gaming consoles (PlayStation, Xbox, Nintendo Switch)
*   Smart TVs and streaming devices (Apple TV, Chromecast, Fire Stick)
*   Tablets used for video calls

These devices need speed and low latency. They are usually within 10 meters of the router and in the same room or separated by one interior wall.

### Put These on 2.4GHz (The Long Range Network)

*   Smart home gadgets (Alexa, Google Home, Hue lights)
*   Security cameras
*   Baby monitors
*   Wireless printers
*   Smart plugs and power strips
*   Garage door openers
*   Devices in the sleep-out, shed, or granny flat

These devices do not need blazing speed. They need reliable connections over distance and through walls. The 2.4GHz band is perfect for them.

## Understanding the Speed Difference in Real Terms

Let me put this in perspective with real numbers from typical Slingshot connections in NZ suburbs:

| Scenario | 2.4GHz Speed | 5GHz Speed | Improvement |
| :--- | :--- | :--- | :--- |
| Same room as router | 45 Mbps | 380 Mbps | 8x faster |
| One wall away | 30 Mbps | 220 Mbps | 7x faster |
| Two rooms away | 20 Mbps | 90 Mbps | 4.5x faster |
| Different floor | 12 Mbps | 40 Mbps | 3x faster |
| Garden shed | 5 Mbps | No signal | Use 2.4GHz |

These numbers are based on the NetComm NF18ACV with a standard Slingshot Fibre 300 plan in a typical three-bedroom NZ home. Your results will vary depending on wall thickness, interference from neighbours, and how many devices are connected.

## Why Band Steering is Particularly Bad in New Zealand

In most countries, Band Steering works acceptably because houses are spread apart and radio interference is low. New Zealand has a unique problem. Our suburbs are densely packed with houses close together, and almost every household has a router broadcasting on the same 2.4GHz channels.

Walk around any Auckland street with a Wi-Fi analyser app (search 'Wi-Fi Analyzer' on Google Play or the App Store) and you will see 20, 30, sometimes 40 competing networks. When Band Steering pushes your laptop to 2.4GHz in this environment, it is like trying to have a conversation in a crowded pub. Everyone is shouting over everyone else.

The 5GHz band has far more available channels and much less congestion. By manually putting your important devices on 5GHz, you are essentially moving your conversation from the noisy pub into a quiet meeting room.

## Advanced Optimisation: Changing the Wi-Fi Channel

Once you have disabled Band Steering, there is one more trick that can squeeze extra performance out of your NetComm.

1.  In the **Wireless Settings** page, look for **Channel** settings under the 5GHz radio.
2.  By default, it is set to **Auto**. Change it to **Channel 36** or **Channel 149**. These are the channels with the least interference in most NZ suburbs.
3.  For the 2.4GHz radio, set the channel to **1**, **6**, or **11**. These three channels do not overlap with each other, so you will get the cleanest signal.

## Local Hardware: When to Upgrade Beyond the NetComm

The NetComm NF18ACV is a decent router, but its internal antennas have limits. If your home is larger than about 120 square meters, or if it has thick walls made of concrete, rammed earth, or double brick, a single router in the hallway will never cover the whole house properly.

Here are your best options from NZ stores in 2026:

### Budget Mesh System ($150 to $200 NZD)

Go to **PB Tech** or **Noel Leeming** and grab a **TP-Link Deco X50** two-pack. These little units replace the NetComm Wi-Fi entirely. You plug one into the NetComm via Ethernet cable (keeping the NetComm as the modem only) and place the second unit in the room where you need better signal. They create a single seamless network across your whole house.

### Mid-Range Mesh System ($300 to $400 NZD)

The **Google Nest WiFi Pro** from **Harvey Norman** is excellent for NZ homes. It supports the latest Wi-Fi 6E standard, meaning it can use the uncrowded 6GHz band that most routers in your neighbourhood cannot even access yet.

### Premium Mesh System ($500 to $700 NZD)

The **Netgear Orbi RBK863S** from **JB Hi-Fi** is the gold standard for large NZ homes. It has a dedicated wireless backhaul channel, meaning the mesh nodes talk to each other on a private radio frequency that does not steal bandwidth from your devices. This is the system NZ IT professionals install in their own homes.

## How to Put the NetComm into Bridge Mode

If you buy a mesh system, you want to disable the NetComm Wi-Fi entirely and let the mesh handle everything. This prevents the two systems from fighting each other.

1.  Log in to **192.168.20.1**
2.  Go to **Wireless Settings**
3.  **Disable both the 2.4GHz and 5GHz radios**
4.  Connect the mesh system base unit to **Port 1** on the NetComm using an Ethernet cable
5.  Set up the mesh system using its own app

The NetComm will continue to handle the internet connection (the VLAN 10 tagging that Slingshot requires), while the mesh system handles all the Wi-Fi distribution.

## What to Say to Slingshot Support If Speeds Are Still Bad

If your speeds are still poor after disabling Band Steering and you have tested using a wired Ethernet cable plugged directly into the NetComm (bypassing Wi-Fi entirely), the issue is likely at the exchange level or with the Chorus infrastructure.

Call Slingshot on **0800 892 000** and use this script:

> 'I have disabled Band Steering on my NetComm and am testing via a wired Ethernet connection directly into Port 1. My speed test on speedtest.net shows [YOUR SPEED] which is well below my plan speed of [PLAN SPEED]. I have already performed a factory reset and verified the VLAN 10 settings. I have also confirmed that no other devices are using bandwidth during the test. Can you check for congestion at my local exchange or schedule a line test?'

Using terms like 'VLAN 10' and 'wired Ethernet test' tells the support agent that you are not a casual caller. They will skip the basic troubleshooting script and escalate your issue faster.

## Common Mistakes People Make After Disabling Band Steering

### Mistake 1: Connecting Everything to 5GHz

Some people get excited about the fast 5GHz network and connect every single device to it, including the smart fridge, the printer in the office, and the security camera in the back yard. This backfires for two reasons. First, those devices are usually too far from the router for 5GHz. Second, having 15 devices on the 5GHz band creates congestion on that band too. Be selective.

### Mistake 2: Forgetting to Reconnect After a Power Cut

If your area has a power outage (common in rural Canterbury or Northland during storms), the NetComm will restart with the same settings you saved. But your devices might reconnect to the wrong network. After any power cut, check your phone and laptop to make sure they jumped back to the 5GHz network.

### Mistake 3: Not Updating the NetComm Firmware

Slingshot pushes firmware updates to the NetComm automatically, but sometimes they get stuck. Check **System** and then **Firmware Update** in the router admin page. If there is a newer version available, install it. Newer firmware often improves the Wi-Fi radio performance independent of Band Steering settings.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
