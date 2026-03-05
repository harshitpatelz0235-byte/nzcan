---
title: 'Shaw Go WiFi Not Connecting on iPhone? The iOS 18 Fix'
description: 'Is your iPhone refusing to connect to the ShawPasspoint network at the mall? Learn how iOS 18 security features break public Wi-Fi profiles and how to update to the modern Rogers network.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/shaw-go-wifi-passpoint-not-connecting.png'
tags: ['Shaw Go WiFi', 'Rogers Passpoint', 'iPhone iOS 18', 'Public Wi-Fi', 'Network Profile', 'Canada Tech']
instantAnswer: 'If your iPhone running iOS 18 refuses to connect to a Shaw Go WiFi or ShawPasspoint hotspot in 2026, the issue is Apple’s new "Private Wi-Fi Address" security feature. iOS 18 randomly changes your phone’s MAC address to prevent tracking. Because Shaw/Rogers authenticates devices using fixed MAC addresses, the network rejects your phone as an unknown device. Go to Settings > Wi-Fi, tap the "i" next to the Shaw network, and toggle "Private Wi-Fi Address" to OFF. Then, force your phone to reconnect.'
faqs:
  - question: "Did Rogers shut down Shaw Go WiFi?"
    answer: "Yes and no. After the massive 2023 merger, Rogers began aggressively retiring the legacy Shaw Go WiFi and ShawPasspoint network names (SSIDs). In 2026, the infrastructure remains, but the networks have been universally rebranded to Rogers WiFi Hotspots. If your phone is still looking for the word Shaw, it will fail to connect."
  - question: "Why does my iPhone say Unable to Join Network?"
    answer: "This happens when the security certificate installed on your iPhone expires, or the backend Rogers authorization server rejects your device limit. Most basic internet plans only allow 3 to 6 registered devices. If you bought a new iPhone but forgot to remove your old iPhone from your Rogers account, the server blocks the new connection."
  - question: "Is it safe to turn off Private Wi-Fi Address?"
    answer: "Turning off Private Address means the coffee shop router can see your phones true physical hardware number (MAC address). While this slightly reduces your absolute anonymity, it is 100% required to use heavily authenticated telecom networks like Rogers Passpoint."
  - question: "How do I install the new Rogers Passpoint profile?"
    answer: "You must connect to the open, unencrypted RogersWiFi network first. Open Safari, and a login captive portal will appear. Once you sign in with your MyRogers credentials, the portal will prompt you to download a new Apple Configuration Profile which formally installs the secure Passpoint certificate."
---

# Shaw Go WiFi Not Connecting on iPhone? The iOS 18 Fix

<div class='instant-fix-box'>
  <p>To fix an iPhone failing to join <strong>Shaw Go WiFi</strong> or <strong>ShawPasspoint</strong>: The network is likely rejecting your iOS 18 privacy settings. <strong>1.</strong> Open iOS Settings > Wi-Fi. <strong>2.</strong> Tap the blue <strong>"i"</strong> icon next to the network name. <strong>3.</strong> Toggle <strong>Private Wi-Fi Address</strong> to OFF. <strong>4.</strong> Toggle <strong>Limit IP Address Tracking</strong> to OFF. <strong>5.</strong> If it still fails, you are using an obsolete profile. Go to General > VPN & Device Management, delete the old "Shaw Passpoint" profile, and connect to the newly rebranded <strong>Rogers WiFi Hotspots</strong> network to download a fresh 2026 security certificate.</p>
</div>

<AdSenseBlock slot='article-top' />

## The End of an Era (and the Start of the Glitches)

For over a decade, hundreds of thousands of Western Canadians relied on **Shaw Go WiFi**. It was a massive network of over 100,000 public hotspots scattered across coffee shops, arenas, and transit stations from Vancouver to Winnipeg.

You installed a small security profile on your iPhone once, and your phone would magically auto-connect to the internet every time you walked into a Tim Hortons, saving you gigabytes of expensive cellular data. 

However, by 2026, the landscape has completely shifted. Rogers Communications fully absorbed Shaw in a historic merger. The physical Wi-Fi antennas bolted to the ceilings of Canadian shopping malls are still there, but the backend routing software has been completely gutted.

If you upgraded to a new iPhone running the latest version of iOS 18, there is a very high probability that you are suddenly standing in a crowded food court staring at an "Unable to Join Network" error message. 

Here is why your iPhone is suddenly fighting the network, and how to fix the collision between Apple's security and Rogers' new authentication servers.

## Cause 1: The iOS 18 MAC Randomization Block

In the ongoing war against advertisers tracking your movements through shopping malls, Apple introduced a massive security upgrade in iOS 14 that fully matured in iOS 18: **The Private Wi-Fi Address.**

Every smartphone has a permanent, unique hardware serial number assigned to its Wi-Fi chip called a MAC Address. Historically, when you registered for Shaw Go WiFi, Shaw's servers wrote your specific MAC Address onto a VIP list. Every time you walked near a hotspot, the router checked your MAC address against the list and let you in.

iOS 18 deliberately breaks this system. 

By default, iOS 18 generates a fake, completely randomized, constantly changing MAC address every time you connect to a new public Wi-Fi network. 

1.  Your iPhone approaches the Shaw/Rogers Passpoint network.
2.  Your iPhone hands the router a fake, scrambled MAC password (e.g., `0A:1B:2C:3D:4E:5F`).
3.  The Rogers server checks its database, realizes it has never seen that number before, assumes you are not a paying customer, and violently rejects the connection. 

### The Fix: Exposing Your Real MAC Address
You must explicitly tell your iPhone to trust this specific network and hand over its real hardware ID. 

1.  Open the **Settings** app on your iPhone.
2.  Tap on **Wi-Fi**.
3.  Under the "My Networks" or "Other Networks" list, find the **ShawPasspoint** or **Rogers WiFi Hotspots** name.
4.  Tap the small blue **Information "i" icon** on the far right.
5.  Locate the toggle labeled **Private Wi-Fi Address**. 
6.  Turn it **OFF**. A warning prompt will appear telling you that tracking will be enabled. Tap **Continue**. 
7.  While you are on this screen, also turn off **Limit IP Address Tracking** (which disables Apple's iCloud Private Relay VPN, another feature that frequently clashes with public captive portals). 
8.  Return to the main Wi-Fi screen and tap the network to connect.

<AdSenseBlock slot='article-middle' />

## Cause 2: The Expired "Ghost" Profile

If disabling the Private Address feature doesn't work, your iPhone is likely holding onto a "Ghost Profile."

When you originally set up Shaw Go WiFi years ago, you had to install an Apple Configuration Profile—a small piece of software containing a cryptographic security certificate. 

Following the Rogers merger, Rogers began intentionally invalidating the old Shaw security certificates and broadcasting a brand-new network called **"Rogers WiFi Hotspots."** If your iPhone is still desperately trying to authenticate using a 2022 Shaw security certificate, the modern 2026 Rogers servers will simply ignore the request. 

### The Fix: Nuke and Reinstall

You must digitally scrub the old Shaw software from your iPhone entirely before installing the modern equivalent. 

1.  **Delete the Ghost Profile:**
    *   Open **Settings > General**.
    *   Scroll down to **VPN & Device Management**.
    *   Look under the "Configuration Profiles" section. If you see a file named "Shaw Passpoint" or "Shaw Go WiFi," click on it.
    *   Tap the red **Remove Profile** button. Enter your iPhone passcode to confirm.
2.  **Forget the Network:**
    *   Go back to **Settings > Wi-Fi**.
    *   Find the network, tap the "i" info icon, and select **Forget This Network**.
3.  **Install the New Rogers Certificate:**
    *   Ensure you are standing in a physical location that offers the service (like a major mall or chained coffee shop).
    *   Look for the open, unencrypted network named **RogersWiFi** (not the secure Passpoint version yet). Tap to join.
    *   A captive portal webpage will pop up on your screen. 
    *   Sign in using your **MyRogers** (formerly My Shaw) account username and password.
    *   Once authorized, the website will prompt you to "Download Secure Profile." Tap Allow.
    *   Go back to **Settings > General > VPN & Device Management**, tap the new downloaded Rogers profile, and click **Install** in the top right corner.
    *   Your iPhone will now automatically and securely connect to the modern Rogers tier in the background.

## Cause 3: The Device Limit Trap

Finally, if you have successfully installed the new profile and turned off Private Wi-Fi tracking, but the connection *still* fails, you have likely run into the dreaded Device Limit. 

Depending on your specific Rogers internet tier, your account is only allowed to have a specific number of devices actively registered on the public Wi-Fi network (typically anywhere from 3 to 10 devices). 

Every time you upgrade your iPhone every two years, or buy a new iPad, or give your old phone to your child, the old devices remain permanently registered on your account. Eventually, the roster fills up. When you try to connect your shiny new iPhone 16, the server rejects it because slot #6 is already full with a dead iPhone 12 sitting in your drawer at home.

**The Fix:** You must log into your MyRogers dashboard on a desktop computer, navigate to the **Internet > Public Wi-Fi Management** tab, and manually click "Remove Device" next to the unrecognizable MAC addresses of your old, discarded electronics to free up a slot for your new phone.

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
