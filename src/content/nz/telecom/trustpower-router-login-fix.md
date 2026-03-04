---
title: 'Trustpower Router Login Failed? The Default Password They Do Not Publish'
description: 'Cannot log in to your Trustpower router in NZ? The default password is not admin. Learn the real Trustpower NetComm login credentials, how to factory reset if locked out, and advanced settings to optimize your connection.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/trustpower-router-login.png'
tags: ['Trustpower', 'Router Login', 'Default Password', 'NetComm', 'NZ Tech']
instantAnswer: 'The default login for most Trustpower-supplied NetComm routers is username admin and password Trustpower (capital T, case-sensitive). Access the admin page at 192.168.1.1. If that password fails, check the sticker on the bottom of the router for a unique password, or factory reset by holding the Reset button for 10 seconds.'
faqs:
  - question: 'What is the default Trustpower router password?'
    answer: 'For most Trustpower-supplied NetComm routers, the default password is Trustpower with a capital T. Some newer models use a unique random password printed on the sticker on the bottom of the router instead.'
  - question: 'I factory reset my Trustpower router and now I have no internet. What happened?'
    answer: 'A factory reset wipes the VLAN 10 tagging that NZ fibre connections require. You need to re-enter the VLAN settings in the WAN configuration page. Set VLAN ID to 10, VLAN Priority to 0, and connection type to PPPoE or DHCP depending on your plan.'
  - question: 'Can I use my own router instead of the Trustpower one?'
    answer: 'Yes. You can use any router that supports VLAN tagging. Popular choices in NZ are the ASUS RT-AX86U and TP-Link Archer AX73. You need to configure VLAN 10 on the WAN port to work with the Chorus fibre network.'
  - question: 'Trustpower changed to Contact Energy. Do these instructions still work?'
    answer: 'Yes. Trustpower rebranded to Contact Energy for their broadband services. The routers are the same NetComm hardware and the default credentials have not changed.'
---

# Trustpower Router Login Failed? The Default Password They Do Not Publish

<div class='instant-fix-box'>
  <p>The default login for Trustpower (now Contact Energy) NetComm routers is username: admin and password: Trustpower (capital T, case-sensitive). Access it at 192.168.1.1 in your browser. If that does not work, flip the router over and look at the base sticker for a unique password. Still locked out? Hold the tiny Reset button on the back for 10 seconds with a paperclip to restore factory defaults.</p>
</div>

<AdSenseBlock slot='article-top' />

## Why the Normal Passwords Do Not Work

You have tried admin/admin. You have tried admin/password. You have even tried leaving the password blank. None of them work on your Trustpower router. You are not doing anything wrong. The problem is that Trustpower (which rebranded to Contact Energy for their broadband services) uses a non-standard default password on the NetComm routers they ship to NZ customers.

Unlike most routers worldwide that use generic credentials, Trustpower configured their NetComm units with the password **Trustpower** (with a capital T). This is case-sensitive, meaning **trustpower** with a lowercase t will not work. Neither will **TRUSTPOWER** in all capitals.

Here is a complete reference table of every Trustpower/Contact Energy router model and their default credentials, based on the hardware shipped to NZ households between 2019 and 2026:

| Router Model | Default Username | Default Password | Admin URL |
| :--- | :--- | :--- | :--- |
| NetComm NF18ACV | admin | Trustpower | 192.168.1.1 |
| NetComm NF18MESH | admin | Trustpower | 192.168.1.1 |
| NetComm NF4V | admin | Trustpower | 192.168.1.1 |
| NetComm NF15ACV | admin | Trustpower | 192.168.1.1 |
| NetComm NF10W | admin | Trustpower | 192.168.1.1 |
| NetComm NB604N | admin | admin | 192.168.1.1 |
| NetComm NB16DG | admin | Trustpower | 192.168.20.1 |

The older NB604N model is the exception. It uses the industry standard admin/admin combination. If you have this model (it is a small grey box from around 2015), try admin/admin first.

Some of the newest 2025 and 2026 units from Contact Energy have switched to using a **unique random password** printed on the white sticker on the bottom of the router. Look for a label that says 'Admin Password' or 'Settings Password.' This is different from the Wi-Fi password, which is usually on the same sticker but labeled separately.

## How to Access Your Trustpower Router Admin Page

Let me walk you through the complete process, step by step, assuming you have never logged into your router before.

### Step 1: Connect to the Router

You need to be connected to the router, either via Wi-Fi or via an Ethernet cable plugged into one of the yellow LAN ports on the back. You cannot access the admin page from a device that is not on the router's local network.

If you do not know the Wi-Fi password, look at the bottom sticker on the router. The Wi-Fi name (SSID) and password are printed there. Connect to that network first.

### Step 2: Open the Login Page

Open any web browser on your phone, laptop, or tablet. In the **address bar** (not the search bar), type:

**192.168.1.1**

Press Enter. You should see a login page with the NetComm or Trustpower/Contact logo.

If the page does not load, try these alternatives:
*   **192.168.20.1** (used on some NetComm models)
*   **192.168.0.1** (rare, but used on some older Trustpower units)
*   Make sure you are typing it in the address bar, not in Google search
*   Try a different browser or use a private/incognito window
*   Clear your browser cache

### Step 3: Enter Your Credentials

Type **admin** as the username.

Type **Trustpower** as the password. Remember the capital T.

Click Login or press Enter.

If the login fails, flip the router over and check the base sticker for a unique password. Try that instead.

### Step 4: You Are In

Once logged in, you will see the NetComm dashboard showing your connection status, connected devices, and basic settings. From here, you can change your Wi-Fi name, Wi-Fi password, security settings, and advanced network configuration.

<AdSenseBlock slot='article-middle' />

## What to Do When You Are Completely Locked Out

If none of the default passwords work and you cannot find a password on the sticker, someone in your household (or a previous tenant if you moved into a rental) changed the admin password at some point. The only way to get back in is a **factory reset**.

### How to Factory Reset Your Trustpower Router

1.  **Find the Reset Button:** Look at the back of the router. There is a tiny pinhole button labeled 'Reset' or 'RST.' You cannot press it with your finger. You need a paperclip, SIM ejector tool, or the tip of a ballpoint pen.
2.  **Press and Hold:** While the router is powered on and all lights are on, insert the paperclip into the reset hole and press firmly. Hold it down for a **full 10 seconds**. You will feel a small click when you press the internal button.
3.  **Watch the Lights:** After 10 seconds, release the button. The router lights will all turn off briefly, then start flashing as the router reboots. This takes about 90 seconds.
4.  **Wait for Stability:** When the Power light is solid green and the Internet light is either green or amber, the router has fully restarted.
5.  **Log In with Defaults:** The admin password is now back to **Trustpower** (or **admin** on NB604N models). Your Wi-Fi name and password are also back to the factory defaults shown on the base sticker.

### Critical Warning About Factory Resets on NZ Fibre

Here is something that catches almost every NZ user off guard. After a factory reset, your internet may not work even though the router has restarted. This is because the factory reset wiped the **VLAN 10 tagging** that every Chorus fibre connection in New Zealand requires.

VLAN 10 is a tag that tells the Chorus network 'this traffic belongs to a broadband customer.' Without it, the Chorus equipment at the other end ignores your router completely.

#### How to Re-Enter VLAN 10 After a Factory Reset

1.  Log in to the router at **192.168.1.1** with admin/Trustpower
2.  Navigate to **Internet** or **WAN Settings**
3.  Look for **VLAN** or **802.1Q** settings
4.  Enable VLAN tagging and set the **VLAN ID to 10**
5.  Set **VLAN Priority to 0**
6.  Set the connection type to **DHCP** (most Trustpower/Contact plans use DHCP, not PPPoE)
7.  Click Save and wait 2 minutes for the internet light to turn green

If the internet light stays amber after 5 minutes, try changing the connection type to **PPPoE** and contact Contact Energy support for your PPPoE username and password. Some legacy Trustpower plans use PPPoE authentication.

## Essential Settings to Change After Logging In

Now that you are inside the admin panel, here are the settings every NZ user should change on day one:

### Change the Admin Password

The first thing you should do is change the admin password from Trustpower to something personal. Go to **System** or **Administration** and set a new password. Write it down somewhere safe. If someone on your Wi-Fi knows the default password, they can access all of your router settings including parental controls, port forwarding, and even DNS settings.

### Change the Default Wi-Fi Name

The default Wi-Fi name is usually something generic like 'NetComm-XXXX' which immediately tells anyone scanning for networks that you are using a stock ISP router. This is a mild security risk because attackers know the default admin credentials for stock routers. Change the SSID to something that does not identify the router brand.

### Enable WPA3 Security (If Available)

Under **Wireless Security** settings, check if WPA3 is available. If your NetComm supports it, switch from WPA2 to **WPA3** or **WPA2/WPA3 Mixed Mode**. WPA3 is significantly more secure against password cracking attacks, especially for shorter passwords. Not all devices support WPA3 yet, so mixed mode is the safest choice in 2026.

### Disable WPS (Wi-Fi Protected Setup)

WPS is a convenience feature that lets you connect devices by pressing a button on the router. Unfortunately, it has a well-known security vulnerability that allows attackers to brute-force your Wi-Fi password in hours. Go to **WPS Settings** and turn it **OFF**. You can always connect devices by typing the password manually.

### Set a Custom DNS Server

By default, your Trustpower router uses Contact Energy's DNS servers. These are functional but often slower than public alternatives. Go to **DNS Settings** (usually under WAN or Internet settings) and change the DNS servers to:

*   **Primary: 1.1.1.1** (Cloudflare - the fastest DNS in NZ based on independent tests)
*   **Secondary: 8.8.8.8** (Google - extremely reliable)

This change alone can make websites feel noticeably faster to load because DNS resolution (looking up the address of a website) happens before any data can be downloaded.

## Troubleshooting Common Login Issues

### The Page Loads But Looks Broken

If the login page appears but the layout is scrambled, buttons are missing, or images will not load, your browser cache is likely corrupted. Open an incognito or private browsing window and try again. This forces your browser to load the page fresh without using cached data.

### The Page Times Out or Shows Connection Refused

This usually means your device is not actually connected to the router's network. Check your Wi-Fi connection. If you are connected to a mobile hotspot instead of the home Wi-Fi, you will not be able to reach 192.168.1.1. Also verify that Airplane Mode is not enabled.

If you are connected via Ethernet cable and still cannot reach the page, try:
1.  Unplugging the Ethernet cable and plugging it back in
2.  Using a different LAN port on the back of the router
3.  Restarting your computer's network adapter (disable and re-enable Wi-Fi/Ethernet in your network settings)

### The Page Shows a Certificate Warning

Some browsers show a security warning when accessing 192.168.1.1 because the router's admin page uses HTTP instead of HTTPS. This is normal and safe for a local network connection. Click **Advanced** and then **Proceed** or **Continue** to bypass the warning.

## Local Support and Hardware Options

If your Trustpower/Contact router is several years old and you are experiencing frequent disconnections or slow speeds even after logging in and changing settings, it might be time for a hardware upgrade.

### From Contact Energy

Call Contact Energy on **0800 494 847** and ask about a modem upgrade. If your current router is more than 3 years old, they may send a replacement for free depending on your plan.

### Third-Party Routers from NZ Stores

*   **PB Tech** stocks the full range of ASUS, TP-Link, and Netgear routers. The **TP-Link Archer AX73** ($180 NZD) is an excellent replacement. Remember you need to configure VLAN 10 on any third-party router.
*   **Noel Leeming** has the **Google Nest WiFi Pro** ($320 NZD) which is the simplest mesh option for non-technical users.
*   **Jaycar NZ** sells Ethernet cables, surge protectors, and networking accessories if you need supplies for your setup.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
