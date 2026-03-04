---
title: 'Slingshot NetComm Router: How to Unlock the Advanced Settings'
description: 'Are you trying to port forward a game or change your DNS on a Slingshot router, but the Advanced menu is missing? Learn the secret admin login credentials to unlock the full capabilities of your NetComm hardware.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/slingshot-advanced-tab-unlock.png'
tags: ['Slingshot', 'NetComm', 'Advanced Settings', 'Router Login', 'Port Forwarding', 'NZ Tech']
instantAnswer: 'Slingshot locks down its NetComm routers by giving customers a restrictive "Basic User" login. If you log into 192.168.20.1 using the username "admin" and the password on the back sticker, the Advanced tab is hidden. To unlock the full router (including Port Forwarding and DNS settings), you must log out, and log back in using the username "admin" and the universal admin password "slingshot" (all lowercase). If that fails, try "admin" and "admin".'
faqs:
  - question: 'Why does Slingshot hide the Advanced Settings?'
    answer: 'ISPs hide advanced settings to reduce customer support costs. If a user accidentally deletes the WAN PPoE configuration inside the Advanced tab, their internet will break, and Slingshot has to spend 45 minutes on the phone fixing it. Hiding the menu protects the baseline internet connection from accidental deletion.'
  - question: 'Is the standard "admin" password printed on the sticker?'
    answer: 'No. The sticker on the back of the Slingshot NetComm router usually provides a unique password (e.g., A1bB2Cc3). This unique password only logs you into the restricted "Basic" interface. The actual root-level admin password is hardcoded into the Slingshot firmware and is not printed on the box.'
  - question: 'Do I need Advanced access to change the Wi-Fi password?'
    answer: 'No. The Basic user login allows you to change the Wi-Fi network name (SSID) and the Wi-Fi password. You only need the Advanced login if you want to change internal network protocols, like Port Forwarding, Static IPs, or Custom DNS servers.'
  - question: 'Will unlocking Advanced Settings void my Slingshot contract?'
    answer: 'No. You are completely permitted to log into the advanced side of the router to configure your local home network. However, if you delete the primary Slingshot WAN configuration and lose your internet connection, the technical support team will likely force you to factory reset the router to fix it.'
---

# Slingshot NetComm Router: How to Unlock the Advanced Settings

<div class='instant-fix-box'>
  <p>To access the hidden Advanced Setup tab on a Slingshot NetComm router (NF18ACV or NF18MESH), the password on the back sticker will not work. Open your browser and go to <strong>192.168.20.1</strong>. In the Username box, type <strong>admin</strong>. In the Password box, type <strong>slingshot</strong> (all lowercase). Click Login. The left-hand menu will now expand with a massive list of new options, including Advanced Setup, Port Forwarding, and DNS overrides.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Dumbed Down" Router Interface

If you are a Slingshot gigabit fibre customer, or on one of their standard VDSL plans, there is a 90% chance you have a white NetComm NF18ACV or NF18MESH router sitting in your lounge. 

It is a surprisingly capable piece of hardware. However, out of the box, it feels like a Fisher-Price toy. 

When you log into the router to set up a static IP address for a security camera, or to configure Port Forwarding for a PlayStation 5, you will find heavily restricted menus. The left-hand navigation bar only shows basic options like "Wireless" and "Status". The crucial **Advanced Setup** tab is completely missing.

You look at the manual online, and it clearly shows an Advanced tab. What gives?

Slingshot (and its parent company Vocus) deliberately locks down the firmware before they courier the router to your house. They provide you with a "Basic User" account. This allows you to change your Wi-Fi password, but prevents you from touching the core network mechanics. 

While this prevents hundreds of support calls from people accidentally deleting their internet connection, it is incredibly frustrating for "power users" in 2026. Fortunately, bypassing this restriction is trivial.

## Step 1: Ditching the "Sticker Password"

The trap that catches most people is the sticker on the back of the router itself.

It proudly displays a "Web Login" section, complete with a username (`admin`) and a highly secure, randomized password (e.g., `Hf79kx2P`).

When you faithfully type that randomized password into the `192.168.20.1` login portal, the router accepts it without complaint. It logs you into the dashboard. Because you logged in successfully, you assume you must be the master administrator.

**You are not.** The password printed on the sticker is intentionally hardcoded to the restricted User-Tier profile. It is a decoy password.

To get into the real router:
1.  Look at the top right corner of the router dashboard currently open on your screen.
2.  Click the **Logout** button.
3.  You must return to the blank login screen at `192.168.20.1`.

## Step 2: The Root "Admin" Credentials

Because Slingshot uses custom firmware to lock out the sticker password, they also hardcode a universal "backdoor" password into every single unit they ship so their call center staff can help people over the phone.

1.  At the main login screen, look at the **Username** box. Type `admin` (all lowercase).
2.  In the **Password** box, type `slingshot` (all lowercase).
3.  Click Login.

### Alternative Common Passwords
If Slingshot has updated your specific firmware batch recently, and the word `slingshot` fails, try the following universal NetComm alternatives in the password box:
*   `admin`
*   `NetComm` (capital N and C)
*   The last 4 digits of the router's MAC address (found on the back sticker), e.g., `A1B2`.

If none of those work, someone in your house has manually changed the root admin password in the past. To proceed, you will have to take a paperclip, push and hold the tiny reset button on the back of the router for 15 seconds to Factory Reset the unit back to its original Slingshot state.

<AdSenseBlock slot='article-middle' />

## Welcome to the Real Router

Once you log in with the verified root admin credentials, the screen will refresh. 

At first glance, it looks identical. But if you look at the blue menu bar running down the left-hand side of the screen, you will instantly notice a massive structural change. 

Instead of three generic menus, you now have a comprehensive list of technical options, headlined by the crucial **Advanced Setup** button. 

You have successfully unlocked the router. You now have the exact same level of access as the engineers who designed the hardware.

## Top 3 Things to Do in the Advanced Menu

Now that you have broken out of the sandbox, what should you actually do with your newfound administrative power? Here are the top three configurations every power user should make in 2026.

### 1. Fix PS5/Xbox "Strict NAT" via Port Forwarding
If your voice chat drops out on Discord, or Call of Duty tells you that your "NAT Type is Strict", it means the router's firewall is too aggressive and blocking incoming game connections.
*   Go to **Advanced Setup** > **NAT** > **Virtual Servers**.
*   This is the Port Forwarding menu. You can add the specific port numbers required by PlayStation Network (e.g., TCP 80, 443, 3478) to permanently force the router to leave a clean tunnel open for your console.

### 2. Set Custom DNS Servers (The Speed Hack)
By default, the router uses Slingshot's DNS servers to look up website addresses (converting 'google.com' into an IP address). Slingshot's servers are fine, but they are not the fastest on the planet. Switching to Google or Cloudflare DNS can strip precious milliseconds off your website loading times.
*   Go to **Advanced Setup** > **DNS** > **DNS Server**.
*   Uncheck the box that says "Use Auto Discovered DNS".
*   Enter Google's DNS servers into the static boxes provided: `8.8.8.8` and `8.8.4.4` (Or Cloudflare: `1.1.1.1` and `1.0.0.1`).
*   Click Apply. From now on, your router will query massive global databases instantly.

### 3. Assign Static IP Addresses
If you use wireless printers or smart home systems (like Philips Hue or a local Plex Media Server), those devices need to be found reliably by your phone. If the router's DHCP system gives them a different IP address every day, your phone app will break.
*   Go to **Advanced Setup** > **LAN**.
*   Scroll down to the "Static IP Lease List".
*   Enter the MAC address of your printer, and assign it a permanent IP address (e.g., `192.168.20.150`). The router will never give that address to another device, ensuring your printer always stays exactly where the network expects it to be.

## The "Danger Zone" Warning

With great power comes great responsibility. 

The primary reason Slingshot hid the Advanced Setup menu is because the very first option inside it is called **WAN Service**. 

Inside the WAN Service menu lies the core PPPoE or IPOE connection profiles that allow the router to actually talk to the Chorus Optical Network Terminal on the wall. It contains your unique Slingshot account credentials and VLAN tagging numbers.

**Do not touch the WAN menu.** 

If you accidentally delete the profile named `ptm0.1` or `eth4.10`, your house will immediately lose internet. The only way to get it back will be to call Slingshot support on your mobile data, endure a 40-minute hold queue, and have a technician begrudgingly read the complex VLAN codes back to you while you manually rebuild the profile from scratch.

Experiment with the LAN settings, the firewall, and the DNS. But leave the WAN profile exactly as you found it.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
