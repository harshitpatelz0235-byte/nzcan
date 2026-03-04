---
title: '2degrees Broadband: Third-Party Router Settings Guide'
description: 'Did you buy a high-end ASUS or Netgear router and want to use it on your 2degrees Fibre connection? Learn the exact PPPoE credentials and crucial VLAN 10 tagging settings required to get online.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/2degrees-byo-router-settings.png'
tags: ['2degrees', 'BYO Router', 'VLAN 10', 'PPPoE Settings', 'ASUS', 'NZ Tech']
instantAnswer: 'To connect a third-party router (like ASUS, Netgear, or TP-Link) to the 2degrees Fibre network, you must enter two specific settings in the Setup Wizard. First, set the Internet Connection Type to PPPoE. Enter any generic text into both the Username box and Password box (e.g., test/test). Second, you must enable VLAN Tagging and set the VLAN ID to 10. If VLAN is not set to 10, the router cannot authenticate.'
faqs:
  - question: 'What is my 2degrees PPPoE Username and Password?'
    answer: 'Unlike old ADSL days, 2degrees Fibre does not rely on a specific username and password to authenticate your household. The authentication happens at the Chorus exchange level. However, third-party routers still rigidly require text in the PPPoE boxes. You can type literally anything into them, such as "2degrees" for the username and "2degrees" for the password, and the connection will work.'
  - question: 'What does VLAN 10 mean?'
    answer: 'VLAN stands for Virtual Local Area Network. Chorus uses VLAN Tagging (specifically ID number 10) to separate your standard internet traffic from other specialized traffic. If your ASUS router sends data untagged, the Chorus box simply drops the packets and refuses to let you online.'
  - question: 'Can I use a third-party router for a 2degrees landline?'
    answer: 'No. The SIP network configuration files required to run a 2degrees VoIP home phone are heavily encrypted and locked exclusively onto the free FritzBox or Orbi routers supplied by 2degrees. If you use an ASUS router, you must permanently sacrifice your home landline phone service.'
  - question: 'Why does 2degrees say they "Do Not Support" third-party routers?'
    answer: 'When a 2degrees tech support agent says this, they do not mean "it is banned." They mean they cannot legally look at your third-party ASUS router dashboard over the phone to fix it for you. You are responsible for configuring the VLAN settings yourself. Once configured, it will run perfectly.'
---

# 2degrees Broadband: Third-Party Router Settings Guide

<div class='instant-fix-box'>
  <p>To use a BYO third-party router on a 2degrees New Zealand Fibre connection, connect your computer to the router and open the Setup Wizard. Select <strong>PPPoE</strong> as the connection type. Enter generic text into the Username/Password fields (e.g., <em>user / password</em>). Crucially, you must find the IPTV/VLAN settings menu. Enable 802.1Q VLAN Tagging and set the <strong>VLAN ID to 10</strong>. Set the 802.1p Priority to 0. Save settings and reboot.</p>
</div>

<AdSenseBlock slot='article-top' />

## Ditching the Free ISP Box

The 2degrees network in New Zealand provides excellent speeds, and their supplied routers (such as the AVM FritzBox or Netgear Orbi) are generally acceptable for the average user. 

However, if you are a heavy gamer, a small business operator, or a smart-home enthusiast with 40+ devices, you need serious "Prosumer" networking hardware. When you spend $800 on a high-end ASUS ROG Rapture, TP-Link Deco Mesh, or Ubiquiti UniFi system, you expect it to unleash your network's true potential. 

But when you plug that expensive new router directly into the Chorus box on the wall, nothing happens. The router tells you the internet is disconnected.

You haven't broken anything. 2degrees hasn't banned your MAC address. You simply haven't configured the complex digital "handshake" required by the New Zealand telecom network. 

Here is exactly how to configure the PPPoE and VLAN 10 settings on any third-party router in 2026.

## The Physical Setup

Before altering digital settings, you must ensure the cables are correct. A common mistake is plugging the new router into the old 2degrees FritzBox. This is called "Double NATting" and causes massive lag. 

1.  Completely unplug and remove the old 2degrees-supplied router. Put it in a cupboard.
2.  Take your new ASUS/Netgear router.
3.  Connect a yellow Ethernet cable from the **WAN** or **Internet** port on your new router directly to **Port 1 (GE1)** on the white Chorus box on your wall. 
4.  Connect your laptop to the new router via Wi-Fi or Ethernet to access the dashboard.

## Step 1: The PPPoE "Dummy" Credentials

Open your web browser and navigate to your new router's setup page (usually `192.168.1.1` or `router.asus.com`). 

The Setup Wizard will ask you to select an **Internet Connection Type**.

In New Zealand, unlike Australia which heavily uses DHCP/IPoE, most major Fibre providers (including 2degrees, Spark, and Skinny) still use **PPPoE (Point-to-Point Protocol over Ethernet)** for their backend wholesale routing.

1.  Select **PPPoE** from the drop-down menu.
2.  The wizard will immediately ask you for a Username and Password. 
3.  Twenty years ago, you had to call your ISP for this specific password. In 2026, 2degrees Fibre authenticates your connection purely based on the physical gigabit port at the Chorus street cabinet, not a username.
4.  However, the ASUS/Netgear software *demands* you type something into those boxes, or it won't let you click 'Next'.
5.  Type literally any generic word into the **Username** box (e.g., `user`).
6.  Type literally any generic word into the **Password** box (e.g., `password`). 

<AdSenseBlock slot='article-middle' />

## Step 2: The Mandatory VLAN 10 Tagging

This is the single most important step. If you get this wrong, the connection will fail completely.

Chorus (the company that owns the physical fibre network) separates data on its fibre optic cables into virtual driving lanes, known as VLANs (Virtual Local Area Networks). 

In New Zealand, standard Internet traffic is assigned to **Lane 10**. 

If your new ASUS router sends its data out "untagged," Chorus looks at the data, doesn't know which lane to put it in, and deletes it at the exchange. You must explicitly tell your router to stamp a giant "10" on every data packet leaving your house.

Finding this setting depends entirely on your router brand. It is almost never on the main connection page. You must hunt for it in the Advanced settings.

### ASUS Routers
1.  Go to the Advanced Settings menu on the left side.
2.  Click **LAN**.
3.  Click the tab along the top labeled **IPTV**. 
4.  Find the drop-down box labeled Select ISP Profile. Change it to **Manual**.
5.  Look for the row labeled **Internet**.
6.  In the "VID" or "VLAN ID" box next to Internet, type **10**. 
7.  In the PRIO (Priority) box, leave it at 0. Click Apply.

### Netgear Nighthawk / Orbi
1.  Go to the **Advanced** tab.
2.  Click **Advanced Setup**, then **VLAN / Bridge Settings**.
3.  Tick the box to **Enable VLAN / Bridge setup**.
4.  Select "By VLAN tag group" and click Add.
5.  Name the group "2degrees".
6.  Set the **VLAN ID** to **10**.
7.  Set the Priority to 0. Apply the settings to "All Ports" or "Internet Port". Click Save.

### TP-Link Routers (Deco / Archer)
1.  Go to the **Advanced** or **Network** menu.
2.  Look for a menu specifically called **IPTV/VLAN**.
3.  Enable IPTV/VLAN.
4.  Set the Mode to **Custom**. 
5.  Locate the Internet VLAN ID box and type **10**.
6.  802.1Q Tag: Enable. Click Save.

## Step 3: The Mandatory Restart

Once the PPPoE connection type and VLAN 10 tagging are saved to the router's memory, you must reboot it so it can attempt a fresh handshake with the Chorus server. 

Turn the new router off at the wall. Wait 10 seconds. Turn it back on.

Within two to three minutes, the "WAN" light on your new router will turn solid white or blue. Your high-end network is now fully online, completely bypassing the default 2degrees ISP hardware.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
