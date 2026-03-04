---
title: 'NetComm Router Dropping Connection? The Secret DHCP Lease Fix'
description: 'Does your NetComm NF18ACV or NF18MESH router randomly kick devices off the Wi-Fi every 12 to 24 hours? Learn how to identify and fix the infamous DHCP lease timing bug hidden deep in the advanced settings.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/netcomm-dhcp-lease-fix.png'
tags: ['NetComm', 'NF18ACV', 'NF18MESH', 'DHCP Lease', 'Wi-Fi Dropouts', 'NZ Tech']
instantAnswer: 'If your NetComm router randomly disconnects phones and smart TVs daily, the DHCP lease time is likely expiring and failing to renew. To fix this, log in to 192.168.20.1 (admin/admin). Go to Advanced Setup > LAN. Find the "Leased Time" setting (which defaults to 24 hours). Change this number from 24 to 336 (two weeks). Click Apply/Save. Reboot the router. This stops the daily disconnection cycle.'
faqs:
  - question: 'What is a DHCP Lease?'
    answer: 'When a device connects to your Wi-Fi, the router "leans" it an IP address (like 192.168.20.5) for a specific time limit. This is the DHCP Lease. When the time expires, the device must ask for the IP back. If the router software glitches during this handover, the device is kicked off the network.'
  - question: 'Why does this specifically affect NetComm routers?'
    answer: 'Thousands of NetComm NF18ACV and NF18MESH routers supplied by Slingshot, Orcon, and Contact Energy in New Zealand shipped with slightly buggy firmware regarding IP table management. When exactly 24 hours pass, the router sometimes clears the IP faster than an Apple iPhone or Samsung TV can request a renewal, causing an instant dropout.'
  - question: 'Do I have to do this for every single device?'
    answer: 'No. The DHCP lease time is a global setting managed by the router. By changing the lease time to 336 hours (14 days), you extend the lifespan of all IP addresses handed out by the router to every device in your entire house simultaneously.'
  - question: 'What if changing the lease time does not work?'
    answer: 'If extending the lease time to 336 hours does not stabilize your network, the router CPU itself may be overheating and crashing the DHCP server entirely. Check if the router feels unusually hot. If so, contact your ISP to request a free hardware replacement.'
---

# NetComm Router Dropping Connection? The Secret DHCP Lease Fix

<div class='instant-fix-box'>
  <p>To fix the daily Wi-Fi dropout bug on NetComm routers (NF18ACV/NF18MESH), log in to <strong>192.168.20.1</strong> using <em>admin/admin</em>. Navigate to <strong>Advanced Setup</strong> > <strong>LAN</strong>. Scroll down to the DHCP Server settings. Change the <strong>Leased Time (hour)</strong> from 24 to <strong>336</strong>. Click Apply/Save at the bottom of the page, then pull the power cord out of the wall to perform a hard reboot.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Every Day at 3 PM" Wi-Fi Dropout

You are working from home, and your internet is perfectly fast. But then, inexplicably, your laptop disconnects from the Wi-Fi. It refuses to reconnect for about two minutes. You look over at the router, and all the lights are still green. Then, five minutes later, your partner's phone drops off the Wi-Fi in the exact same manner.

You call your ISP (usually Contact Energy, Slingshot, or Orcon, who primarily supply NetComm hardware). They run a line test, tell you the Chorus connection is perfect, and advise you to "turn it off and on again."

Rebooting it works. The internet is flawless again... exactly until the same time tomorrow, when it drops out all over again.

You are not crazy, and your Chorus fibre line is not broken. You are experiencing the infamous **NetComm DHCP Lease Bug**, a software glitch that plagues thousands of NF18ACV and NF18MESH routers across New Zealand.

Here is exactly what is happening inside the router, and the 60-second setting change required to cure it forever.

## What is a DHCP Lease?

To understand the bug, you have to understand how a router talks to a phone.

When you walk in the front door and your iPhone connects to the Wi-Fi, the NetComm router uses a protocol called DHCP (Dynamic Host Configuration Protocol). Think of DHCP like a rental agency. The router has a pool of 200 available network IP addresses (ranging from 192.168.20.2 up to 192.168.20.254).

The router hands your iPhone an IP address (e.g., `192.168.20.15`), but it does not give it away forever. It "leases" the address to the phone for a specific time limit.

By default, NetComm sets this limit to **24 hours**.

When the clock hits 12 hours (halfway through the lease), the iPhone politely asks the router: *"Hey, my lease is halfway done. Can I renew it for another 24 hours?"* 
In a perfect world, the router says *"Yes,"* the lease clock resets, and you never notice a thing.

## The NetComm Firmware Glitch

The problem lies in how older NetComm firmware handles this renewal request when dealing with sleeping or low-power smart devices (like Apple iPads, smart TVs, or security cameras).

When the device attempts to softly renew its lease at the 12-hour mark, the NetComm router occasionally ignores the request. The 12 hours becomes 18 hours, then 23 hours.

Finally, at exactly 24 hours, the router's internal clock expires. The router violently revokes the IP address and kicks the device completely off the domestic Wi-Fi network. 

The device immediately panics, realizes it has been kicked off, and has to initiate a completely fresh, aggressive connection from scratch. To the user, this looks like the Wi-Fi symbol disappearing for 60 seconds and then magically coming back.

If you rebooted your router at exactly 3:00 PM yesterday to fix it, all your devices got fresh 24-hour leases simultaneously. This means the router will drop all of them again at exactly 3:00 PM today. It creates an infuriating cycle.

## How to Fix It: Extending the Lease Time

The easiest way to fix this bug is to radically extend the length of the DHCP lease. 

You cannot stop the router from eventually expiring the lease, but you can change the timer so it only happens once a fortnight (which gives the router software 14 days of opportunities to successfully renew the background handshake without dropping the connection).

Here is how to change the setting on any modern NetComm router:

1.  Connect your laptop or mobile phone to the NetComm Wi-Fi.
2.  Open your internet browser and type the NetComm default IP address: **192.168.20.1** into the top address bar.
3.  The login screen will appear. 
    *   **Username:** `admin`
    *   **Password:** `admin`
    *   *(Note: If admin/admin fails, check the sticker on the back of the router or use `slingshot` / `admin`).*
4.  Once you are in the dashboard, look at the left-hand menu. Click on **Advanced Setup**.
5.  In the sub-menu that opens, click on **LAN**.
6.  Look at the main screen. Scroll down until you see the section labeled **DHCP Server**.
7.  Look for the box labeled **Leased Time (hour)**. It will currently read `24`.
8.  Click inside the box, delete the 24, and type **336**.
    *(336 hours equals exactly 14 days).*
9.  Scroll to the very bottom of the page and click the **Apply/Save** button.

<AdSenseBlock slot='article-middle' />

## The Mandatory Hard Reboot

You have changed the rule, but you have not fixed the devices currently trapped on the old 24-hour cycle. Your laptop still thinks its lease is expiring today.

You must force every device in the house to ask the router for a brand new lease governed by the new 336-hour rule.

1.  Leave the router turned on.
2.  Walk over to the wall power socket and pull the power brick out of the wall.
3.  Wait exactly **10 seconds**.
4.  Plug the power brick back in.

As the router boots up over the next three minutes, every iPhone, smart TV, PlayStation, and laptop in your house will realize the router disappeared and came back. They will all automatically request a new IP address. The NetComm router will now hand them an IP address with a 14-day expiry timer.

The random daily Wi-Fi dropouts will instantly cease.

## Static IPs: The "Nuclear Option" for Stubborn Devices

If extending the global lease time to 14 days fixes the dropouts for your iPhones and laptops, but your Samsung Smart TV or your wireless Wireless Printer still randomly drops off the network, you have a specific hardware conflict.

Some older IoT (Internet of Things) devices have terrible Wi-Fi chips that completely fail to respond to DHCP renewals, regardless of how long the timer is. 

For these stubborn devices, the ultimate fix is to stop using the lease system entirely and assign them a **Static IP address**. This tells the NetComm router to reserve a permanent, forever IP address uniquely for that one device.

### How to Assign a Static IP on a NetComm Router:

1.  Log back into **192.168.20.1** via your laptop.
2.  Go to **Advanced Settings** > **LAN**.
3.  Scroll down beneath the DHCP server settings to the area labeled **Static IP Lease List**.
4.  Click the **Add** button.
5.  You will need the **MAC Address** of your problematic TV or printer. (You can usually find this 12-character code in the Network Settings menu on the TV screen itself, or by looking at a physical sticker on the back of the printer).
6.  Type the MAC Address into the box (e.g., `00:1A:2B:3C:4D:5E`).
7.  Type an IP address you want to permanently assign to it. It must be within the router's range (e.g., `192.168.20.200`).
8.  Click **Apply/Save**.

From now on, whenever your Smart TV connects to the Wi-Fi, the router sees its unique MAC address, bypasses the DHCP lease system entirely, and permanently grants it the `.200` address. The connection will never drop out again.

## Is My NetComm Router Dying?

If you change the lease time to 336 hours, assign static IPs, and the Wi-Fi Network *still* randomly disappears from your phone's list of available networks, you are no longer dealing with a DHCP protocol bug.

You are dealing with hardware failure.

The NetComm NF18ACV is an older unit. Over 5 years of running 24/7, the thermal paste on the internal CPU dries out. When the Broadcom processor inside the router gets too hot (especially in a sunny NZ lounge during summer), a safety mechanism kicks in and the CPU abruptly shuts down the Wi-Fi radios to cool off. Ten minutes later, they turn back on.

If your router physically feels burning hot to the touch, no software setting will save it. 

Call your ISP (Contact, Slingshot, etc.) on exactly this script: *"My supplied NetComm router is physically overheating and causing thermal shutdowns of the Wi-Fi antennas multiple times a day. I require a replacement modern Wi-Fi 6 unit."* 

Assuming you are still on a contract, they will almost always courier a brand new mesh unit (like the TP-Link Deco or Amazon eero) the very next day.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
