---
title: 'Skinny Broadband: How to Fix Blocked Websites'
description: 'Are perfectly normal websites like banking, streaming, or gaming servers unexpectedly blocked on your Skinny home internet? Learn how to disable the hidden network-level IP filtering and change your DNS to regain full access.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/skinny-ip-filtering-blocked.png'
tags: ['Skinny', 'Website Blocked', 'IP Filtering', 'DNS', 'Internet Settings', 'NZ Tech']
instantAnswer: 'If Skinny Broadband is blocking a normal website, your router is likely pulling the restrictive "Spark Adult Filter" DNS servers by mistake, or the internal firewall is set too high. To fix it: Log into 192.168.1.254. Go to Advanced > Firewall. Change the Firewall Level from "High" to "Low" (or Standard). Then, go to Advanced > DHCP Settings. Manually change the Primary DNS to 8.8.8.8 and the Secondary DNS to 8.8.4.4. Click save and restart the router.'
faqs:
  - question: 'Why does Skinny randomly block my banking website?'
    answer: 'Skinny uses the Spark wholesale network. If the Spark dynamic IP address pool accidentally assigns your house an IP address previously flagged by an international anti-spam database, strict internal firewalls might temporarily restrict your traffic. Changing your DNS servers bypasses the localized Spark security filter.'
  - question: 'What is a DNS server?'
    answer: 'A DNS (Domain Name System) server is the internets phonebook. When you type "Google.com", the DNS server translates that into a numbers-based IP address. Skinny uses their own DNS servers by default. Switching to Googles DNS (8.8.8.8) or Cloudflares DNS (1.1.1.1) is often faster and lacks restrictive corporate filters.'
  - question: 'Does changing the firewall to Low make me vulnerable to hackers?'
    answer: 'No. The "Low" setting on a Skinny/Spark router still utilizes a standard NAT (Network Address Translation) firewall, which makes your devices completely invisible to the outside internet. Setting the firewall to "High" or "Strict" actively scans outgoing traffic, which frequently breaks modern secure websites and video games.'
  - question: 'Could a third-party VPN be causing the block?'
    answer: 'Yes. If you have Norton 360, McAfee, or a commercial VPN (like NordVPN) running on your laptop, those services often clash with Skinnys routing protocols. If a website is blocked, turn off your VPN software first to isolate the problem.'
---

# Skinny Broadband: How to Fix Blocked Websites

<div class='instant-fix-box'>
  <p>To stop Skinny broadband from blocking legitimate websites, log into your router at <strong>192.168.1.254</strong>. First, navigate to the <strong>Firewall</strong> menu and change the security level from High/Strict to <strong>Low</strong>. Second, navigate to the <strong>DHCP Server</strong> or <strong>LAN</strong> settings. You must overwrite the default Skinny DNS servers. Enter <strong>8.8.8.8</strong> (Google DNS) as the primary, and <strong>1.1.1.1</strong> (Cloudflare DNS) as the secondary. Click apply and reboot.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Connection Reset" Nightmare

Skinny Broadband is wildly popular in New Zealand because it offers great speeds at a massive discount compared to its parent company, Spark. 

However, many Skinny customers occasionally run into a bizarre and deeply frustrating problem. You sit down to check your ASB bank account, pay a power bill, login to a work VPN, or access a specific international gaming server, and the browser throws a sudden error:

> *"ERR_CONNECTION_RESET"* or *"This site cannot be reached."*

You disconnect your phone from Wi-Fi and try the exact same website on your mobile data, and it loads instantly. The website isn't broken. Your Skinny home broadband connection is actively blocking it.

This happens due to a combination of over-aggressive default firewall rules on the Skinny router, and occasional routing errors within the Spark DNS servers. Because Skinny is a budget provider, calling their tech support to fix a localized "Blocked IP" issue can be tedious. 

Here is exactly how to bypass the Skinny network filters yourself in 2026 and get unrestricted access to the internet.

## Fix 1: Disabling the "High" Firewall Setting

The modems supplied by Skinny (often re-badged Huawei or ZTE units) come with a built-in security firewall. 

In an attempt to protect non-technical users from malware, the factory settings often have the IPv4 Firewall bumped up to "Standard" or "High". 

The "High" setting performs deep-packet inspection. If it doesn't immediately recognize the security certificate of the website you are trying to visit, or if a video game uses a non-standard communication port, the router simply drops the connection. It acts as a crude, internal IP Filter.

**How to step the firewall down:**

1.  Connect your laptop or phone to the Skinny Wi-Fi.
2.  Open your browser and type **192.168.1.254** into the address bar.
3.  Log in using the Username and Password printed on the sticker on the back of the modem.
4.  Navigate to the **Advanced** tab (or 'Internet' tab, depending on the model).
5.  Look for a menu called **Security** or **Firewall**.
6.  Look at the toggle for the IPv4 Firewall level.
7.  Change the setting from High / Medium to **Low**.
8.  Click **Save/Apply**. 

*Note: You are not removing your security. The "Low" setting still maintains NAT (Network Address Translation). NAT means hackers outside your house cannot see your laptop or maliciously connect to it. "Low" simply stops the router from aggressively censoring the traffic you explicitly request.*

<AdSenseBlock slot='article-middle' />

## Fix 2: The Google DNS Bypass (The Silver Bullet)

If the firewall is set to Low and the website is still blocked, the problem lies deeper in the network: the Skinny DNS servers.

When you type *reddit.com* into your browser, your computer asks the default Skinny Domain Name System (DNS) server to translate that word into a physical IP address string (like `151.101.129.140`). 

Often, Skinny's DNS servers get corrupted, or they accidentally pull an automated blocklist designed for Spark's "Adult Content Filter" program. When this happens, the DNS server refuses to translate the website, rendering it blocked.

The ultimate fix is to stop using Skinny's phonebook entirely. You can tell your router to use Google's massive, uncensored global phonebook instead.

**How to change your router's DNS:**

1.  Log back into the Skinny modem at **192.168.1.254**.
2.  Go to the **Advanced** menu.
3.  Find the **Local Network**, **LAN**, or **DHCP Server** menu.
4.  *Crucial:* You are looking for the 'DHCP Server' section, because this dictates the settings the router hands out to all your phones and TVs.
5.  Look for boxes labeled **Primary DNS** and **Secondary DNS** (you may have to uncheck a box saying 'Auto-Assign DNS' first).
6.  In the Primary box, type: **8.8.8.8** (This is Google's primary server).
7.  In the Secondary box, type: **1.1.1.1** (This is Cloudflare's ultra-fast server).
8.  Click **Save**.

### The Mandatory Router Reboot

Because your laptop already learned the "bad" Skinny DNS settings an hour ago, it won't immediately realize you changed the router. 

To force the change, you must restart everything. Turn the Skinny modem off at the wall. Wait 30 seconds. Turn it back on. Once the Wi-Fi returns, your laptop will connect, receive the new Google DNS instructions from the router, and bypass the Skinny network filters entirely. 

The website should now load instantly.

## Fix 3: The IPv6 Routing Glitch

In 2026, most New Zealand ISPs support Dual-Stack implementation, meaning they run the old IPv4 standard and the new IPv6 standard simultaneously.

Skinny supports IPv6. However, some international websites (particularly smaller streaming services and certain older corporate VPN portals) have misconfigured their IPv6 routing. 

If your laptop attempts to connect to the website using its Skinny IPv6 address, the distant server gets confused and drops the connection, making the website appear "blocked" exclusively on your home Wi-Fi.

**How to test if IPv6 is the culprit:**

If changing the DNS didn't work, temporarily disable IPv6 on the router to force the website to use the older, more reliable IPv4 pathway.

1.  Log into the Skinny modem dashboard.
2.  Go to **Advanced** > **Internet** (or WAN settings).
3.  Look for a toggle or connection profile specifically labeled **IPv6**.
4.  Toggle it to **Disable** or **Off**.
5.  Save the settings and restart the router.

If you restart the router and the banking website suddenly works flawlessly, you have diagnosed the problem. The website host has bad IPv6 routing.

If none of these three steps work in 2026, the website is not being blocked by Skinny. You are likely encountering a geoblock (the website detects you are in New Zealand and refuses entry) or the website itself is experiencing a global server outage. Try accessing the site through a commercial VPN to verify if it is an international geoblock.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
