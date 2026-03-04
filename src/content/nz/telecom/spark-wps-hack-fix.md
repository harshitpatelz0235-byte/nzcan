---
title: 'Spark Smart Modem WPS Hack: How to Disable It Before You Are Breached'
description: 'Wi-Fi Protected Setup (WPS) is a massive security flaw built into millions of NZ routers, including the Spark Smart Modem. Learn how hackers use this flaw, and the exact steps to disable WPS to secure your home network in 2026.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/spark-wps-hack-fix.png'
tags: ['Spark', 'Smart Modem', 'WPS Vulnerability', 'Wi-Fi Security', 'NZ Tech', 'Router Settings']
instantAnswer: 'WPS (Wi-Fi Protected Setup) allows hackers to bypass your strong Wi-Fi password in minutes using a "Pixie Dust" attack. To disable it on a Spark Smart Modem: Log in at 192.168.1.254 (admin/admin). Go to WLAN or Wireless Settings > WPS. Change the toggle from Enable to Disable. Click Apply. Do not rely on just turning off the physical WPS button on the router; it must be disabled in the software.'
faqs:
  - question: 'What is WPS and why is it dangerous?'
    answer: 'WPS was designed in 2006 to let you connect devices (like printers) by pushing a button or entering an 8-digit PIN, instead of typing a long password. The 8-digit PIN is cryptographically broken. Hackers can "brute force" guess the PIN within hours using free laptop software, granting them instant access to your Wi-Fi, regardless of your main password.'
  - question: 'Does ignoring the physical WPS button keep me safe?'
    answer: 'No. Even if you never press the physical WPS button on the side of your Spark router, the PIN-based WPS authentication is still active in the background software. Hackers attack the software PIN, not the physical button.'
  - question: 'Will disabling WPS disconnect my smart TV or phones?'
    answer: 'No. All your existing connected devices will stay connected. However, when connecting a new device in the future, you will have to type in the actual Wi-Fi password instead of using the WPS button method.'
  - question: 'Are other NZ ISP routers vulnerable?'
    answer: 'Yes. Almost all routers supplied by One NZ, Skinny, 2degrees, and Slingshot ship with WPS enabled by default to reduce customer support calls. If you use the supplied ISP router, you should disable WPS immediately.'
---

# Spark Smart Modem WPS Hack: How to Disable It Before You Are Breached

<div class='instant-fix-box'>
  <p>The WPS (Wi-Fi Protected Setup) feature on your Spark Smart Modem is a severe security risk. To disable it, log into the modem at <strong>192.168.1.254</strong> using the password on the back sticker. Navigate to <strong>WLAN</strong>, then click <strong>WPS Setting</strong> in the sub-menu. Uncheck the <strong>Enable WPS</strong> box and click <strong>Apply</strong>. Never use it again.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Convenience" That Ruins Your Security

You just spent ten minutes carefully creating a highly secure, 16-character Wi-Fi password for your house. It contains uppercase letters, numbers, and symbols. It would take a supercomputer millions of years to guess it.

You feel secure. But on the side of your Spark Smart Modem, there is a small button labeled **WPS**. Because that button exists, a moderately skilled teenager parked in a car across the street from your house can completely bypass your 16-character password and access your network in under two hours.

Wi-Fi Protected Setup (WPS) is the biggest security vulnerability actively deployed in New Zealand living rooms in 2026. Internet Service Providers (like Spark, One NZ, and Skinny) leave it turned on by default because it saves them money. It is easier to tell an elderly customer over the phone to "just push the WPS button to connect your new printer" than it is to walk them through typing a complex password into a tiny screen.

But that convenience comes at a terrifying cost. Here is exactly how the hack works, and how to stop it on a Spark Smart Modem.

## How the WPS Hack Works

WPS operates using an 8-digit PIN. The idea was that typing 8 numbers is easier than typing a complex Wi-Fi password.

However, the cryptography behind the WPS 8-digit PIN was fundamentally broken at the design stage. When a hacker's laptop tries to guess the PIN, the router does not check all 8 digits at once. It checks the first 4 digits separately from the last 4 digits. Furthermore, the last digit is just a "checksum" (a mathematical verification of the other numbers).

This turns a seemingly impossible guessing game into a trivial one. Instead of having to guess 100,000,000 combinations, the hacker's computer only has to try a maximum of **11,000 combinations**.

Using free, open-source penetration testing software (like Reaver or Bully) downloaded from the internet, a laptop sitting on your front lawn can automatically "brute-force" guess these 11,000 combinations.

1.  The hacker runs the software.
2.  The software tries PIN after PIN, thousands of times an hour.
3.  Within 2 to 4 hours, the router accepts the correct PIN.
4.  **The fatal flaw:** Once the correct PIN is received, the Spark router automatically hands the hacker your actual, 16-character secret Wi-Fi password in plain text.

They do not need to push the physical button on your router. The entire attack happens remotely over the radio waves via the software PIN vulnerability.

### The "Pixie Dust" Attack (The Instant Hack)

As if the brute-force attack wasn't bad enough, a newer attack called "Pixie Dust" was discovered that affects specific chipset manufacturers (including Broadcom and MediaTek chips used in many popular NZ routers).

Due to a flaw in how these specific routers generate random numbers during the WPS handshake, the Pixie Dust attack does not have to guess 11,000 combinations. It can mathematically calculate the correct PIN from the very first handshake. This reduces the hacking time from a few hours to **literally seconds**.

## Step-by-Step: Disabling WPS on the Spark Smart Modem

Because the attack happens against the software PIN, placing tape over the physical button on the side of the Spark Smart Modem does nothing. You must disable the protocol deep within the router's firmware.

Here is how to secure the standard Spark Smart Modem 2 or 3:

1.  Connect your computer or phone to the Spark Wi-Fi network.
2.  Open your web browser and type the router address: **192.168.1.254** into the address bar.
3.  The login screen will appear. If you have not changed it, the username is usually `admin` and the password is `admin`, or the unique randomized password printed on the sticker on the back of the tower.
4.  Once logged into the dashboard, click on **WLAN** from the main menu (sometimes labeled Wireless or Wi-Fi).
5.  Look for a secondary tab or left-hand menu option named **WPS** or **WPS Setting**.
6.  You will likely see a toggle switch or a checkbox labeled **Enable WPS** or **WPS Status**.
7.  Change this setting to **Disabled** or **Off**.
8.  Click the **Apply** or **Save** button at the bottom of the page.

The router may take 30 seconds to restart its Wi-Fi radios. During this time, your devices will temporarily disconnect. When they reconnect, the WPS protocol will be permanently dead, and your 16-character Wi-Fi password will finally be providing actual security.

<AdSenseBlock slot='article-middle' />

## Will Disabling WPS Break My Smart Home?

**No.** Disabling WPS does not delete your Wi-Fi network or change your main Wi-Fi password.

All the devices currently connected to your network—your iPhones, your Samsung TV, your Google Home speakers—already know the real Wi-Fi password. They will reconnect automatically and function exactly as they did before.

The only thing that changes is the *future*.

Let's say you buy a new HP wireless printer tomorrow. You unpack it. The instruction manual says: *"Press the WPS button on your router, then press the WPS button on the printer to connect."*

**This will no longer work.** Because you disabled WPS, the router will ignore the printer's request.

Instead, you will have to use the alternative connection method provided in the printer's manual. This usually involves connecting directly to the printer's temporary setup Wi-Fi network via an app on your phone, and manually typing your home Wi-Fi password into the app so the printer can memorize it.

It takes two extra minutes of work once every few years when you buy a new smart device. That is an incredibly small price to pay to stop someone from digitally sitting in your living room.

## What Can a Hacker Do Once the Spark WPS is Breached?

Some people assume that if their Wi-Fi is hacked, the worst that happens is a neighbor steals some of their unlimited Netflix data. In 2026, stealing data is the least of your problems.

If a hacker uses the WPS vulnerability to gain access to your local Wi-Fi network, they bypass the router's firewall entirely. They are now "inside the house" digitally.

1.  **Smart Device Manipulation:** They can access any smart home devices on your network. They can view the live feed of cheap, unsecured Wi-Fi baby monitors or indoor security cameras.
2.  **Man-in-the-Middle Attacks:** They can intercept traffic between your laptop and the internet. While modern banking websites use HTTPS encryption, hackers can use local network spoofing to redirect you to fake login pages and steal credentials.
3.  **Router Takeover:** Because most people never change the `admin` password to log into `192.168.1.254`, the hacker can log into your Spark router, change the DNS settings, and route all your web traffic through malicious servers in Russia.
4.  **Illegal Activity Routing:** Hackers often use compromised home Wi-Fi networks in New Zealand to launch denial-of-service (DDoS) attacks or download illegal material. When the NZ Police track the IP address, it leads back to your Spark account and your front door, not the hacker sitting in a van down the street.

## Are Other NZ ISP Routers Vulnerable?

Yes. Do not think this is just a Spark problem.

Almost every single free hardware unit supplied by New Zealand internet providers—including the One NZ UltraHub, the Skinny Smart Modem, the Slingshot NetComm routers, and the Trustpower mesh units—have WPS enabled by default straight out of the box.

The ISPs simply calculate that the thousands of support calls they would receive from technologically illiterate customers failing to connect a wireless printer outweigh the statistical risk of highly targeted local Wi-Fi hacks.

It is up to you to secure your own home. Log into your router, find the WPS setting, and turn it off forever.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
