---
title: 'Contact Energy Broadband: The Secret Router Settings'
description: 'Did you buy a new ASUS or Netgear router but cannot get it to connect to Contact Energy broadband? Learn the exact PPPoE login credentials and the mandatory VLAN 10 tagging required to get online in NZ.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/contact-energy-router-settings.png'
tags: ['Contact Energy', 'Router Setup', 'PPPoE', 'VLAN 10', 'BYO Modem', 'NZ Tech']
instantAnswer: 'To use your own router with Contact Energy Fibre or VDSL, you must configure two specific settings. First, change the connection type to PPPoE. The Username is entirely blank (leave it empty) and the Password is entirely blank. Second, you must enable VLAN Tagging and set the Internet VLAN ID to 10. Without VLAN 10, the Chorus network will instantly reject the connection.'
faqs:
  - question: 'Does Contact Energy allow third-party routers?'
    answer: 'Yes. Contact Energy officially supports "BYO" (Bring Your Own) modems for all their Fibre and VDSL plans. However, they will not provide technical phone support if your Netgear or ASUS router breaks; they only troubleshoot the hardware they supply.'
  - question: 'What is VLAN 10 and why is it required?'
    answer: 'VLAN stands for Virtual Local Area Network. In New Zealand, Chorus (who builds the physical fibre network) uses VLAN 10 to separate standard internet traffic from specialized services like IPTV or VoIP. If your router does not tag your data packets with the number 10, the Chorus exchange discards the data at the street cabinet.'
  - question: 'What do I do if my router asks for a PPPoE username?'
    answer: 'Contact Energy is unique because they use "line-based authentication" rather than username authentication. You should leave the PPPoE username and password fields completely blank. If your specific router software forces you to type something before it lets you click Save, just type "user" and "password". Contact Energy will ignore it anyway.'
  - question: 'Do I plug the router into Port 1 or Port 2 on the Chorus box?'
    answer: 'Always plug the yellow Ethernet cable from your router’s WAN port into the LAN1 (GE1) port on the bottom of the white Chorus ONT on the wall, unless a technician specifically told you your connection is active on LAN2.'
---

# Contact Energy Broadband: The Secret Router Settings

<div class='instant-fix-box'>
  <p>To set up a third-party router (ASUS, standard TP-Link, Netgear, eero) on a Contact Energy Fibre connection: Plug the WAN port into <strong>Chorus LAN1</strong>. During the router setup wizard, select <strong>PPPoE</strong>. Leave the Username and Password fields completely blank. Find the IPTV/VLAN settings menu and enable 802.1Q tagging. Set the <strong>Internet VLAN ID to 10</strong>. Set the Priority to 0. Click save and reboot.</p>
</div>

<AdSenseBlock slot='article-top' />

## Ditching the Supplied Hardware

When you sign up for Contact Energy's bundled electricity and broadband plans, they usually send you a free standard NetComm router. 

It works fine for a small apartment. But if you have a large four-bedroom house, or if you are a serious PC gamer who needs advanced traffic management, the free NetComm unit will struggle. 

You head to PB Tech and buy a $500 ASUS Gaming Router, or a massive TP-Link Deco Mesh system. You bring it home, plug it into the Chorus box on the wall, and eagerly wait for the internet light to turn green.

It turns red. It stays red. You have zero internet.

You haven't broken anything. The problem is that modern, expensive consumer routers are primarily designed for the massive US or European markets, which use simple "plug and play" DHCP connections. New Zealand's Chorus fibre network is different. It relies on a specific security protocol called **VLAN Tagging**.

If you do not tell your new $500 router to use this specific New Zealand protocol, Contact Energy will refuse to talk to it.

Here is the exact configuration profile you need to punch into any third-party router to get online with Contact Energy in 2026.

## The Two Mandatory Settings

Regardless of whether you bought a standard router, an expensive mesh system, or built a custom pfSense firewall, you must successfully configure two distinct network layers. 

### 1. The PPPoE Login (Line Authentication)
The first layer is the "handshake" protocol. Most NZ ISPs use **PPPoE** (Point-to-Point Protocol over Ethernet). 

Normally, PPPoE requires a username (like `user@slingshot.co.nz`) and a password. Contact Energy is unique. They use "Line Trust" authentication. The Chorus exchange physically knows which fibre optic cable runs to your specific house, so it doesn't need a password to know who you are.

*   **Connection Type:** PPPoE (or PPP)
*   **Username:** *Leave Blank* (If the router forces you to type something, type `contact`)
*   **Password:** *Leave Blank* (If forced, type `password`)
*   **Authentication Type:** Auto (or CHAP)

### 2. The VLAN 10 Tagging (The Crucial Step)
This is where 99% of BYO router setups fail in New Zealand. 

Chorus manages the massive wholesale network that all ISPs ride on. To keep traffic organized, they require all standard home internet data to be stamped with the number "10" before it leaves your house. If a data packet arrives at the street cabinet without the number 10 stamped on it, the cabinet's firewall drops it immediately.

*   **802.1Q VLAN:** Enabled
*   **Internet VLAN ID (VID):** 10
*   **802.1P Priority (PRIO):** 0

<AdSenseBlock slot='article-middle' />

## How to Apply These Settings to Popular Brands

Every router manufacturer hides the VLAN 10 setting in a different menu. Here is how to find it on the three most popular brands sold in New Zealand.

### ASUS Routers (ROG, RT-AX, ZenWiFi)
ASUS hides their VLAN settings inside a menu labeled "IPTV", because VLANs are technically used for internet television in parts of Asia.
1. Connect your laptop to the ASUS Wi-Fi. Go to **router.asus.com**.
2. Run the Quick Internet Setup (QIS). When asked for the connection type, select **PPPoE** and leave the login fields blank.
3. Once on the main dashboard, look at the left-hand menu under **Advanced Settings**.
4. Click on **LAN**.
5. Click the tab at the top labeled **IPTV**.
6. Find the dropdown box labeled **Select ISP Profile**.
7. Change it to **Manual Setting**.
8. Look at the "Internet" row. Under the "VID" column, type the number **10**. 
9. Click **Apply**. The router will reboot and connect.

### TP-Link Routers (Archer, Deco)
Older TP-Link routers have a "New Zealand" profile built-in, but newer Deco Mesh systems must be configured manually via your smartphone app.
1. Open the **Deco App** on your phone.
2. Go to the **More** tab (bottom right), then **Advanced**.
3. Tap **IPv4**. Change the Internet Connection Type to **PPPoE** (Leave username empty).
4. Go back to the Advanced menu and tap on **IPTV/VLAN**.
5. Toggle the switch to turn it **ON**.
6. Tap the "Mode" or "ISP Profile" and scroll down to select **New Zealand UFB**.
7. *If New Zealand UFB is not an option:* Select **Custom**. Enter **10** in the Internet VLAN ID box. Leave Internet VLAN Priority at **0**.
8. Save and exit. 

### Netgear Routers (Nighthawk, Orbi)
Netgear uses a slightly more confusing interface, but the settings are the same.
1. Log into **routerlogin.net**.
2. Go to the **Advanced** tab at the top.
3. On the left menu, select **Setup**, then **Internet Setup**.
4. Under "Does your Internet connection require a login?", select **Yes**.
5. Select **PPPoE** and leave the fields blank. Click Apply.
6. Now, on the left menu, select **Advanced Setup**, then **VLAN / Bridge Settings**.
7. Check the box to **Enable VLAN / Bridge group**.
8. Select the **By VLAN tag group** button.
9. Click **Add**. 
10. Name it "Contact", set the VLAN ID to **10**, and set the Priority to **0**. Apply it to all ports. Click Apply.

## Troubleshooting: Still Glowing Red?

If you have carefully entered PPPoE, left the username blank, and definitively forced the Internet VLAN ID to 10, but the router still refuses to assign itself a public IP address, check the physical Chorus box.

**The Port 1 vs. Port 2 Trap**
Look at the white Chorus ONT on your wall. Look underneath it at the four yellow Ethernet (LAN/GE) ports. 
Is your new router plugged into LAN1 (GE1)?

By default, 95% of Contact Energy fibre connections are provisioned on Port 1. However, if you recently moved into a new rental property, and the previous tenant used a different ISP on Port 1, Contact Energy might have activated your new connection on **LAN2 (GE2)** to avoid accidentally disconnecting the previous tenant during the handover.

Unplug your router from LAN1 and plug it into LAN2. Wait 60 seconds. If the light flashes green, you have found your active port. 

*Warning: Remember that using a BYO router means you forfeit ISP hardware support. If your internet stops working securely at 9 PM on a Saturday, Contact Energy will ask you to plug their original NetComm router back in to prove it is a network fault rather than an ASUS hardware fault. Do not throw the free ISP router in the bin; keep it in the garage as an emergency diagnostic tool.*

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
