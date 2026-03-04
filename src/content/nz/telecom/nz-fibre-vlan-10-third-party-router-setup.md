---
title: 'NZ Fibre: The Secret VLAN 10 Setting for BYO Routers'
description: 'Did you buy a new ASUS, Netgear, or TP-Link router to replace your cheap ISP box? Learn why your New Zealand Fibre connection will not work until you enable 802.1Q VLAN Tagging on ID 10.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-fibre-vlan-10-third-party-router.png'
tags: ['BYO Router', 'VLAN 10', 'NZ Fibre', 'ASUS setup', 'PPPoE', 'NZ Tech']
instantAnswer: 'Almost all New Zealand Fibre (UFB) providers—including Spark, Skinny, Slingshot, Orcon, and 2degrees—require a hidden setting called "VLAN 10" to connect to the internet. If you buy a third-party router (like an ASUS or TP-Link) and plug it straight in, it will fail. You must log into the new router’s Setup Wizard, find the "IPTV / VLAN" menu, enable 802.1Q VLAN Tagging, and manually type "10" into the Internet VLAN ID box.'
faqs:
  - question: 'Why does New Zealand use VLAN 10?'
    answer: 'The NZ wholesale fibre network (Chorus) was originally designed to carry three different types of data simultaneously: standard internet, multicast IPTV (like Igloo or Vodafone TV), and voice landlines. To stop the data from colliding, Chorus split the traffic into virtual lanes. Standard internet was assigned to Lane 10. The legacy ISPs still enforce this rule today.'
  - question: 'What is the difference between PPPoE and DHCP/IPoE?'
    answer: 'These are the two main connection protocols. Spark, Skinny, and Slingshot use PPPoE, meaning your router must transmit a dummy username and password to connect (e.g., user@spark.co.nz / password). Providers like One NZ, Trustpower, and modern 2degrees connections use DHCP, which acts like an instant plug-and-play connection, provided VLAN 10 is still tagged.'
  - question: 'Does a Chorus Hyperfibre connection also need VLAN 10?'
    answer: 'Yes. Whether you are on a basic 300Mbps Fibre connection or a massive 4Gbps Hyperfibre connection using the 10GE port, the backend data switching remains the same. The VLAN 10 tag is mandatory for the Chorus network to route your packets correctly.'
  - question: 'I am on One NZ (Vodafone), do I need VLAN 10?'
    answer: 'Usually, no. One NZ is the major exception to the New Zealand rule. On standard residential connections, One NZ runs an "Untagged" network. If you set VLAN to 10 on a One NZ connection, it will fail. You must leave VLAN turned completely off, and select DHCP/Dynamic IP.'
---

# NZ Fibre: The Secret VLAN 10 Setting for BYO Routers

<div class='instant-fix-box'>
  <p>To use a third-party router in New Zealand, you must configure two settings. <strong>1. Connection Type:</strong> For Spark, Skinny, Contact, and Slingshot, choose PPPoE (Username: your-isp, Password: your-isp). For 2degrees and One NZ, choose DHCP (Dynamic IP). <strong>2. VLAN Tagging:</strong> Except for One NZ, every single provider requires you to go into the <em>Advanced > LAN > IPTV/VLAN</em> menu, tick "Enable 802.1Q", and set the <strong>Internet VLAN ID to 10</strong>. Without VLAN 10, the Chorus exchange deletes your data.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Plug and Play" Lie

You walk into PB Tech or Noel Leeming, spend $600 on a high-end ASUS ROG Rapture router or a brilliant Netgear Orbi Mesh system, and take it home. The box proudly claims: *"Setup in 5 minutes! Just plug it in and use the app!"*

You throw the cheap, plastic router provided by your ISP into the cupboard. You plug the sleek new router into the Chorus box on the wall. You open the app. 

The app spins for two minutes and says: *"No Internet Detected."*

You haven't bought a faulty router. In America or the UK, routers are usually plug-and-play. In New Zealand, our Ultra-Fast Broadband (UFB) network was built with a highly specific, slightly frustrating architectural quirk: **Virtual Local Area Networking (VLAN).**

To get your expensive new router online, you have to dig into the advanced settings and explicitly tell it to follow New Zealand rules.

## The Magic Number: VLAN 10

The company that owns the physical glass cables in the ground (usually Chorus, Tuatahi, or Enable) doesn't just provide internet. Historically, they also carried VoIP telephone services and Multicast Television (like the old Vodafone TV set-top boxes).

To prevent your massive game downloads from interfering with the telephone data, Chorus mathematically sliced the fibre optic cable into separate "lanes." 

*   Lane 20 was for Telephone.
*   Lane 30 was for Television.
*   **Lane 10 was assigned to the Internet.**

If your new ASUS router sends data out into the network "untagged" (meaning it has no lane assignment), the Chorus exchange computer looks at the data, doesn't know where to send it, and simply drops it into the digital trash bin.

You have to force your router to stamp a giant "10" on every single piece of data it transmits.

<AdSenseBlock slot='article-middle' />

## How to Set Up the Big 4 ISPs in 2026

Every router brand (ASUS, TP-Link, Netgear, Ubiquiti) hides the VLAN setting in a different place. You will need to click through the 'Advanced' sections of your router's dashboard, looking for a menu named **IPTV / VLAN**, **Bridge Setup**, or **802.1Q Tag**.

Once you find the VLAN menu, here are the exact settings you need based on who you pay your monthly bill to.

### 1. Spark, Skinny, and Orcon/Slingshot
These providers primarily use the older PPPoE protocol to authenticate you. 
*   **Connection Type:** PPPoE
*   **Username / Password:** Your router will stubbornly demand these. Often, they don't matter anymore, but you must type something. Use `user@spark.co.nz` and `password` (or substitute `skinny` / `slingshot`).
*   **VLAN Tagging (802.1Q):** Enabled
*   **VLAN ID:** 10
*   **802.1P (Priority):** 0

### 2. 2degrees (Modern Connections)
2degrees has largely moved away from PPPoE on newer fibre connections, making it slightly easier.
*   **Connection Type:** DHCP / Dynamic IP / IPoE
*   *(It will not ask for a username or password)*
*   **VLAN Tagging (802.1Q):** Enabled
*   **VLAN ID:** 10
*   **802.1P (Priority):** 0

### 3. Contact Energy & Trustpower (Manawa/Mercury)
The energy retailers who sell broadband also use the standard Chorus template.
*   **Connection Type:** PPPoE (Contact Energy) or DHCP (Mercury)
*   **VLAN Tagging (802.1Q):** Enabled
*   **VLAN ID:** 10

### 4. One NZ (The Massive Exception)
If you are with One NZ (formerly Vodafone), **DO NOT USE VLAN 10.** 
One NZ operates a slightly different internal network architecture for standard residential connections. They expect "Untagged" data.
*   **Connection Type:** DHCP / Dynamic IP / IPoE
*   **VLAN ID:** Leave this completely disabled. If your router has a pre-existing "Vodafone NZ" profile loaded in a dropdown menu, delete it, as it is often outdated and incorrectly flags VLAN 10. Stay on a standard untagged DHCP connection.

## Troubleshooting: "It still doesn't work"

If you have carefully selected PPPoE or DHCP, typed '10' into the VLAN ID box, hit Save, and the router is still glowing red, check these three things:

1.  **The Double-Port Trap:** Some ASUS routers ask you which port to apply the VLAN to. Ensure you are applying the tagging to the **"Internet"** or **"WAN"** port, not LAN Port 4 (which is meant for a smart TV).
2.  **The ONT Port Roulette:** Ensure the cable from your router is plugged into the correct port on the Chorus box. Usually, it is Port 1. But if you just moved house, the ISP might have activated your connection on Port 2.
3.  **The 15-Minute Lockout:** If you swap the cable back and forth between the old ISP router and your new ASUS router too quickly, the Chorus cabinet will think the line is being hacked and temporarily lock the port. Unplug everything, turn off the Chorus box on the wall for 15 solid minutes to clear the MAC-address cache, then turn it back on with only the new router plugged in.

By following these New Zealand-specific rules, your high-end third-party router will finally unleash the speeds you paid for.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
