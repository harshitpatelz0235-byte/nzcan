---
title: '2degrees Broadband: Should You Turn On IPv6?'
description: 'Many 2degrees customers are still running entirely on the older IPv4 standard. Learn what IPv6 is, why it matters for gaming in 2026, and exactly how to enable it inside your FritzBox router settings.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/2degrees-ipv6-settings.png'
tags: ['2degrees', 'IPv6', 'FritzBox', 'Internet Settings', 'Gaming', 'NZ Tech']
instantAnswer: '2degrees fully supports IPv6 natively on their broadband network, but it is often disabled by default in older FritzBox shipments. To enable it, log into 192.168.1.1 (or 192.168.178.1). Go to Internet > Account Information > IPv6. Check the box for "IPv6 Support Active." Select "Native IPv4 connection" and check "Use DHCPv6 Rapid Commit." Click Apply. Your devices will now pull both IPv4 and IPv6 addresses simultaneously.'
faqs:
  - question: 'What is the difference between IPv4 and IPv6?'
    answer: 'An IP address is your house number on the internet. The old system (IPv4) ran out of numbers globally years ago, forcing ISPs to use complex "sharing" systems like CGNAT. IPv6 provides an almost infinite amount of unique addresses, removing the need for sharing and giving your devices direct, unrestricted access to the internet.'
  - question: 'Will turning on IPv6 make my internet faster?'
    answer: 'It will not increase your raw download speed (e.g., from 300Mbps to 500Mbps). However, it drastically reduces "processing overhead" for the router. For modern services like Xbox Live, Netflix, and Google that natively support IPv6, the connection is more direct, which can slightly lower ping and result in faster initial website loading times.'
  - question: 'Does 2degrees charge extra for IPv6?'
    answer: 'No. The rollout of IPv6 infrastructure across the 2degrees backend network was completed years ago. Using the protocol is completely free on all standard consumer VDSL and Fibre plans.'
  - question: 'If IPv6 is so good, why is it turned off by default?'
    answer: 'For a long time, old smart home devices (like cheap Wi-Fi lightbulbs) would crash if the router broadcasted an IPv6 signal. To prevent support calls, router manufacturers often defaulted to IPv4-only. In 2026, virtually all consumer hardware fully supports "Dual Stack" (running both IPv4 and IPv6 simultaneously without crashing).'
---

# 2degrees Broadband: Should You Turn On IPv6?

<div class='instant-fix-box'>
  <p>To enable IPv6 on a 2degrees FritzBox router: Open a browser and navigate to <strong>192.168.178.1</strong> or <strong>192.168.1.1</strong>. Log in with your router password. Go to <strong>Internet</strong> > <strong>Account Information</strong> > <strong>IPv6</strong> tab. Check the box labeled <strong>IPv6 Support Active</strong>. Leave the connection setting on <em>Native IPv4 connection</em> and ensure <em>Use DHCPv6 Rapid Commit</em> is checked. Click Apply.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Silent Upgrade You Are Missing

If you are a 2degrees broadband customer, you are paying for access to an incredibly advanced, multi-million dollar national fibre network. 

However, if you are using an older FritzBox router—or if a technician set your connection up using old standard templates—your network is likely communicating with the world using a technology designed in 1981.

That technology is **IPv4**.

While IPv4 works perfectly fine for browsing Facebook and watching YouTube, it is technically obsolete. The world officially ran out of IPv4 addresses years ago. To keep the internet running, New Zealand ISPs implement complex "workarounds" to share a single IPv4 address among dozens of customers simultaneously.

The modern standard is **IPv6**. It is faster, structurally superior, and fully supported on the 2degrees network in 2026. 

Here is exactly why turning it on is the best 2-minute upgrade you can perform on your home connection, and how to activate it inside your AVM FritzBox.

## Why IPv4 is Dead (and Why CGNAT is Bad)

To understand the benefit of IPv6, you have to understand the problem with IPv4.

An IP address is like a digital phone number (e.g., `120.25.43.190`). Every time your laptop requests a website, it must provide a return address so the website server knows where to send the data back to.

The older IPv4 system only contained 4.3 billion unique addresses. With the explosion of smartphones, smart TVs, and smart fridges, the world ran out.

To solve this, ISPs (including 2degrees) began using a system called **CGNAT** (Carrier Grade Network Address Translation).

Think of CGNAT like a massive corporate switchboard. Instead of giving your house a direct outside line, 2degrees gives your house an "extension number." When you play an online game on your PlayStation, your data has to travel through the 2degrees corporate switchboard, get repackaged with a shared IP address, and then go out to the internet. 

When the game data comes back, it hits the switchboard again, which has to frantically scan a ledger to figure out which "extension" in New Zealand requested the data, before forwarding it to your house.

This switchboard processing adds milliseconds of delay. Worse, because you are sharing an IP address with 50 other houses, you cannot host game servers, open specific ports (Port Forwarding), or access your home security cameras while on holiday without encountering severe firewall blocks.

## The IPv6 Solution: A Direct Line

IPv6 solves this by using massive, 128-bit hexadecimal addresses (e.g., `2001:db8:3333:4444:5555:6666:7777:8888`). 

The number of available IPv6 addresses is so incomprehensibly large (340 undecillion) that 2degrees can comfortably assign a unique, publicly routable IP address to every single lightbulb, phone, and TV in your house.

When you enable IPv6 on your 2degrees connection, the switchboard is removed entirely.

*   **For Gamers:** Your PlayStation no longer has to negotiate through the ISP's NAT layer. You get a direct, unobstructed path to the game server. This eliminates "Strict NAT Type" errors in games like Call of Duty and lowers ping by removing the ISP processing overhead.
*   **For Streaming:** Major tech companies (Google, Netflix, Apple, Meta) all heavily prioritize IPv6 traffic. Netflix movies often start buffering significantly faster over an IPv6 connection because the server route is cleaner and more direct.
*   **For Smart Homes:** If you want to view your local home security cameras while sitting in a cafe in Melbourne, an IPv6 connection allows you to bypass complex DDNS (Dynamic DNS) setups and connect directly to the camera's unique global address.

## Step-by-Step: Enabling IPv6 on the 2degrees FritzBox

2degrees runs a fully "Dual-Stack" network. This is crucial. It means if you turn on IPv6, the router will still run legacy IPv4 simultaneously. If you visit an old, forgotten website from 2008 that doesn't understand IPv6, your router instantly hands it an IPv4 address. Nothing will break.

Here is how to activate it seamlessly on a FritzBox 7490, 7560, or 7530:

1.  Connect your computer or phone to the FritzBox Wi-Fi network.
2.  Open your internet browser and type **192.168.178.1** (or `192.168.1.1` if you changed the default local subnet) into the address bar. You can also try navigating to **http://fritz.box**.
3.  The login screen will appear. 
4.  Enter your FritzBox password. This is usually printed on the sticker underneath the router (labeled "FRITZ!Box password", which is different from the Wi-Fi Network key).
5.  On the left-hand menu column, click on **Internet**.
6.  In the sub-menu that drops down beneath it, click on **Account Information**.
7.  Look at the tabs running across the top of the main window. Click on the tab labeled **IPv6**.
8.  At the very top, check the box that says **IPv6 Support Active**.

<AdSenseBlock slot='article-middle' />

### Configuring the Connection Settings

Once you check the box, a list of connection options will appear beneath it. Because 2degrees uses standard network protocols, the default settings are almost always correct, but you must verify them.

1.  Look for the section titled "IPv6 Connection."
2.  You must select the option labeled **Native IPv4 connection**. 
    *(This sounds counter-intuitive, but it tells the router to establish the primary physical handshake using the standard Vodafone/2degrees VDSL or Fibre login, and then request the IPv6 block on top of it. Do NOT select "Always use a native IPv6 connection", as this can cause the initial PPPoE/DHCP handshake with the Chorus exchange to fail).*
3.  Scroll down to the "Connection Settings" section.
4.  Check the box labeled **Use DHCPv6 Rapid Commit**.
5.  Leave the "MTU" setting alone (usually automatic or 1492/1500).
6.  Click the **Apply** button at the bottom right of the screen.

### The Reboot and the Verification

The FritzBox will now save the settings and briefly renegotiate its connection with the 2degrees exchange. Your internet will drop out for approximately 15 seconds.

When the green lights return, your entire home network architecture has fundamentally changed. Your phones and laptops will notice the new protocol and automatically assign themselves an IPv6 address alongside their old IPv4 address.

To verify that it worked:
1.  Open an incognito or private browsing window on your laptop or phone.
2.  Go to the website: **test-ipv6.com**
3.  The website will run a 5-second diagnostic. It should return a massive 10/10 score with a green box stating: *"Your IPv6 connection appears to be working."*

If the test fails, try turning the Wi-Fi on your laptop off and on again to force it to request a new IP address from the newly upgraded router.

## Why Did the Technician Leave It Off?

If IPv6 is so superior, why do 2degrees technicians frequently leave it disabled when they install the router in your house?

The answer is historical compatibility.

Ten years ago, the transition to IPv6 was messy. Cheap, internet-of-things devices (like early generation $10 Kmart smart plugs or Wi-Fi security cameras) were programmed by developers who hard-coded them to only understand IPv4, 9-digit IP addresses.

When a router broadcasted a massive 128-bit hexadecimal IPv6 address, these cheap devices would panic, crash, and refuse to connect to the Wi-Fi entirely.

To prevent an avalanche of angry customer support calls from people saying "my smart bulb won't connect," New Zealand ISPs took the safest route: they left IPv6 turned off by default for residential customers. 

In 2026, this is no longer a valid excuse. The firmware on almost every device manufactured in the last five years fully understands Dual-Stack implementation. If you still own a faulty smart plug from 2014 that refuses to connect after you enable IPv6, the smart plug is a severe security risk and belongs in the bin anyway.

By enabling IPv6 on your 2degrees connection today, you are giving your gaming consoles and streaming devices the unrestricted, pure fibre connection they were actually designed for.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
