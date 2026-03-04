---
title: 'Spark Modem: How to Get Open NAT on PS5'
description: 'Are you getting a "Strict NAT" or "NAT Type 3" error on your PlayStation 5 using a Spark Smart Modem? Learn how to assign a Static IP and use Port Forwarding to permanently fix voice chat and matchmaking issues.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/spark-modem-ps5-open-nat.png'
tags: ['Spark', 'PS5', 'Open NAT', 'Port Forwarding', 'Smart Modem', 'Gaming', 'NZ Tech']
instantAnswer: 'To get an Open NAT (Type 2) on a PS5 using a Spark Smart Modem, you must manually forward Sony’s gaming ports. Access the Spark router at 192.168.1.254. First, go to LAN Settings and assign a Static IP to your PS5 (e.g., 192.168.1.50). Second, go to Advanced > Port Forwarding. You must open TCP Ports: 80, 443, 3478, 3479, 3480 and UDP Ports: 3478, 3479, 49152-65535. Point them all to your PS5’s new Static IP.'
faqs:
  - question: 'What is NAT Type 3 (Strict) on PS5?'
    answer: 'NAT Type 3 means the Spark routers internal firewall is aggressively blocking incoming gaming data. This prevents you from hosting multiplayer lobbies, connecting to specific friends in FIFA or Call of Duty, and entirely blocks the PlayStation Party Voice Chat audio.'
  - question: 'Is NAT Type 2 just as good as NAT Type 1?'
    answer: 'Yes. NAT Type 1 (Open) is only achieved if the PS5 is plugged directly into the Chorus fibre box with no router in between, which is extremely unsafe for home networks. NAT Type 2 (Moderate/Open) is the absolute best and most secure connection you can achieve when using a router.'
  - question: 'Can I just use the UPnP setting instead of Port Forwarding?'
    answer: 'Universal Plug and Play (UPnP) is supposed to open gaming ports automatically. However, the firmware on the Spark Smart Modem 2 and 3 often glitches, causing UPnP to fail silently. Manually hard-coding the Port Forwarding rules bypasses the glitch and guarantees an Open NAT permanently.'
  - question: 'Does Port Forwarding my PS5 expose me to hackers?'
    answer: 'No. You are only opening the specific digital doors required by the PlayStation Network. Sony’s internal OS handles the security. You are not opening ports to your Windows PC or banking information.'
---

# Spark Modem: How to Get Open NAT on PS5

<div class='instant-fix-box'>
  <p>To fix <strong>NAT Type 3 (Strict)</strong> on a PS5 with a Spark Smart Modem (192.168.1.254): <strong>1.</strong> Assign a Static IP to your PS5 via out LAN Settings (e.g., 192.168.1.50). <strong>2.</strong> Go to Advanced > Port Mapping / Port Forwarding. <strong>3.</strong> Create a new rule. Forward <strong>TCP ports 80, 443, 3478, 3479, 3480</strong> and <strong>UDP ports 3478, 3479, 49152-65535</strong> pointing to that 192.168.1.50 address. Save and restart both the router and the PS5.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Party Chat Ruled Out" Error

In 2026, New Zealand fibre internet is incredibly fast, allowing massive 100GB PlayStation 5 games to download in under 20 minutes. 

However, speed does not equal connectivity. You can have a 900Mbps Spark Fibre Max connection, boot up *Call of Duty* or *EA Sports FC*, and be completely unable to join your friend's lobby. When you join a PlayStation Party Chat, a microphone with a red slash appears next to your name, and you cannot hear anyone.

If you run a "Test Internet Connection" diagnostic on your PS5 settings menu, you will see the dreaded result at the bottom: **NAT Type 3**.

Network Address Translation (NAT) Type 3 means the Spark Smart Modem's internal security firewall is set to maximum strictness. It is forcefully blocking the digital communication "ports" that Sony relies on to bridge player-to-player connections. 

To fix this, you must log into the Spark router and manually kick those digital doors open—a process called Port Forwarding.

## Step 1: The Static IP (Locking the Target)

Before we can tell the router to open the doors for the PS5, we have to make sure the router always knows *where* the PS5 is. 

By default, routers shuffle IP addresses around every 24 hours (DHCP). If we open the doors for IP address `192.168.1.10` today, but tomorrow the router assigns that IP address to a smart fridge instead of the PS5, the gaming ports will close. 

We must permanently glue an IP address to the PS5.

1.  Turn on your PS5. Go to **Settings > Network > Connection Status > View Connection Status**.
2.  Scroll down and write down the **MAC Address (LAN or Wi-Fi)**, which looks like this: `A1:B2:C3:D4:E5:F6`.
3.  Go to your laptop. Open Chrome and type **192.168.1.254** to access the Spark Modem.
4.  Log in using the Username `admin` and the Password printed on the back of the modem.
5.  On the left menu, click **Local Network** or **LAN**.
6.  Look for **DHCP Static IP** or **DHCP Binding**.
7.  Add a new rule: Enter the PS5's MAC Address, and manually type a high IP address, such as **192.168.1.50**.
8.  Click Save.

<AdSenseBlock slot='article-middle' />

## Step 2: The Port Forwarding Rules

Now that the Spark Modem knows the PS5 will forever live at `.50`, we can drill the holes in the firewall. 

1.  Still in the Spark dashboard, click on **Internet** or **Advanced**.
2.  Locate the menu named **Port Forwarding**, **Port Mapping**, or **Virtual Server**.
3.  You are going to create **two separate rules** (one for TCP, one for UDP).

### Rule 1: The TCP Ports
*   **Name/Application:** PS5-TCP
*   **Internal IP / LAN IP:** `192.168.1.50` (The Static IP from Step 1)
*   **Protocol:** TCP
*   **External Port (WAN Port):** `80, 443, 3478, 3479, 3480`
*   *(Note: If the Spark modem does not allow commas, you must create a separate rule for each individual port number).*
*   **Internal Port (LAN Port):** Leave blank, or match the external port. 
*   **Save/Apply.**

### Rule 2: The UDP Ports
*   **Name/Application:** PS5-UDP
*   **Internal IP / LAN IP:** `192.168.1.50`
*   **Protocol:** UDP
*   **External Port (WAN Port):** `3478, 3479, 49152-65535` *(Use a hyphen to indicate a massive range)*. 
*   **Save/Apply.**

## Step 3: The Hard Restart

If you skip this step, the Spark router will simply hold the new rules in its "Pending" memory cache and nothing will change. 

1.  Navigate to the **System Management** tab on the Spark router and click **Reboot** (or simply turn the router off at the wall for 10 seconds).
2.  While the router is restarting, do the same to the PlayStation 5. Go to the Power menu and select **Restart PS5** (Do not use Rest Mode. A full reboot clears the network cache).
3.  Wait 3 minutes for both devices to power back up and connect. 

## Step 4: Verification

Once the PS5 has connected to the internet, you need to verify your work. 

1.  Go to the PS5 Home Screen.
2.  Select **Settings > Network > Connection Status**.
3.  Select **Test Internet Connection**.

Watch the screen carefully as it runs through the diagnostics. It will check the IP address, Internet Connection, and PlayStation Network Sign-In. 

Finally, it will display the NAT Type.
It should now proudly display **NAT Type 2**.

You are finished. NAT Type 2 is the exact equivalent of "Open NAT" when sitting behind a home router. You will no longer experience party chat dropouts, you can host local multiplayer lobbies, and matchmaking algorithms will prioritize your connection, significantly reducing in-game ping.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
